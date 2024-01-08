import { createGlobalStyle } from "styled-components";
import { CursorDiv } from "@Component/Atom/Cursor";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'BMJUA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}


*{
    box-sizing: border-box;
    overscroll-behavior: contain;    
    font-family : BMJUA;
    margin: 0;
    /* cursor: none; */

}


body{
    /* background-color: #333; */
    overflow: overlay;
  background: linear-gradient(45deg, black, gray);

  /* &:hover{
      ${CursorDiv}{
        opacity: 1;
      }
    } */

}

button{
  cursor: pointer;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #ff444462, #ff932db7);
  border-radius: 100px;
}

`;

export default GlobalStyle;
