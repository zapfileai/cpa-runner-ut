const utahCities = [
  "Salt Lake City", "Sandy", "Santa Clara", "Santaquin", "Saratoga Springs",
  "Smithfield", "South Jordan", "Spanish Fork", "Springville", "Syracuse",
  "Talmage", "Tooele", "Tremonton", "Vernal", "Washington",
  "Wellsville", "West Jordan", "West Valley City", "Willard", "Woods Cross",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < utahCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(utahCities[i]);
}

module.exports = { batches };
