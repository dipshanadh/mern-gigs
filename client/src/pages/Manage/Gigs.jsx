import Gig from "./Gig"

const Gigs = () => {
	return (
		<table className="w-full table-auto rounded-sm mt-8">
			<tbody className="divide-y divide-gray-300">
				<Gig />
				<Gig />
				<Gig />
				<Gig />
			</tbody>
		</table>
	)
}

export default Gigs
