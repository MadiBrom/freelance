document.addEventListener("DOMContentLoaded", () => {
  // Constants
  const names = [
    "Gronk",
    "Alastair",
    "Fartbuckle",
    "Nemeia",
    "Mike",
    "Ellith",
    "Rumaerra",
    "Wezcor",
    "Bobinore",
    "Bellatrix",
    "Norbert",
    "Rootbeer",
    "Moleta",
    "Lowin",
    "Pulchy",
  ];
  const races = [
    "Human",
    "Elf",
    "Dwarf",
    "Giant",
    "Goblin",
    "Dragonborn",
    "Tiefling",
    "Half-elf",
    "Orc",
    "Gnome",
    "Halfling",
    "Bugbear",
  ];
  const classes = [
    "Barbarian",
    "Bard",
    "Cleric",
    "Druid",
    "Fighter",
    "Monk",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
    "Warlock",
    "Wizard",
    "Artificer",
  ];
  const levels = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "51",
  ];

  const MAX_PARTY_SIZE = 5; // Maximum number of party members to display
  let party = [];

  // Utility function to get a random element from an array
  function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // Function to generate a new random party member
  function generateRandomPartyMember() {
    return {
      names: getRandomElement(names),
      races: getRandomElement(races),
      classes: getRandomElement(classes),
      levels: getRandomElement(levels),
    };
  }

  // Function to render the party members into the table
  function renderParty() {
    const table = document.querySelector("#partyTable tbody");
    if (table) {
      table.innerHTML = ""; // Clear the table body

      // Limit the number of displayed party members
      const membersToDisplay = party.slice(-MAX_PARTY_SIZE); // Only show the most recent members up to MAX_PARTY_SIZE

      membersToDisplay.forEach((member) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${member.names}</td>
          <td>${member.races}</td>
          <td>${member.classes}</td>
          <td>${member.levels}</td>
        `;
        table.appendChild(row);
      });
      updateAverageLevel();
    } else {
      console.error("Table body not found");
    }
  }

  // Function to calculate and update the average level of the party members
  function updateAverageLevel() {
    if (party.length === 0) {
      document.querySelector("#average-level").textContent =
        "Average Party Level: 0";
      return;
    }
    const total = party.reduce(
      (sum, member) => sum + parseInt(member.levels),
      0
    );
    const average = (total / party.length).toFixed(0);
    document.querySelector(
      "#average-level"
    ).textContent = `Average Party Level: ${average}`;
  }

  // Generate and add a new party member every 3 seconds
  setInterval(() => {
    party.push(generateRandomPartyMember());
    renderParty();
  }, 3000);

  // Initial render with a few party members
  party.push(generateRandomPartyMember(), generateRandomPartyMember()); // Add initial members
  renderParty();
});
