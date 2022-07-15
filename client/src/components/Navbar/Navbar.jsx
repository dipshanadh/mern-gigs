import { Link } from "react-router-dom"
import Navlink from "./Navlink"

const Navbar = () => (
	<nav className="flex justify-between items-center py-4 px-8 bg-dark text-mid fixed top-0 w-full z-50">
		<Link to="/" className="text-3xl font-bold text-mid">
			MERNGigs
		</Link>
		<ul className="gap-10 mr-6 text-lg hidden sm:flex">
			<Navlink link="/create" text="Create gig" icon="fa-plus" />
			<Navlink link="/manage" text="Manage gigs" icon="fa-gear" />
			{/* <Navlink
				link="/auth/register"
				text="Register"
				icon="fa-user-plus"
			/>
			<Navlink
				link="/auth/login"
				text="Login"
				icon="fa-arrow-right-to-bracket"
			/> */}
			<Navlink link="/auth/logout" text="Log out" icon="fa-door-closed" />
		</ul>
	</nav>
)

export default Navbar
