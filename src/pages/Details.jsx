import { Link, useParams } from "react-router"
import { toys } from "../data/toys"

const Details = () => {
	const { toyId } = useParams()
	const toy = toys.find(t => String(t.id) === toyId)
	// console.log('Details toyId=', toyId, 'toy=', toy, toys)

	return (
		<div className="details">
			{toy ? (
				<>
				<h2> {toy.name} </h2>
				<section>
					<p> Mer information: </p>
					<p> {toy.description} </p>
				</section>
				</>
			) : (
				<>
				<h2> Välj en produkt </h2>
				<section>
					<Link to="/products"> Visa alla produkter </Link>
				</section>
				</>
			)}
		</div>
	)
}

export default Details
