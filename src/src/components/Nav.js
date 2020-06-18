import React, { useState } from 'react';
import './Nav.css';

const ModalRules = ({ children, show, setShow }) => {
   const content = show && (
      <div className="overlay">
         <div className="modal">
            <button
               className="close-modal"
               type="button"
               onClick={() => setShow(false)}
            >
               Close
            </button>
            <div className="modal-body">{children}</div>
         </div>
      </div>
   );

   return content;
};

function Nav() {
   const [show, setShow] = useState(false);

   return (
      <div className="nav-wrapper">
         <h1>John Conway's Game of Life</h1>
         <button type="button" onClick={() => setShow(true)}>
            Game Rules
         </button>
         <ModalRules show={show} setShow={setShow}>
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
                     Any dead cell with exactly three live neighbors becomes a live cell due to reproduction.
                  </li>
               </ol>
               <sup>
                  To find out more, visit Wikipedia: <a href="http://en.wikipedia.org/wiki/Conway's_Game_of_Life#Rules">Conway's Game of Life</a>
               </sup>
               <h3>How to play</h3>
               <ul>
                  <li>Create a few cells by clicking on the grid.  FYI: if the cell has fewer than two living neighbor cells, it will die immediately in the next generation.  If your cell has more than three neighbors, it will die immediately in the next generation</li>
                  <li>Click the <strong>Start</strong>button to watch the cells evolve automatically</li>
                  <li>Click the <strong>Next</strong>button to watch the cell evolve one generation at a time</li>
                  <li>Click the <strong>Stop</strong>button to pause the game</li>
                  <li>Click the <strong>Clear</strong>button to clear your grid of all cells at any time.  This will also reset the generation counter to ZERO</li>
               </ul>
            </div>
         </ModalRules>
         <canvas />
      </div>
   );
}

export default Nav;