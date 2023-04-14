import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootLayout from "./root";
import Index from "./index";
import AboutPage from "./aboutPage";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<RootLayout />}>
					<Route path="/" element={<Index />} />
					<Route path="about" element={<AboutPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
