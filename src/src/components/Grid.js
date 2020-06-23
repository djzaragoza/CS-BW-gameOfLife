import React, { useState, useEffect, useRef } from "react";
import GridStyle from "./styles/GridStyle";
//import Dropdown from './Dropdown';

// grid boundaries 
const rows = 25;
const cols = 45;


// Eight neighbors, which are the cells that are horizontally, vertically, or diagonally adjacent.  They all live in the neighborhood.
const neighborhood = [
   [-1, -1],
   [-1, 0],
   [-1, 1],
   [0, -1],
   [0, 1],
   [1, -1],
   [1, 0],
   [1, 1],
];

//setup an empty grid that can be used across multiple states
const emptyGrid = () => {
   const clearedGrid = [];
   for (let i = 0; i < rows; i++) {
      clearedGrid.push(Array.from(Array(cols), () => 0));
   }
   return clearedGrid;
};

//setup rules of the game
const gameRules = (g) => {
   let newGrid = emptyGrid();
   for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
         let neighbors = 0;
         neighborhood.forEach(([x, y]) => {
            const blocX = i + x;
            const blocY = j + y;
            if (blockX >= 0 && blocX < rows && blocY >= 0 && blocY < cols) {
               neighbors += g[blocX][blocY];
            }
         });
         //once we have setup how the board works, we then implement the actual rules of the game in the following if/else statements
         if (neighbors < 2 || neighbors > 3) {
            newGrid[i][j] = 0;
         } else if (g[i][j] === 1 && (neighbors === 2 || neighbors === 3)) {
            newGrid[i][j] = 1;
         } else if (g[i][j] === 0 && neighbors === 3) {
            newGrid[i][j] = 1;
         }
      }
   }
   return newGrid;
};

export default Grid;