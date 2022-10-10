/*
@title: Bolt Battle
@author: Arnav Ambre

/*
@title: Bolt Battle
@author: Arnav Ambre

INSTRUCTIONS:
Use WASD to move the character to push the lighting bolts onto the batteries.
In this update, blue bolts must be moved onto blue batteries, and yellow bolts must be moved to yellow batteries.

This is a remix of Candy Rush by Tasbia (https://github.com/Tasbia).
*/


const player = "p";
const bolt = "b";
const battery = "g";
const batteryBlue = "x";
const boltBlue = "y";
const wall = "w";

setLegend(
  [ player, bitmap`
......CCCC......
.....CCCCCCCC...
......0000......
.....002200.....
.....022220.....
.....022220.....
.....022220.....
......0000......
.....044440.....
....0.4444.0....
......4444......
.....444444.....
.....444444.....
......0..0......
......0..0......
.....55..55.....`],
  [ bolt, bitmap`
................
.....00000000...
.....06666660...
....06666660....
....0666660.....
...0666660......
...066660000....
..0666666660....
..000066660.....
.....06660......
....06660.......
....0660........
...0660.........
...060..........
..060...........
..00............`],
  [ boltBlue, bitmap`
................
.....00000000...
.....07777770...
....07777770....
....0777770.....
...0777770......
...077770000....
..0777777770....
..000077770.....
.....07770......
....07770.......
....0770........
...0770.........
...070..........
..070...........
..00............`],
  [ battery, bitmap`
................
................
................
................
....00000000....
...0666666660...
...06633336600..
...06693336600..
...06699336600..
...06699936600..
...0666666660...
....00000000....
................
................
................
................`],
  [ batteryBlue, bitmap`
................
................
................
................
....00000000....
...0777777770...
...07733337700..
...07793337700..
...07799337700..
...07799937700..
...0777777770...
....00000000....
................
................
................
................`], 
  [ wall, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`]
);

let level = 0;
const levels = [
  map`
.g...
...b.
py...
....x`,
  map`
g.b.w.
wwx...
p.w...
.w..y.
......`,
  map`
.....g
..w...
w.....
x..wb.
wwy...
p..w.w`,
  map`
...w...
.b.....
.w.pw.g
x.bw..w
....y.w
..gw.ww`,
  map`
...w...
.b.....
.w.pw.g
g.yw..w
....b.w
..xw.ww`,
  map`
w.....w
.b....g
....y.w
wx.....
wwww.ww
p....yx`,
];

const currentLevel = levels[level];
setMap(currentLevel);

setSolids([ player, bolt, boltBlue, wall ]);

setPushables({
  [player]: [boltBlue,bolt],

  
  /*no pushing bolt with bolt to make it harder*/
});

// START - PLAYER MOVEMENT CONTROLS

onInput("s", () => {
  getFirst(player).y += 1;
});

onInput("d", () => {
  getFirst(player).x += 1;
});

onInput("w", () => {
  getFirst(player).y -= 1;
});

onInput("a", () => {
  getFirst(player).x -= 1;
});

// END - PLAYER MOVEMENT CONTROLS

onInput("j", () => {
  const currentLevel = levels[level];
  if (currentLevel !== undefined) {
    clearText("");
    setMap(currentLevel);
  }
});

afterInput(() => {
  // count the number of tiles with goals
  const targetNumber = tilesWith(battery).length;
  const targetNumberBlue = tilesWith(batteryBlue).length;
  // count the number of tiles with goals and boxes
  const numberCovered = tilesWith(battery, bolt).length;
  const numberCoveredBlue = tilesWith(batteryBlue, boltBlue).length;

  if (numberCovered === targetNumber && numberCoveredBlue === targetNumberBlue) {
    // increase the current level number
    level = level + 1;

    const currentLevel = levels[level];

    // make sure the level exists and if so set the map
    if (currentLevel !== undefined) {
      setMap(currentLevel);
    } else {
      addText("Congrats, you win!", { y: 4, color: [255, 0, 0] });
    }
  }
});/*
@title: Bolt Battle
@author: Arnav Ambre

/*
@title: Bolt Battle
@author: Arnav Ambre

INSTRUCTIONS:
Use WASD to move the character to push the lighting bolts onto the batteries.
In this update, blue bolts must be moved onto blue batteries, and yellow bolts must be moved to yellow batteries.

This is a remix of Candy Rush by Tasbia (https://github.com/Tasbia).
*/


const player = "p";
const bolt = "b";
const battery = "g";
const batteryBlue = "x";
const boltBlue = "y";
const wall = "w";

setLegend(
  [ player, bitmap`
......CCCC......
.....CCCCCCCC...
......0000......
.....002200.....
.....022220.....
.....022220.....
.....022220.....
......0000......
.....044440.....
....0.4444.0....
......4444......
.....444444.....
.....444444.....
......0..0......
......0..0......
.....55..55.....`],
  [ bolt, bitmap`
................
.....00000000...
.....06666660...
....06666660....
....0666660.....
...0666660......
...066660000....
..0666666660....
..000066660.....
.....06660......
....06660.......
....0660........
...0660.........
...060..........
..060...........
..00............`],
  [ boltBlue, bitmap`
................
.....00000000...
.....07777770...
....07777770....
....0777770.....
...0777770......
...077770000....
..0777777770....
..000077770.....
.....07770......
....07770.......
....0770........
...0770.........
...070..........
..070...........
..00............`],
  [ battery, bitmap`
................
................
................
................
....00000000....
...0666666660...
...06633336600..
...06693336600..
...06699336600..
...06699936600..
...0666666660...
....00000000....
................
................
................
................`],
  [ batteryBlue, bitmap`
................
................
................
................
....00000000....
...0777777770...
...07733337700..
...07793337700..
...07799337700..
...07799937700..
...0777777770...
....00000000....
................
................
................
................`], 
  [ wall, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`]
);

