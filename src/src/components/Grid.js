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
            if (blocX >= 0 && blocX < rows && blocY >= 0 && blocY < cols) {
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

const Grid = () => {
   //initial grid state one
   const [frameOne, setFrameOne] = useState(() => {
      return emptyGrid();
   });

   //initial grid state two
   const [frameTwo, setFrameTwo] = useState(() => {
      return emptyGrid();
   });

   //state to determine if the game is running or not, initial state is false because the game doesn't start off running.
   const [running, setRunning] = useState(false);

   //the state that determines which grid is active
   const [activeGrid, setActiveGrid] = useState(1);

   // the generation counter for the cells
   const [genCount, setGenCount] = useState(0);

   //speed of the simulation initial state
   const [speed, setSpeed] = useState(300);

   //set speed reference for simulation
   const speedRef = useRef(speed);
   speedRef.current = speed;

   //Double buffer == when the active grid is 1, we set frameone's state into the gamerules function, and set that into frameTwo
   const nextGen = () => {
      if (activeGrid === 1) {
         setFrameTwo(gameRules(frameOne));
         setActiveGrid(2);
         setGenCount(genCount + 1);
      }
   };

   //ternary operator to set a const of grid to the activeGrid state.  If the grid is active it will be active on frameone or frameTwo
   const grid = activeGrid === 1 ? frameOne : frameTwo;

   //the simulation -- 
   useEffect(() => {
      let runSim = null;
      if (activeGrid && running) {
         runSim = setInterval(() => {
            nextGen();
         }, speedRef.current);
      } else if (!running) {
         clearInterval(runSim);
         return;
      }
      return () => clearInterval(runSim);
      // eslint-disable-next-line
   }, [activeGrid, running]);

   return (
      <GridStyle>
         <div
            className="grid-wrapper"
            style={{
               display: "grid",
               gridTemplateColumns: `repeat(${cols}, 20px)`,
            }}
         >
            {grid.map((row, i) =>
               row.map((col, j) => (
                  <div
                     key={`${i}-${j}`}
                     className="grid-boxes"
                     onClick={() => {
                        const newGrid = Array.from(grid);
                        newGrid[i][j] = grid[i][j] ? 0 : 1;
                        if (activeGrid === 1) {
                           setFrameOne(newGrid);
                        } else {
                           setFrameTwo(newGrid);
                        }
                     }}
                     style={{
                        width: 20,
                        height: 20,
                        backgroundColor: grid[i][j] ? "dodgerblue" : undefined,
                        border: "solid .5px black",
                     }}
                  />
               ))
            )}
         </div>
         <div className="button-box">
            {/* <Dropdown /> */}

            <button
               onClick={() => {
                  const clearedGrid = [];
                  for (let i = 0; i < rows; i++) {
                     clearedGrid.push(
                        Array.from(Array(cols), () => (Math.random() > .7 ? 1 : 0))
                     );
                  }
                  if (activeGrid === 1) {
                     setFrameOne(clearedGrid);
                  } else {
                     setFrameTwo(clearedGrid);
                  }
               }}
            >
               Random
            </button>
            <button
               onClick={() => {
                  setRunning(!running);
               }}
            >
               {running ? "Stop" : "Start"}
            </button>
            <button
               onClick={() => {
                  setSpeed(100);
               }}
            >
               Speed Up
            </button>
            <button
               onClick={() => {
                  setSpeed(1000);
               }}
            >
               Slow Down
            </button>
            <button
               onClick={() => {
                  nextGen();
               }}
            >
               One Generation
            </button>
            <button
               onClick={() => {
                  setFrameOne(emptyGrid());
                  setFrameTwo(emptyGrid());
                  setGenCount(0);
               }}
            >
               Clear
            </button>
            <p>Generation Count: {genCount}</p>
         </div>
      </GridStyle>
   );
};

export default Grid;