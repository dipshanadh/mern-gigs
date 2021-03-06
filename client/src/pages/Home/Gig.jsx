import { Link } from "react-router-dom"
import Tags from "./Tags"
import Location from "../../components/Location"

const Gig = ({ gig }) => {
	return (
		<div className="bg-gray-200 rounded p-6 flex">
			<img
				className="hidden w-48 mr-6 md:block bg-light"
				src="images/acme.png"
				alt=""
			/>
			<div>
				<h3 className="text-2xl">
					<Link to="/show">{gig.title}</Link>
				</h3>
				<div className="text-xl font-bold mb-4">{gig.company}</div>
				<Tags />
				<div className="text-lg mt-4">
					<Location value={gig.location} />
				</div>
			</div>
		</div>
	)
}

export default Gig