let level = 0;
const levels = [
  map`
.g...
...b.
py...
....x`,
  map`
g.b.w.
wwx...
p.w...
.w..y.
......`,
  map`
.....g
..w...
w.....
x..wb.
wwy...
p..w.w`,
  map`
...w...
.b.....
.w.pw.g
x.bw..w
....y.w
..gw.ww`,
  map`
...w...
.b.....
.w.pw.g
g.yw..w
....b.w
..xw.ww`,
  map`
w.....w
.b....g
....y.w
wx.....
wwww.ww
p....yx`,
];

const currentLevel = levels[level];
setMap(currentLevel);

setSolids([ player, bolt, boltBlue, wall ]);

setPushables({
  [player]: [boltBlue,bolt],

  
  /*no pushing bolt with bolt to make it harder*/
});

// START - PLAYER MOVEMENT CONTROLS

onInput("s", () => {
  getFirst(player).y += 1;
});

onInput("d", () => {
  getFirst(player).x += 1;
});

onInput("w", () => {
  getFirst(player).y -= 1;
});

onInput("a", () => {
  getFirst(player).x -= 1;
});

// END - PLAYER MOVEMENT CONTROLS

onInput("j", () => {
  const currentLevel = levels[level];
  if (currentLevel !== undefined) {
    clearText("");
    setMap(currentLevel);
  }
});

afterInput(() => {
  // count the number of tiles with goals
  const targetNumber = tilesWith(battery).length;
  const targetNumberBlue = tilesWith(batteryBlue).length;
  // count the number of tiles with goals and boxes
  const numberCovered = tilesWith(battery, bolt).length;
  const numberCoveredBlue = tilesWith(batteryBlue, boltBlue).length;

  if (numberCovered === targetNumber && numberCoveredBlue === targetNumberBlue) {
    // increase the current level number
    level = level + 1;

    const currentLevel = levels[level];

    // make sure the level exists and if so set the map
    if (currentLevel !== undefined) {
      setMap(currentLevel);
    } else {
      addText("Congrats, you win!", { y: 4, color: [255, 0, 0] });
    }
  }
});/*
@title: Bolt Battle
@author: Arnav Ambre

/*
@title: Bolt Battle
@author: Arnav Ambre

INSTRUCTIONS:
Use WASD to move the character to push the lighting bolts onto the batteries.
In this update, blue bolts must be moved onto blue batteries, and yellow bolts must be moved to yellow batteries.

This is a remix of Candy Rush by Tasbia (https://github.com/Tasbia).
*/


