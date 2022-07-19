import Gig from "./Gig"
import gigs from "../../data/gigs"

const Gigs = () => (
	<section className="lg:grid lg:grid-cols-2 space-y-6 lg:space-y-0 gap-6 mt-8 mb-10">
		{gigs.map(gig => (
			<Gig gig={gig} />
		))}
	</section>
)

export default Gigs
