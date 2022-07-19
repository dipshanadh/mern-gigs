import Button from "../components/Button"

const Create = () => {
	return (
		<div className="px-4">
			<div className="bg-gray-100 border border-gray-200 p-10 rounded max-w-screen-md mx-auto my-10">
				<header className="text-center">
					<h2 className="text-3xl font-bold uppercase mb-1">
						Create a Gig
					</h2>
					<p className="mb-4">Post a gig to find a developer</p>
				</header>

				<form>
					<div className="mb-6">
						<label
							htmlFor="company"
							className="inline-block text-lg mb-2"
						>
							Company Name
						</label>
						<input
							type="text"
							className="border border-gray-200 rounded p-2 w-full"
							name="company"
						/>
					</div>

					<div className="mb-6">
						<label
							htmlFor="title"
							className="inline-block text-lg mb-2"
						>
							Job Title
						</label>
						<input
							type="text"
							className="border border-gray-200 rounded p-2 w-full"
							name="title"
							placeholder="Example: Senior Laravel Developer"
						/>
					</div>

					<div className="mb-6">
						<label
							htmlFor="location"
							className="inline-block text-lg mb-2"
						>
							Job Location
						</label>
						<input
							type="text"
							className="border border-gray-200 rounded p-2 w-full"
							name="location"
							placeholder="Example: Remote, Boston MA, etc"
						/>
					</div>

					<div className="mb-6">
						<label
							htmlFor="email"
							className="inline-block text-lg mb-2"
						>
							Contact Email
						</label>
						<input
							type="text"
							className="border border-gray-200 rounded p-2 w-full"
							name="email"
						/>
					</div>

					<div className="mb-6">
						<label
							htmlFor="website"
							className="inline-block text-lg mb-2"
						>
							Website/Application URL
						</label>
						<input
							type="text"
							className="border border-gray-200 rounded p-2 w-full"
							name="website"
						/>
					</div>

					<div className="mb-6">
						<label
							htmlFor="tags"
							className="inline-block text-lg mb-2"
						>
							Tags (Comma Separated)
						</label>
						<input
							type="text"
							className="border border-gray-200 rounded p-2 w-full"
							name="tags"
							placeholder="Example: Laravel, Backend, Postgres, etc"
						/>
					</div>

					<div className="mb-6">
						<label
							htmlFor="logo"
							className="inline-block text-lg mb-2"
						>
							Company Logo
						</label>
						<input
							type="file"
							className="border border-gray-200 rounded p-2 w-full"
							name="logo"
						/>
					</div>

					<div className="mb-6">
						<label
							htmlFor="description"
							className="inline-block text-lg mb-2"
						>
							Job Description
						</label>
						<textarea
							className="border border-gray-200 rounded p-2 w-full"
							name="description"
							rows="10"
							placeholder="Include tasks, requirements, salary, etc"
						></textarea>
					</div>

					<div className="mb-6 flex gap-3">
						<Button text="Create gig" />
						<Button text="Back" bg="bg-dark" />
					</div>
				</form>
			</div>
		</div>
	)
}

export default Create
