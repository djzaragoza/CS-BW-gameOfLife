import styled from "styled-components";

const GridStyle = styled.div`
   display: flex;
   flex-direction: column;
   text-align: center;

   .grid-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
   }

   .grid-boxes {
      //to add style in here
   }

   .button-box {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      button {
         border-radius: 5px;
         margin: 10px;
         padding: 15px;
      }
   }

   p {
      font-weight: bold;
   }

   @media only screen and (max-width: 600px) {
      .button-box {
         flex-wrap: wrap;
      }
   }

   `;

export default GridStyle;