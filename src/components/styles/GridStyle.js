import styled from "styled-components";

const GridStyle = styled.div`

   display: flex;
   flex-direction: column;
   text-align: center;
   background-color: #D6DBDF;

   .grid-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
   }

   .grid-boxes {
      //to add style in here
   }

   .gen-count {
      margin: 2.5%;
      font-weight: bold;
      text-align: center;
   }

   .button-box {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      button {
         border-radius: 12px;
         margin: 8px;
         padding: 10px;
         background-color: dodgerblue;
         color: white;
      }
   }

   @media only screen and (max-width: 550px) {
      .button-box {
         flex-wrap: wrap;
      }
   }

`;

export default GridStyle;