import { Link } from "react-router-dom"

const Navlink = ({ text, link, icon }) => (
	<li>
		<Link to={link}>
			<i className={`fa-solid ${icon} mr-2`}></i> {text}
		</Link>
	</li>
)

export default Navlink
