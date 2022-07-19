import { Link } from "react-router-dom"

const Navbar = () => (
	<nav className="flex justify-between items-center py-4 px-8 bg-dark fixed top-0 w-full z-50">
		<Link to="/" className="text-3xl font-bold text-white">
			MERNGigs
		</Link>
		<ul className="gap-10 mr-6 text-lg hidden sm:flex text-mid">
			<Navlink link="/create" text="Create gig" icon="fa-plus" />
			<Navlink link="/manage" text="Manage gigs" icon="fa-gear" />
			<Navlink link="/auth/logout" text="Log out" icon="fa-door-closed" />
		</ul>
	</nav>
)

const Navlink = ({ text, link, icon }) => (
	<li>
		<Link to={link}>
			<i className={`fa-solid ${icon} mr-2`}></i> {text}
		</Link>
	</li>
)

export default Navbar
