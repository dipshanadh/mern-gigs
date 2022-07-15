const Search = () => {
	return (
		<div className="relative border border-gray-300 rounded-md">
			<div className="absolute top-4 left-3">
				<i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
			</div>
			<input
				type="text"
				name="search"
				className="h-14 w-full pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none text-md"
				placeholder="Search Gigs..."
			/>
			<button
				type="submit"
				className="px-4 py-2 absolute top-2 right-2 text-light font-medium rounded-md bg-brand"
			>
				Search
			</button>
		</div>
	)
}

export default Search
