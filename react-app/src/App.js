import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import BookDetails from "./components/BookDetails";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChapterView from "./components/ChapterView";
import ResourceMain from "./components/Resources";
import Questionnaires from "./components/Resources/Questionnaires";
import NameGenerators from "./components/Resources/NameGenerators";
import OutlineTemplates from "./components/Resources/OutlineTemplates";

function App() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <ToastContainer />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/">
            {sessionUser ? <Dashboard /> : <LandingPage />}
          </Route>
          <Route exact path="/books/:bookId">
            <BookDetails />
          </Route>
          <Route exact path="/chapters/:chapterId">
            <ChapterView />
          </Route>
          <Route exact path="/resources">
            <ResourceMain />
          </Route>
          <Route exact path="/resources/questionnaires">
            <Questionnaires />
          </Route>
          <Route exact path="/resources/generators">
            <NameGenerators />
          </Route>
          <Route exact path="/resources/templates">
            <OutlineTemplates />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
