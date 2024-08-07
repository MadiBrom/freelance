// Constant arrays
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

let party = [
  { names: "Fartbuckle", races: "Goblin", classes: "Rogue", levels: "3" },
  { names: "Pulchy", races: "Bugbear", classes: "Barbarian", levels: "14" },
];

function renderParty() {
  const table = document.querySelector("#partyTable tbody");
  table.innerHTML = ""; // Clear the table body

  party.forEach((member) => {
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
}

function updateAverageLevel() {
  if (party.length === 0) {
    document.querySelector("#average-level").textContent =
      "Average Party Level: 0";
    return;
  }
  const total = party.reduce((sum, member) => sum + parseInt(member.levels), 0);
  const average = (total / party.length).toFixed(2);
  document.querySelector(
    "#average-level"
  ).textContent = `Average Party Level: ${average}`;
}

// Initial render
renderParty();
