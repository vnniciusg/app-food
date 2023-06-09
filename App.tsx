import React from 'react';
import { Router } from './src/routes/Router';
import { AuthProvider } from './src/context/Auth';

export default function App() {
	return (
		<AuthProvider>
			<Router />
		</AuthProvider>
	);
}
