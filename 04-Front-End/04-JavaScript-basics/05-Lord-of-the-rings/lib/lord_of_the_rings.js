const isGood = soldierType => ["Hobbits", "Elves", "Dwarves", "Eagles"].includes(soldierType);

// TODO: return `true` if the soldierType is Good.
// Hint: Hobbits, Elves, Dwarves and Eagles are Good


const buildSoldierObject = (battlefield) => {
// split string in key and value by :
  const soldierObject = {};
  const soldierString = battlefield.split(",");

  soldierString.forEach((soldier) => {
    const type = soldier.split(":")[0];
    // const amount = soldier.split(":")[1];
    const amount = parseInt(soldier.split(":")[1], 0);

    soldierObject[type] = amount;
  });
  return soldierObject;
  // TODO: Given a battlefield (String), return an object of forces.
};

const whoWinsTheWar = (battlefield) => {
  if (!battlefield) {
    return 'Tie';
  }

  const soldiers = buildSoldierObject(battlefield);
  // stor results in an variable
  let result = 0;
  // iterate over the object first make it an array with  Object.keys()
  Object.keys(soldiers).forEach((soldierType) => {
  // Conditional (ternary) operator so first condition (isGood(soldiertype)) ? 'truthy' : 'falsy';
    result = isGood(soldierType) ? result + soldiers[soldierType] : result - soldiers[soldierType];
  });

  if (result === 0) {
    return 'Tie';
  }
  return (result > 0 ? "Good" : "Evil");
};

module.exports = { whoWinsTheWar, buildSoldierObject, isGood }; // Do not remove this line
