import { Link, useParams } from "react-router"
import { toys } from '../data/toys.js'
import './Products.css'

const Products = () => {

	return (
		<div className="products">
			<h2> Produkter </h2>
			<div className="card-grid">
				{toys.map(toy => (
					<section key={toy.id} className="toy-card">
						<h3> {toy.name} </h3>
						<p> {toy.description} </p>
					</section>
				))}
			</div>
		</div>
	)
}

export default Products
