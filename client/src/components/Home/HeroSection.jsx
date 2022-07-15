import { Link } from "react-router-dom"

const HeroSection = () => (
	<section className="relative h-72 bg-brand flex flex-col justify-center align-center text-center space-y-4 mb-10 text-light">
		<div className="absolute top-0 left-0 w-full h-full opacity-10 bg-no-repeat bg-center"></div>

		<div className="z-10">
			<h1 className="text-6xl font-bold">
				MERN<span className="text-black">Gigs</span>
			</h1>
			<p className="text-2xl text-dark font-bold my-4">
				Find or post Full-Stack jobs & projects
			</p>
			<div>
				<Link
					to="/auth/register"
					className="inline-block font-medium text-white py-2 px-5 mt-2 bg-dark text-light rounded-md"
				>
					Sign Up to List a Gig
				</Link>
			</div>
		</div>
	</section>
)

export default HeroSection
