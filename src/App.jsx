import { NavLink, Outlet } from 'react-router'
import './App.css'

function App() {
	return (
		<div className="app">
			<header>
				<h1> Kids Toys </h1>
				<nav>
					<NavLink to="/"> Start </NavLink>
					<NavLink to="/products"> Produkter </NavLink>
					<NavLink to="/details"> Detaljer (ta bort senare) </NavLink>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	)
}

export default App
