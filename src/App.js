import Layout from 'components/layout/Layout';
import Home from 'pages/home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import './assets/css/base.css';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={(
						<Navigate
							replace
							to="/dashboard" />
					)} />

				<Route
					path="/dashboard"
					element={(
						<Layout>
							<Home />
						</Layout>
					)}
				/>
			</Routes>
		</div>
	);
}

export default App;
