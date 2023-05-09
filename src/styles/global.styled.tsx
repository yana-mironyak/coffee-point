import { createGlobalStyle } from "styled-components";

export const ThemeColors = {
  colors: {
    brown: "rgba(72, 38, 34, 1)",
    darkBrown: "rgba(54, 24, 24, 1)",
    lightBrown: "rgba(94, 55, 35, 1)",
    white: "#ffffff",
  },
};

export const GlobalStyle = createGlobalStyle`
    * {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		/* font-family: "Nunito", sans-serif; */
	}

    body {
		background: ${ThemeColors.colors.brown};
	}

	button {
		cursor: pointer;
		background: transparent;
		border: none;
	}

	ul,
	ol {
		padding: 0;
		margin: 0;
		list-style: none;
	}

	li {
		list-style: none;
	}

	input {
		outline: none;
	}

	a {
		text-decoration: none;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin: 0;
		padding: 0;
	}
`;
