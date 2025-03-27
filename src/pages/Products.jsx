import { Link } from "react-router"
import { toys } from '../data/toys.js'
import './Products.css'
import { useState } from "react"
import { matchToy } from "../data/search.js"


const Products = () => {
	const [searchValue, setSearchValue] = useState('')

	const searchResults = toys.filter(toy => matchToy(searchValue, toy))
	let displayToys = toys
	if( searchValue.length > 0 ) {
		displayToys = searchResults
	}

	return (
		<div className="products">
			<h2> Produkter </h2>
			<input type="text"
				value={searchValue}
				onChange={event => setSearchValue(event.target.value)}
				/>
			<div className="card-grid">
				{displayToys.map(toy => (
					<Link key={toy.id} to={'/details/' + toy.id}>
					<section className="toy-card">
						<h3> {toy.name} </h3>
						<p> {toy.description} </p>
					</section>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Products
