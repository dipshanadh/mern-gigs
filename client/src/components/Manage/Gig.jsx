import { Link } from "react-router-dom"

const Gig = () => {
	return (
		<tr>
			<td className="px-4 border-t border-b border-gray-300 text-lg">
				<Link to="/show">Laravel Senior Developer</Link>
			</td>
			<td class="p-4 border-t border-b border-gray-300 text-lg">
				<Link to="/edit" class="text-blue-400 px-6 rounded-xl">
					<i class="fa-solid fa-pen-to-square mr-2"></i>
					<span className="hidden sm:inline">Edit</span>
				</Link>
			</td>
			<td class="px-4 border-t border-b border-gray-300 text-lg">
				<button class="text-red-600">
					<i class="fa-solid fa-trash-can mr-2"></i>
					<span className="hidden sm:inline">Delete</span>
				</button>
			</td>
		</tr>
	)
}

export default Gig
