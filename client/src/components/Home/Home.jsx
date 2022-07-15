import HeroSection from "./HeroSection"
import Gigs from "./Gigs"
import Search from "../Search"

const Home = () => {
	return (
		<>
			<HeroSection />
			<div className="px-8">
				<Search />
				<Gigs />
			</div>
		</>
	)
}

export default Home
