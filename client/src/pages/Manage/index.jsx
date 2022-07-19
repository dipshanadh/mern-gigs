import Search from "../../components/Search"
import Gigs from "./Gigs"

const Manage = () => {
	return (
		<div className="px-10 my-10">
			<Search />
			<div className="bg-gray-50 border border-gray-200 p-8 rounded mt-10">
				<header>
					<h1 className="text-3xl text-center font-bold mx-6 uppercase">
						Manage Gigs
					</h1>
				</header>

				<Gigs />
			</div>
		</div>
	)
}

export default Manage
