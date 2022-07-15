import { Link } from "react-router-dom"

const Footer = () => (
	<footer className="flex items-center font-medium bg-dark text-mid mt-10 p-4">
		<p className="mr-auto">Copyright &copy; Dipshan Adhikari 2022</p>

		<Link
			href="/create"
			className="bg-brand text-light py-2 px-5 rounded-md sm:block"
		>
			Post Job
		</Link>
	</footer>
)

export default Footer
