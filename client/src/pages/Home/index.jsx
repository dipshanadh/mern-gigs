import HeroSection from "./HeroSection"
import Gigs from "./Gigs"
import Search from "../../components/Search"
import Pagination from "./Pagination"

const Home = () => {
	return (
		<>
			<HeroSection />
			<div className="px-8">
				<Search />
				<Gigs />
				<Pagination />
			</div>
		</>
	)
}

export default Home
