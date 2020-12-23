import React, { useState } from "react";

import { languages, skills } from "../../../../utils/Game";

const ConfigureRace = ({ race }) => {
  const getInitialSubrace = (race) => {
    switch (race) {
      case "Dwarf":
        return "Mountain Dwarf";
      case "Elf":
        return "Wood Elf";
      case "Halfling":
        return "Stout";
      case "Gnome":
        return "Rock Gnome";
      default:
        return "";
    }
  };
  const [subRace, setSubRace] = useState(getInitialSubrace(race));
  const [bonusProficiencies, setBonusProficiencies] = useState(["", ""]);
  const [toolProficiency, setToolProficiency] = useState("");
  const [error, setError] = useState("");
  const [draconicAncestry, setDraconicAncestry] = useState("");
  const ancestryTypes = [
    "Black",
    "Blue",
    "Brass",
    "Bronze",
    "Copper",
    "Gold",
    "Green",
    "Red",
    "Silver",
    "White",
  ];
  const [extraLanguage, setExtraLanguage] = useState("");
  const skillNames = skills.map((skill) => skill.name);
  const availableLanguages = languages
    .map(({ language }) => {
      if (language !== "Common") return language;
    })
    .filter((language) => language != undefined);
  const ExtraLanguageSelect = () => (
    <div className="input-group">
      <div className="input__error">{!!error ? error : ""}</div>
      <select
        value={extraLanguage}
        className={`select-input ${!!error ? "input--error" : ""}`}
        onChange={(e) => {
          setExtraLanguage(e.target.value);
        }}
      >
        <option value="">-</option>
        {availableLanguages.map((language) => (
          <option value={language} key={language}>
            {language}
          </option>
        ))}
      </select>
      <label className="label">Select additional language</label>
    </div>
  );

  switch (race) {
    case "Dwarf":
      return (
        <div>
          <h2>Choose Your Subrace</h2>
          <div
            className="input-group"
            onChange={(e) => {
              const { value } = e.target;
              setSubRace(value);
            }}
          >
            <label className="race-select__radio-button">
              <input
                type="radio"
                name="subRace"
                value="Hill Dwarf"
                checked={subRace === "Hill Dwarf"}
              />
              <h3>Hill Dwarf</h3>
            </label>
            <label className="race-select__radio-button">
              <input
                type="radio"
                name="subRace"
                value="Mountain Dwarf"
                checked={subRace === "Mountain Dwarf"}
              />
              <h3>Mountain Dwarf</h3>
            </label>
          </div>
          {subRace === "Hill Dwarf" && (
            <div>
              <p>
                As a hill dwarf, you have keen senses, deep intuition, and
                remarkable resilience.
              </p>
              <ul>
                <li>+1 Widsom</li>
                <li>+1 Hit Point Max</li>
                <li>+1 Hit Point Max per level</li>
              </ul>
            </div>
          )}
          {subRace === "Mountain Dwarf" && (
            <div>
              <p>
                As a mountain dwarf, you're strong and hardy, accustomed to a
                difficult life in rugged terrain
              </p>
              <ul>
                <li>+2 Strength</li>
                <li>Light/Medium Armor Proficiency</li>
              </ul>
            </div>
          )}
          <h2>Choose Your Tool Proficiency</h2>
          <div className="input-group">
            <div className="input__error">{!!error ? error : ""}</div>
            <select
              value={toolProficiency}
              className={`select-input ${!!error ? "input--error" : ""}`}
              onChange={(e) => {
                setToolProficiency(e.target.value);
              }}
            >
              <option value="">-</option>
              <option value="Smith's Tools">Smith's Tools</option>
              <option value="Brewer's Supplies">Brewer's Supplies</option>
              <option value="Mason's Tools">Mason's Tools</option>
            </select>
            <label className="label">Tool Proficiency</label>
          </div>
        </div>
      );
    case "Elf":
      return (
        <div>
          <h2>Choose Your Subrace</h2>
          <div
            className="input-group"
            onChange={(e) => {
              const { value } = e.target;
              setSubRace(value);
            }}
          >
            <label className="race-select__radio-button">
              <input
                type="radio"
                name="subRace"
                value="High Elf"
                checked={subRace === "High Elf"}
              />
              <h3>High Elf</h3>
            </label>
            <label className="race-select__radio-button">
              <input
                type="radio"
                name="subRace"
                value="Wood Elf"
                checked={subRace === "Wood Elf"}
              />
              <h3>Wood Elf</h3>
            </label>
            {/* <label className="race-select__radio-button">
              <input
                type="radio"
                name="subRace"
                value="Dark Elf"
                checked={subRace === "Dark Elf"}
              />
              <h3>Dark Elf</h3>
            </label> */}
          </div>
          {subRace === "High Elf" && (
            <div>
              <p>
                As a high elf, you have a keen mind and a mastery of at least
                the basics of magic.
              </p>
              <ul>
                <li>+1 Intelligence</li>
                <li>
                  Longsword, shortsword, shortbow, and longbow Proficiency
                </li>
              </ul>
              <h3>Cantrip</h3>
              <h3>Extra Language</h3>
              <ExtraLanguageSelect
                availableLanguages={availableLanguages}
                error={error}
              />
            </div>
          )}
          {subRace === "Wood Elf" && (
            <div>
              <p>
                As a wood elf, you have keen senses and intuition, and your
                fleet feet carry you quickly and stealthily through your native
                forests.
              </p>
              <ul>
                <li>+1 Wisdom</li>
                <li>
                  Longsword, shortsword, shortbow, and longbow proficiency
                </li>
                <li>Your base walking speed increases to 35 feet</li>
                <li>
                  You can attempt to hide even when you are only lightly
                  obscured by foliage, heavy rain, falling snow, mist, and other
                  natural phenomena.
                </li>
              </ul>
            </div>
          )}
          {/* {subRace === "Dark Elf" && (
            <div>
              <ul>
                <li>+1 Charisma</li>
                <li>Your darkvision has a radius of 120ft</li>
                <li>Rapier, shortswords, and hand crossbow proficiency</li>
                <li>
                  <b>Drow Magic</b>: Dancing Lights cantrip @ level 1, Darkness
                  @ level 5
                </li>
                <li>
                  <b>Sunlight Sensitivity</b>: disadvantage on attack rolls and
                  wisdom checks in direct sunlight
                </li>
              </ul>
            </div>
          )} */}
        </div>
      );
    case "Halfling":
      return (
        <div>
          <h2>Choose Your Subrace</h2>
          <div
            className="input-group"
            onChange={(e) => {
              const { value } = e.target;
              setSubRace(value);
            }}
          >
            <label className="race-select__radio-button">
              <input
                type="radio"
                name="subRace"
                value="Lightfoot"
                checked={subRace === "Lightfoot"}
              />
              <h3>Lightfoot</h3>
            </label>
            <label className="race-select__radio-button">
              <input
                type="radio"
                name="subRace"
                value="Stout"
                checked={subRace === "Stout"}
              />
              <h3>Stout</h3>
            </label>
          </div>
          {subRace === "Lightfoot" && (
            <div>
              <p>
                As a lightfoot halfling, you can easily hide from notice, even
                using other people as cover. You’re inclined to be affable and
                get along well with others.
              </p>
              <ul>
                <li>+1 Charisma</li>
                <li>
                  You can attempt to hide even when you are obscured only by a
                  creature that is at least one size larger than you
                </li>
              </ul>
            </div>
          )}
          {subRace === "Stout" && (
            <div>
              <p>
                As a stout halfling, you’re hardier than average and have some
                resistance to poison.
              </p>
              <ul>
                <li>+1 Constitution</li>
                <li>
                  You have advantage on saving throws against poison, and you
                  have resistance against poison damage.
                </li>
              </ul>
            </div>
          )}
        </div>
      );
    case "Human":
      return (
        <div>
          <h3>Extra Language</h3>
          <ExtraLanguageSelect
            availableLanguages={availableLanguages}
            error={error}
          />
        </div>
      );
    case "Dragonborn":
      return (
        <div>
          <h3>Draconic Ancestry</h3>
          <div className="input-group">
            <div className="input__error">{!!error ? error : ""}</div>
            <select
              value={draconicAncestry}
              className={`select-input ${!!error ? "input--error" : ""}`}
              onChange={(e) => {
                setDraconicAncestry(e.target.value);
              }}
            >
              <option value="">-</option>
              {ancestryTypes.map((type) => (
                <option value={type} key={type}>
                  {type}
                </option>
              ))}
            </select>
            <label className="label">Select Your Ancestry</label>
          </div>
        </div>
      );
    case "Gnome":
      return (
        <div>
          <h2>Choose Your Subrace</h2>
          <div
            className="input-group"
            onChange={(e) => {
              const { value } = e.target;
              setSubRace(value);
            }}
          >
            <label className="race-select__radio-button">
              <input
                type="radio"
                name="subRace"
                value="Forest Gnome"
                checked={subRace === "Forest Gnome"}
              />
              <h3>Forest Gnome</h3>
            </label>
            <label className="race-select__radio-button">
              <input
                type="radio"
                name="subRace"
                value="Rock Gnome"
                checked={subRace === "Rock Gnome"}
              />
              <h3>Rock Gnome</h3>
            </label>
          </div>
          {subRace === "Forest Gnome" && (
            <div>
              <p>
                As a forest gnome, you have a natural knack for illusion and
                inherent quickness and stealth.
              </p>
              <ul>
                <li>+1 Dexterity</li>
                <li>You know the minor illusion cantrip</li>
                <li>
                  You can communicate simple ideas with small forest creatures
                </li>
              </ul>
            </div>
          )}
          {subRace === "Rock Gnome" && (
            <div>
              <p>
                As a rock gnome, you have a natural inventiveness and hardiness
                beyond that of other gnomes.
              </p>
              <ul>
                <li>+1 Constitution</li>
                <li>
                  <b>Artificer’s Lore</b>: Whenever you make an Intelligence
                  (History) check related to magic items, alchemical objects, or
                  technological devices, you can add twice your proficiency
                  bonus, instead of any proficiency bonus you normally apply.
                </li>
                <li>
                  You have proficiency with tinker's tools and can construct
                  tiny clockwork devices.
                </li>
              </ul>
            </div>
          )}
        </div>
      );
    case "Half-Elf":
      return (
        <div>
          <h3>Extra Language</h3>
          <ExtraLanguageSelect
            availableLanguages={availableLanguages}
            error={error}
          />
          <h3>Skill Versatility</h3>
          <p>Choose two skills to gain proficiency in.</p>
          <div className="input-group">
            <div className="input__error">{!!error ? error : ""}</div>
            <select
              value={bonusProficiencies[0]}
              className={`select-input ${!!error ? "input--error" : ""}`}
              onChange={(e) => {
                const bonusProfUpdates = [...bonusProficiencies];
                bonusProfUpdates[0] = e.target.value;
                setBonusProficiencies(bonusProfUpdates);
              }}
            >
              <option value="">-</option>
              {skillNames.map((skill) => (
                <option value={skill} key={skill}>
                  {skill}
                </option>
              ))}
            </select>
            <label className="label">Select Your Skill</label>
            <select
              value={bonusProficiencies[1]}
              className={`select-input ${!!error ? "input--error" : ""}`}
              onChange={(e) => {
                const bonusProfUpdates = [...bonusProficiencies];
                bonusProfUpdates[1] = e.target.value;
                setBonusProficiencies(bonusProfUpdates);
              }}
            >
              <option value="">-</option>
              {skillNames.map((skill) => (
                <option value={skill} key={skill}>
                  {skill}
                </option>
              ))}
            </select>
            <label className="label">Select Your Skill</label>
          </div>
        </div>
      );
    case "Half-Orc":
      return <div></div>;
    case "Tiefling":
      return <div></div>;
    default:
      return (
        <div>
          <p>Invalid race recieved</p>
        </div>
      );
  }
};

export default ConfigureRace;
