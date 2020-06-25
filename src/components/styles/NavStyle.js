import styled from 'styled-components';

//styles for the modal buttons and nav bar

const NavStyle = styled.div`
header {
   background-color: lightgrey;
}

.nav-wrapper {
   margin-top: 1rem;
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
}

.nav-overlay {
   z-index: 99;
   position: fixed;
   top 0;
   right: 0;
   bottom: 0;
   left: 0;
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100%;
   width: 100%;
   background-color: lightgrey;
}

.nav-modal {
   z-index: 99;
   /* everything below is optional styling */
   position: relative;
   width: 100%;
   max-width: 500px
   max-height: 500%;
   margin: 0 auto;
}

.close-nav-modal {
   position: absolute;
   top: 0px;
   right: 0;
   border: 0;
   -webkit-appearance: none;
   background: none;
   color: black;
   font-weight: bold;
   cursor: pointer;
}

.nav-modal-body {
   padding: 20px 24px;
   border-radius: 4px;
   background-color: white;
}

button {
   border-radius: 5px;
   margin: 10px;
   padding: 15px;
}

@media only screen and (max-width: 550px) {
   .nav-wrapper {
      flex-wrap: wrap;
   }
}
`;

export default NavStyle;