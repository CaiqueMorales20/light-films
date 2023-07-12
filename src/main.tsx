// Imports
import React from "react";
import ReactDOM from "react-dom/client";

// Styles
import { GlobalStyle } from "./global/GlobalStyle";

// App
import { App } from "./App";

// Rendering
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>
);
