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

export default DropDown;