const NameGenerators = () => {
  // going to use this naming convention for mapped options
  const ENTRIES = [
    {
      name: "Roll for Fantasy",
      url: "https://rollforfantasy.com/",
    },
    {
      name: "Fantasy Name Generators",
      url: "https://www.fantasynamegenerators.com/",
    },
  ];
  return (
    <div>
      <div>
        <h2>Name Generators</h2>
      </div>
      <div>
        <ul>
          {ENTRIES.map((entry, idx) => (
            <li key={idx}>
              <a href={entry.url}>{entry.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NameGenerators;
