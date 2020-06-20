import React, { useState } from 'react';
import Dropdown from './Dropdown';

const RulesModal = ({ children, showRules, setShowRules }) => {
   const rulesContent = showRules && (
      <div className="overlay">
         <div className="modal">
            <button
               className="close-modal"
               type="button"
               onClick={() => setShowRules(false)}
            >
               Close
            </button>
            <div className="modal-body">{children}</div>
         </div>
      </div>
   );

   return rulesContent;
};

const InfoModal = ({ children, showInfo, setShowInfo }) => {
   const infoContent = showInfo && (
      <div className="overlay">
         <div className="modal">
            <button
               className="close-modal"
               type="button"
               onClick={() => setShowInfo(false)}
            >
               Close
            </button>
            <div className="modal-body">{children}</div>
         </div>
      </div>
   );

   return infoContent;
};

function Nav() {
   const [showRules, setShowRules] = useState(false);
   const [showInfo, setShowInfo] = useState(false);
   return (
      <div className="nav-wrapper">
         <h1>Game of Life</h1>
         <button type="button" onClick={() => setShowRules(true)}>
            Rules of the game
         </button>
         <RulesModal showRules={showRules} setShowRules={setShowRules}>
            <div>
               <h3>How it works</h3>
               <ol>
                  <li>
                     Any live cell with fewer than two live neighbors dies of underpopulation.
                  </li>
                  <li>
                     Any live cell with two or three live neighbors lives on to the next generation.
                  </li>
                  <li>
                     Any live cell with more than three live neighbors dies of overcrowding.
                  </li>
                  <li>
                     Any live cell with exactly three live neighbors becomes a live cell due to reproduction.
                  </li>
               </ol>
               <sup>
                  Read more on Wikipedia: <a href="http://en.wikipedia.org/wiki/Conway's Game_of_Life#Rules">
                     John Conway's Game of Life
                  </a>
               </sup>
               <h3>How to Play</h3>
               <ul>
                  <li>Create a few cells by clicking on the grid.  Remember: if the cell has fewer than two living neighbor cells, it will die immediately in the next generation.  If your cell has more than three neighbors, it will die immediately int he next generation</li>
                  <li>Click the <strong>Start</strong> button to watch the cells evolve automatically</li>
                  <li>Click the <strong>Next Generation</strong> button to watch the cell evolve one generation at a time.</li>
                  <li>Click the <strong>Stop</strong> button to pause the game.</li>
                  <li>Click the <strong>Clear</strong> butotn to clear the grid of all cells at any time.  This will reset the generation counter to ZERO.</li>
               </ul>
            </div>
         </RulesModal>
         <button onClick={() => setShowInfo(true)}>What do the buttons do?</button>
         <InfoModal showInfo={showInfo} setShowInfo={setShowInfo}>
            <div>
               <h3>What do the buttons do?</h3>
            </div>
         </InfoModal>
         <Dropdown />
      </div>
   );
}


export default Nav;