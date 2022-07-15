import { Link } from "react-router-dom"
import Button from "./Button"

const Login = () => {
	return (
		<div className="px-4">
			<div className="bg-gray-100 border border-gray-200 p-10 rounded max-w-lg mx-auto my-10">
				<header className="text-center">
					<h2 className="text-3xl font-bold uppercase mb-1">
						Log In
					</h2>
					<p className="mb-4 text-md">Log in to post gigs</p>
				</header>

				<form>
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
						<Button text="Login" />
					</div>

					<p className="mt-8">
						Don't have an account?{" "}
						<Link to="../register" className="text-brand">
							Register
						</Link>
					</p>
				</form>
			</div>
		</div>
	)
}

export default Login
