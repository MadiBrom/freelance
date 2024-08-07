const titles = [
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

let party = [];

function getRandomElement(total) {
  return total[Math.floor(Math.random() * total.length)];
}

function generateRandomPartyMember() {
  return {
    names: getRandomElement(titles),
    races: getRandomElement(races),
    classes: getRandomElement(classes),
    levels: getRandomElement(levels),
  };
}

function renderParty() {
  const table = document.querySelector("#partyTable tbody");
  table.innerHTML = "";
  // this is the short way so you do not need to write out every append.
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

// Average calculation
function updateAverageLevel() {
  if (party.length === 0) {
    document.querySelector("#average-level").textContent =
      "Average Party Level: 0";
    return;
  }
  const total = party.reduce((sum, member) => sum + parseInt(member.levels), 0);
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

// Initial render possible add to end function
renderParty();
