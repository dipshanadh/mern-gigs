const Button = ({ text, icon, bg }) => {
	return (
		<button
			className={`block ${
				bg ? bg : "bg-brand"
			} text-white py-2 px-4 mr-2 rounded-md hover:opacity-80`}
		>
			{icon && <i className={`fa-solid ${icon} mr-2`}></i>}
			{text}
		</button>
	)
}

export default Button
