from app.models import db, User, environment, SCHEMA
from app.models.book import Book
from app.models.character import Character
from app.models.chapter import Chapter
from app.models.world import World
from app.models.location import Location
from app.models.event import Event
from app.models.faction import Faction
from app.models.race import Race
from app.models.magic import Magic
from app.models.element import Element
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='PenQuill', email='demo@aa.io', password='password', first_name='Penelope', last_name='Quillington', bio="Penelope Quillington, a literary sorceress weaving tales from the realms of imagination, is the enigmatic wordsmith behind a cascade of captivating narratives. Born under a celestial conjunction of quills and parchment, Penelope's journey into the world of storytelling began when she stumbled upon an ancient typewriter in her grandmother's attic. With a penchant for exploring the uncharted territories of the mind, Penelope crafts stories that dance on the delicate edge between reality and fantasy. Her pen, rumored to be enchanted, breathes life into characters with quirks as peculiar as her favorite midnight tea rituals. Penelope's literary endeavors have led her to receive the Mystic Quill Award for Outstanding Contribution to the Unseen Literary Arts—an accolade bestowed upon those whose words transcend the mundane and transport readers to realms where dreams and reality entwine. When not lost in the labyrinth of her own creation, Penelope can be found in her secret library, surrounded by ancient tomes and mythical creatures that only exist between the pages of her books. Her latest work, 'Whispers of the Celestial Quill,' invites readers on a mesmerizing journey through enchanted realms, where words hold the power to shape destinies.")
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password')

    db.session.add_all([demo, marnie, bobbie])
    db.session.commit()

    book1 = Book(
        author_id=1,
        title='Whispers of the Ephemeral Nexus',
        blurb='In the mystical land of Eldoria, where shadows intertwine with whispers of ancient magic, a lone adventurer embarks on a quest to unravel the secrets of the Ephemeral Nexus. As darkness encroaches, alliances are forged, and the fate of Eldoria hangs in the balance.',
        themes='Exploration of Destiny, Magic and Intrigue, Bonds Beyond Realms, The Power of Words, Unraveling Secrets',
        genres='Fantasy, Mystery, Adventure',
        plot_details='In "Whispers of the Ephemeral Nexus," readers will journey through enchanted landscapes, encountering mythical creatures, and solving cryptic riddles that guard the portal to unimaginable realms. A prophecy unfolds as characters grapple with the consequences of their choices, shaping the destiny of Eldoria itself.',
        style_and_voice="Penelope Quillington's prose is a symphony of lyrical enchantment, weaving a tapestry of words that transport readers to realms where reality blurs with dreams. The narrative dances between the poetic and the suspenseful, creating an immersive experience that lingers in the reader's mind.",
        is_template=True,
        template_id=0
    )

    db.session.add(book1)
    db.session.commit()

    world1 = World(
        book_id=1,
        author_id=1,
        name='Eldoria',
        description='A realm of enchantment where magic permeates the very air. Eldoria is characterized by mystical landscapes, ancient forests, and towering mountains. At its heart lies the Ephemeral Nexus, a focal point of magical energy connecting different realms and shaping the destiny of the world.',
        notes="Eldoria's magic is intertwined with the fate of its inhabitants, and the Ephemeral Nexus holds the key to unlocking the secrets of the universe.",
        landscape="Eldoria boasts diverse landscapes, including enchanted meadows, ethereal floating islands, crystalline lakes, and sprawling celestial forests.",
        natural_resources="The land is rich in magical crystals, moonstone ores, and ethereal flora, providing the essential components for potent enchantments and elixirs.",
        seasons="Eldoria experiences four distinct seasons, each marked by magical phenomena. Spring brings blossoms infused with rejuvenating magic, while autumn leaves carry visions of the future.",
        weather="The weather is influenced by the Nexus, creating whimsical meteor showers, gentle starlight rains, and occasional auroras that dance across the sky.",
        animals="Creatures like luminous phoenixes, moonlit unicorns, and astral butterflies inhabit Eldoria. Magical familiars, such as celestial foxes and shadowcat guardians, are revered companions.",
        plants="Enchanted flora includes shimmering stardust roses, moonshadow vines that weave illusions, and celestial willow trees that grant visions to those who seek their shade."
    )

    db.session.add(world1)
    db.session.commit()

    location1 = Location(
        world_id=1,
        book_id=1,
        name='The Whispering Woods',
        description='A sacred grove within Eldoria, where ancient trees whisper mysterious secrets. The air is thick with magic, and the leaves echo with the voices of unseen spirits. The Whispering Woods is a place of tranquility and mystery, guarded by ancient spirits.'
    )

    location2 = Location(
        world_id=1,
        book_id=1,
        name="Shadow's Embrace Tavern",
        description='Nestled at the crossroads of Eldoria, this mystical tavern is a haven for wanderers and adventurers. Shadows come alive within its walls, and tales of forgotten prophecies are traded over enchanted brews. Gideon Shadowthorn first encounters the shadowy figure here.'
    )

    location3 = Location(
        world_id=1,
        book_id=1,
        name='Celestial Peak',
        description='A towering mountain that pierces the sky, its summit lost in the clouds. At Celestial Peak, Aurelia Swiftwind undertakes a perilous journey to seek guidance from the ancient eagles that nest there. The mountain is said to be a gateway to the celestial realms.'
    )

    location4 = Location(
        world_id=1,
        book_id=1,
        name='Moonlit Harbor',
        description='A coastal town bathed in the soft glow of moonlight, Moonlit Harbor is a hub of maritime trade and magical commerce. Ships with sails adorned with luminescent runes dock at the harbor, bringing artifacts and knowledge from distant lands.'
    )

    location5 = Location(
        world_id=1,
        book_id=1,
        name='Ephemeral Nexus Chamber',
        description="A hidden chamber at the core of the Ephemeral Nexus, accessible only to those attuned to the magic of Eldoria. Here, Evelyn Mistral discovers the key to unlocking the Nexus's secrets, and the characters converge to confront the impending prophecy."
    )

    db.session.add_all([location1, location2, location3, location4, location5])
    db.session.commit()

    race1 = Race(
        world_id=1,
        book_id=1,
        name='Luminari Elves',
        classification='Elven',
        appearance='Luminari Elves have opalescent skin that shimmers in different hues under sunlight. They possess elongated ears, radiant eyes, and hair that glows like starlight.',
        fashion='They adorn themselves with celestial-inspired attire, often incorporating luminescent materials and intricate jewelry reflecting their connection to the stars.',
        language='Luminaric, a melodic language with tones reminiscent of celestial harmonies.',
        status='Revered as celestial emissaries, Luminari Elves hold positions of wisdom and leadership within elven societies.',
        religion_and_deities='Worshipers of the Starlight Pantheon, with deities embodying aspects of the cosmos.',
        primary_location_id=1,
        society_and_culture='Known for their pursuit of knowledge and mastery of celestial magic, Luminari Elves value harmony and cosmic balance.',
        notes='Luminari Elves are immune to the effects of moonlit curses due to their celestial essence.'
    )

    race2 = Race(
        world_id=1,
        book_id=1,
        name='Dreadshade Goblins',
        classification='Goblinoid',
        appearance='Dreadshade Goblins have charcoal-black skin, blood-red eyes, and sharp, elongated fangs. They are often adorned with ritualistic tattoos symbolizing dark pacts.',
        fashion='Their clothing is made from shadow-woven fabrics, and they often wear bone accessories as symbols of their allegiance to dark forces.',
        language='Shadowtongue, a guttural language imbued with dark incantations and ominous undertones.',
        status='Feared and shunned by other races, Dreadshade Goblins are often associated with malevolent practices.',
        religion_and_deities='Worshipers of the Abyssal Shadows, entities representing chaos and malevolence.',
        primary_location_id=2,
        society_and_culture='Organized into sinister covens, Dreadshade Goblins thrive in the shadows, practicing dark magic and plotting schemes.',
        notes='They have an innate ability to meld with shadows for stealth and ambush tactics.'
    )

    race3 = Race(
        world_id=1,
        book_id=1,
        name='Nomadic Skybound Dwarves',
        classification='Dwarven',
        appearance='Skybound Dwarves have sturdy builds, ruddy complexions, and eyes that reflect the ever-changing skies. They often wear feathered accessories.',
        fashion='Their clothing incorporates feathers and airy fabrics, symbolizing their connection to the skies and their nomadic lifestyle.',
        language='Auran Dwarvish, a dialect influenced by the language of air elementals.',
        status='Respected traders and skilled artisans, Nomadic Skybound Dwarves are sought after for their airship craftsmanship.',
        religion_and_deities='Reverence for Skyforged Ancestors, legendary Dwarven airship builders.',
        primary_location_id=3,
        society_and_culture='Known for their aerial craftsmanship, they traverse the skies in majestic airships, trading goods and knowledge.',
        notes='Possess specialized airship crews with adept navigators and elemental engineers.'
    )

    db.session.add_all([race1, race2, race3])
    db.session.commit()

    faction1 = Faction(
        book_id=1,
        name='The Radiant Guardians',
        details="The Radiant Guardians are an ancient order dedicated to preserving the balance of magic in Eldoria. Composed of skilled mages, healers, and defenders, their purpose is to safeguard the Nexus and prevent the misuse of its power. They are known for their selfless acts, healing the wounded, and maintaining harmony within Eldoria.",
        allegiance='Good',
        location_id=3
    )

    faction2 = Faction(
        book_id=1,
        name='The Shadow Coven',
        details="The Shadow Coven is a clandestine group that seeks to exploit the Ephemeral Nexus for dark purposes. Comprising rogue sorcerers and mercenaries, their insidious rituals threaten to unleash a shadowy force that could consume Eldoria. Their motives are shrouded in secrecy, and whispers of malevolent plots surround their every move.",
        allegiance="Bad",
        location_id=4
    )

    faction3 = Faction(
        book_id=1,
        name='The Astral Nomads',
        details="The Astral Nomads are wanderers who traverse the celestial realms, detached from the conflicts of Eldoria. They seek knowledge and understanding of the Nexus but maintain a stance of neutrality in worldly affairs. Their nomadic lifestyle, guided by the stars, brings them into contact with various factions, yet they remain enigmatic in their allegiance.",
        allegiance="Neutral",
        location_id=5
    )

    db.session.add_all([faction1, faction2, faction3])
    db.session.commit()

    book1_character1 = Character(
        book_id=1,
        world_id=1,
        faction_id=1,
        name='Evelyn Mistral',
        traits='Mystical, Observant, Empathetic',
        personality='Reserved yet Commanding, Wise Beyond Years',
        quips='In the tapestry of magic, every thread weaves a destiny.',
        description='Evelyn is an enigmatic sorceress with silver hair that seems to shimmer with the essence of magic. Her eyes hold ancient knowledge, and her staff, adorned with ethereal crystals, channels the energy of the Ephemeral Nexus.',
        notes='Possesses a mysterious artifact that resonates with the Nexus, marking her as the chosen one.'
    )

    book1_character2 = Character(
        book_id=1,
        world_id=1,
        faction_id=2,
        name='Gideon Shadowthorn',
        traits='Brooding, Agile, Skilled with Blades',
        personality='Cautious, Driven by Visions, Heart of Gold',
        quips='In the shadows, I find solace, but in the light, I discover purpose.',
        description='Gideon is a rogue with a cloak that seems to absorb the darkness around him. His piercing blue eyes hold the weight of unseen visions, and twin daggers rest at his side, each engraved with ancient symbols.',
        notes='Haunted by visions of a prophecy that intertwines his fate with the Nexus.'
    )

    book1_character3 = Character(
        book_id=1,
        world_id=1,
        faction_id=1,
        name='Aurelia Swiftwind',
        traits='Graceful, Sharp-eyed, Connected to Nature',
        personality='Loyal, Free-spirited, Oath-bound Protector',
        quips='In the dance of the leaves, hear the whispers of the wind.',
        description='Aurelia is an elven archer with wings that unfold like those of a majestic bird. Her bow, crafted from enchanted wood, channels the essence of ancient magic. Her attire is adorned with feathers, reflecting her bond with the skies.',
        notes='Sworn to protect the Nexus, carries an amulet with the symbol of her elven kin.'
    )

    db.session.add_all([book1_character1, book1_character2, book1_character3])
    db.session.commit()

    event1 = Event(
        book_id=1,
        world_id=1,
        location_id=4,
        name='Veil Unraveling',
        timeframe='Celestial Alignment',
        details='A celestial event occurs, causing the fabric of reality to unravel. Strange phenomena manifest across Eldoria, and the characters realize that the Nexus is in turmoil. They must decipher the signs and prevent the impending catastrophe.',
        impact='The event sets the characters on a quest to restore balance to Eldoria and unveils hidden truths about the Nexus.'
    )

    event2 = Event(
        book_id=1,
        world_id=1,
        location_id=1,
        name='Whispers of the Ancient Grove',
        timeframe='Night of the Enchanted Moon',
        details="The Whispering Woods comes alive with ethereal voices, revealing forgotten truths about Eldoria's past. Evelyn Mistral receives a vision guiding her to seek the Nexus Chamber, where the characters uncover the link between their destinies.",
        impact="The characters gain crucial insights into the history of Eldoria, leading them to pivotal locations and shaping their understanding of the impending prophecy."
    )

    event3 = Event(
        book_id=1,
        world_id=1,
        location_id=2,
        name='Shadows Converge',
        timeframe='Twilight Hour',
        details="Gideon Shadowthorn's shadowy past catches up with him at Shadow's Embrace Tavern. A mysterious figure from his history emerges, revealing a dark connection to the Nexus. The characters must confront shadows that threaten to engulf Eldoria in darkness.",
        impact="The revelation deepens the characters' bonds, unveiling personal quests, and sets the stage for a confrontation with the looming darkness."
    )

    db.session.add_all([event1, event2, event3])
    db.session.commit()

    chapter1 = Chapter(
        book_id=1,
        title='The Whispering Woods Revealed',
        highlights="Evelyn Mistral ventures into the heart of the Whispering Woods, guided by the ethereal voices of ancient spirits. The trees reveal long-buried secrets, and Evelyn discovers the significance of her connection to the Nexus. A hidden passage leads her to an ancient chamber where the Nexus's energy resonates.",
        draft="In the draft of this chapter, mystical descriptions of the Whispering Woods unfold, with Evelyn's awe and realization of her destiny. The dialogue between Evelyn and the ancient spirits is filled with cryptic messages, setting the stage for the unfolding narrative."
    )

    chapter2 = Chapter(
        book_id=1,
        title="Shadows Dance at Shadow's Embrace",
        highlights="Gideon Shadowthorn's past collides with the present as shadows converge at Shadow's Embrace Tavern. A mysterious figure steps out from the darkness, revealing a connection between Gideon and the impending darkness threatening Eldoria. The atmosphere within the tavern becomes tense as alliances are tested and secrets are laid bare.",
        draft="In the draft of this chapter, the dimly lit ambiance of Shadow's Embrace Tavern is vividly described, creating an atmosphere of suspense. Gideon's internal turmoil is portrayed through his reactions to the revelation, and the dialogue unfolds as a series of cryptic exchanges, leaving readers eager for more."
    )

    chapter3 = Chapter(
        book_id=1,
        title="Celestial Summit's Challenge",
        highlights="Aurelia Swiftwind ascends Celestial Peak, guided by the whispers of the ancient eagles. The summit holds a challenge that tests Aurelia's connection to the celestial realms. The journey unveils Aurelia's true purpose and a revelation about the nexus's role in maintaining the balance between Eldoria and distant realms.",
        draft="In the draft of this chapter, the majestic ascent of Celestial Peak is depicted with breathtaking imagery. The challenges faced by Aurelia and her interactions with the ancient eagles are detailed, emphasizing the significance of her quest in the overarching narrative."
    )

    db.session.add_all([chapter1, chapter2, chapter3])
    db.session.commit()

    element1 = Element(
        author_id=1,
        book_id=1,
        name="Moonlit Prophecy",
        details="A foretelling that unfolds during the enchanted moonlit night, revealing cryptic visions and portents. The prophecy intertwines the fates of key characters and sets the stage for an impending cosmic event."
    )

    element2 = Element(
        author_id=1,
        book_id=1,
        name="Chronicles of the Nexus",
        details="A mystical tome containing the history, secrets, and spells related to the Ephemeral Nexus. The book becomes a sought-after artifact, unlocking the Nexus's potential and revealing forgotten truths."
    )

    element3 = Element(
        author_id=1,
        book_id=1,
        name="Harmony Stones",
        details="Ancient gemstones imbued with the essence of celestial harmony. When brought together, they amplify Luminaric Celestial Magic and are key to restoring balance to Eldoria."
    )

    db.session.add_all([element1, element2, element3])
    db.session.commit()

    magic1 = Magic(
        book_id=1,
        world_id=1,
        name="Luminaric Celestial Magic",
        description="A magic system fueled by the essence of celestial bodies. Practitioners draw power from stars, moons, and planets, channeling cosmic energy for healing, divination, and protection.",
        element="Celestial",
        rules="Alignment with celestial bodies enhances magic potency. Overreliance on dark celestial events may lead to unintended consequences.",
        uses="Healing, celestial divination, starlight illusions, and protection against dark magic.",
        notes="Luminaric Celestial Magic is sought after for its harmonious effects and ability to counteract malevolent forces."
    )

    magic2 = Magic(
        book_id=1,
        world_id=1,
        name="Abyssal Shadowcraft",
        description="A forbidden magic tied to the shadowy abyss. Practitioners harness dark energies to manipulate shadows, create illusions, and tap into the destructive power of the void.",
        element="Shadow",
        rules="Unleashing too much abyssal power risks corruption and madness. Shadows can take a toll on the user's sanity.",
        uses="Stealth, shadow manipulation, illusion casting, and invoking shadow entities.",
        notes="Mastery of Abyssal Shadowcraft grants the ability to traverse between shadows."
    )

    magic3 = Magic(
        book_id=1,
        world_id=1,
        name="Auran Skyweaving",
        description="Elemental magic attuned to the skies and air. Practitioners manipulate air currents, summon breezes, and shape clouds for various effects.",
        element="Air",
        rules="Requires attunement to natural air currents. Overuse may disrupt local weather patterns.",
        uses="Aeromancy, flight augmentation, cloud manipulation, and summoning gentle zephyrs.",
        notes="Auran Skyweaving is integral to the navigation of airships among Nomadic Skybound Dwarves."
    )

    db.session.add_all([magic1, magic2, magic3])
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()
