const utahCities = [
  "Alpine", "American Fork", "Blanding", "Bountiful", "Brigham City",
  "Castle Dale", "Cedar City", "Cedar Valley", "Centerville", "Clearfield",
  "Coalville", "Collinston", "Corinne", "Delta", "Draper",
  "Duchesne", "Dugway", "Eagle Mountain", "Eden", "Enterprise",
  "Ephraim", "Fairview", "Farmington", "Fillmore", "Grantsville",
  "Hanna", "Hatch", "Heber City", "Henefer", "Herriman",
  "Hildale", "Hill", "Hooper", "Huntington", "Hurricane",
  "Hyde Park", "Ivins", "Kamas", "Kanab", "Kaysville",
  "Lapoint", "Layton", "Lehi", "Lindon", "Logan",
  "Magna", "Manti", "Mantua", "Mapleton", "Mendon",
  "Midvale", "Midway", "Milford", "Millville", "Moab",
  "Monroe", "Morgan", "Moroni", "Mount Pleasant", "Neola",
  "Nephi", "North Salt Lake", "Oakley", "Ogden", "Orem",
  "Paradise", "Park City", "Payson", "Peoa", "Pine Valley",
  "Pleasant Grove", "Price", "Providence", "Provo", "Richfield",
  "Riverton", "Roosevelt", "Roy", "Saint George", "Salem",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < utahCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(utahCities[i]);
}

module.exports = { batches };
