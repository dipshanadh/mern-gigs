import { Link } from "react-router-dom"
import Button from "./Button"

const Register = () => {
	return (
		<div className="px-4">
			<div className="bg-gray-100 border border-gray-200 p-10 rounded max-w-lg mx-auto my-10">
				<header className="text-center">
					<h2 className="text-3xl font-bold uppercase mb-1">
						Register
					</h2>
					<p className="mb-4 text-md">
						Create an account to post gigs
					</p>
				</header>

				<form>
					<div className="mb-6">
						<label
							htmlFor="name"
							className="inline-block text-lg mb-2"
						>
							Name
						</label>
						<input
							type="text"
							className="border border-gray-200 rounded p-2 w-full"
							name="name"
						/>
					</div>

					<div className="mb-6">
						<label
							htmlFor="email"
							className="inline-block text-lg mb-2"
						>
							Email
						</label>
						<input
							type="email"
							className="border border-gray-200 rounded p-2 w-full"
							name="email"
						/>
						{/* Error Example */}
						<p className="text-red-500 text-xs mt-1">
							Please enter a valid email
						</p>
					</div>

					<div className="mb-6">
						<label
							htmlFor="password"
							className="inline-block text-lg mb-2"
						>
							Password
						</label>
						<input
							type="password"
							className="border border-gray-200 rounded p-2 w-full"
							name="password"
						/>
					</div>

					<div className="mb-6">
						<label
							htmlFor="password2"
							className="inline-block text-lg mb-2"
						>
							Confirm Password
						</label>
						<input
							type="password"
							className="border border-gray-200 rounded p-2 w-full"
							name="password2"
						/>
					</div>

					<div className="mb-6">
						<Button text="Sign up" />
					</div>

					<div className="mt-8">
						<p>
							Already have an account?{" "}
							<Link to="../login" className="text-brand">
								Login
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Register
