import { Link } from "react-router"

const Details = () => {
	const { toyId } = useParams()
	const toy = toys.find(t => t.id === toyId)
	// TODO: conditional rendering
	return (
		<div className="details">
			<h2> En specifik produkt (TODO) </h2>
			<section>
				Detaljer (TODO)
			</section>
		</div>
	)
}

export default Details
