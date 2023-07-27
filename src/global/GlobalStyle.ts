// Imports
import { createGlobalStyle, styled } from "styled-components";

// ======================================== Global Style ======================================== //
export const GlobalStyle = createGlobalStyle`
  // ==================== CSS Variables ==================== //
  :root{
    // ===== Typography ===== //
    --clr-primary-500: #1C3A4B;
    --clr-primary-400: #1b3748;

    --clr-neutral-400: #ffffff;

    // ===== Typography ===== //
    --fz-largest: clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem);
    --fz-larger: clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem);
    --fz-large: clamp(1.56rem, 1vw + 1.31rem, 2.11rem);
    --fz-medium: clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem);
    --fz-normal: clamp(1rem, 0.34vw + 0.91rem, 1.19rem);
    --fz-small: clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem);

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

    --section-padding: 7rem;
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
  body.menu-open{
    height: 100vh;
    overflow: hidden;
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

// ======================================== Styled Components ======================================== //
export const View = styled.div`
	height: 100vh;
	overflow: hidden;
`;

export const SectionTitle = styled.h1`
	color: var(--clr-primary-500);
	font-weight: var(--fw-bold);
	font-size: var(--fz-large);
	text-transform: uppercase;
	text-align: center;
`;
