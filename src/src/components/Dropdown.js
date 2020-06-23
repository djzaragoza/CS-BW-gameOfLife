import React, { useState } from 'react';

function DropDown() {
   return (
      <select>
         <option value="choose-pattern">
            Choose a pattern
         </option>
         <option value="glider">Glider</option>
         <option value="pulsar">Pulsar</option>
      </select>
   );
}

{/* <button
   onClick={() => {
      const clearedGrid = [];
      for (let i = 0; i < rows; i++) {
         clearedGrid.push(
            Array.from(Array(cols), () => (Math.() > .7 ? 1 : 0))
         );
      }

      if (activeGrid === 1) {
         setFrameOne(clearedGrid);
      } else {
         setFrameTwo(clearedGrid);
      }
   }}
>
   Glider
</button> */}

export default DropDown;