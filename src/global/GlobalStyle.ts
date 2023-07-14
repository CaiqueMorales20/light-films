// Imports
import { createGlobalStyle } from "styled-components";

// Styled Components
export const GlobalStyle = createGlobalStyle`
  // ==================== CSS Variables ==================== //
  :root{
    // ===== Typography ===== //
    --clr-primary-500: #1C3A4B;
    --clr-primary-400: #1b3748;

    --clr-neutral-400: #ffffff;

    // ===== Typography ===== //
    --fz-largest: 3.625rem;
    --fz-larger: 2rem;
    --fz-large: 1.5rem;
    --fz-normal: 1rem;

    --fw-black: 900;
    --fw-extrabold: 800;
    --fw-bold: 700;
    --fw-semibold: 600;
    --fw-medium: 500;
    --fw-normal: 400;
    --fw-light: 300;

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