const player = "p";
const bolt = "b";
const battery = "g";
const batteryBlue = "x";
const boltBlue = "y";
const wall = "w";

setLegend(
  [ player, bitmap`
......CCCC......
.....CCCCCCCC...
......0000......
.....002200.....
.....022220.....
.....022220.....
.....022220.....
......0000......
.....044440.....
....0.4444.0....
......4444......
.....444444.....
.....444444.....
......0..0......
......0..0......
.....55..55.....`],
  [ bolt, bitmap`
................
.....00000000...
.....06666660...
....06666660....
....0666660.....
...0666660......
...066660000....
..0666666660....
..000066660.....
.....06660......
....06660.......
....0660........
...0660.........
...060..........
..060...........
..00............`],
  [ boltBlue, bitmap`
................
.....00000000...
.....07777770...
....07777770....
....0777770.....
...0777770......
...077770000....
..0777777770....
..000077770.....
.....07770......
....07770.......
....0770........
...0770.........
...070..........
..070...........
..00............`],
  [ battery, bitmap`
................
................
................
................
....00000000....
...0666666660...
...06633336600..
...06693336600..
...06699336600..
...06699936600..
...0666666660...
....00000000....
................
................
................
................`],
  [ batteryBlue, bitmap`
................
................
................
................
....00000000....
...0777777770...
...07733337700..
...07793337700..
...07799337700..
...07799937700..
...0777777770...
....00000000....
................
................
................
................`], 
  [ wall, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`]
);

let level = 0;
const levels = [
  map`
.g...
...b.
py...
....x`,
  map`
g.b.w.
wwx...
p.w...
.w..y.
......`,
  map`
.....g
..w...
w.....
x..wb.
wwy...
p..w.w`,
  map`
...w...
.b.....
.w.pw.g
x.bw..w
....y.w
..gw.ww`,
  map`
...w...
.b.....
.w.pw.g
g.yw..w
....b.w
..xw.ww`,
  map`
w.....w
.b....g
....y.w
wx.....
wwww.ww
p....yx`,
];

const currentLevel = levels[level];
setMap(currentLevel);

setSolids([ player, bolt, boltBlue, wall ]);

setPushables({
  [player]: [boltBlue,bolt],

  
  /*no pushing bolt with bolt to make it harder*/
});

// START - PLAYER MOVEMENT CONTROLS

onInput("s", () => {
  getFirst(player).y += 1;
});

onInput("d", () => {
  getFirst(player).x += 1;
});

onInput("w", () => {
  getFirst(player).y -= 1;
});

onInput("a", () => {
  getFirst(player).x -= 1;
});

// END - PLAYER MOVEMENT CONTROLS

onInput("j", () => {
  const currentLevel = levels[level];
  if (currentLevel !== undefined) {
    clearText("");
    setMap(currentLevel);
  }
});

afterInput(() => {
  // count the number of tiles with goals
  const targetNumber = tilesWith(battery).length;
  const targetNumberBlue = tilesWith(batteryBlue).length;
  // count the number of tiles with goals and boxes
  const numberCovered = tilesWith(battery, bolt).length;
  const numberCoveredBlue = tilesWith(batteryBlue, boltBlue).length;

  if (numberCovered === targetNumber && numberCoveredBlue === targetNumberBlue) {
    // increase the current level number
    level = level + 1;

    const currentLevel = levels[level];

    // make sure the level exists and if so set the map
    if (currentLevel !== undefined) {
      setMap(currentLevel);
    } else {
      addText("Congrats, you win!", { y: 4, color: [255, 0, 0] });
    }
  }
});
