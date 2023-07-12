// Imports
import { createGlobalStyle } from "styled-components";

// Styled Components
export const GlobalStyle = createGlobalStyle`
  // ==================== CSS Variables ==================== //
  :root{
    // ===== Typography ===== //
    --clr-primary: #1b3748;
    --clr-neutral-400: #ffffff;

    // ===== Typography ===== //
    --fz-largest: 3.625rem;
    --fz-large: 1.5rem;
    --fz-normal: 1rem;

    --ff-body: 'Montserrat', sans-serif;

    // ===== Sizes ===== //
    --header-height: 5rem;
  }

  // ==================== HTML Reseting ==================== //
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: var(--ff-body);
  }
  ul{
    list-style: none;
    display: flex;
  }
  img{
    width: 100%;
    height: auto;
  }
  a{
    text-decoration: none;
  }
`;
