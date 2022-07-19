import Button from "../../components/Location"
import Location from "../../components/Location"
import Tag from "./Tag"

const Show = () => {
	return (
		<div className="px-4 mx-auto my-10 max-w-screen-lg">
			<div className="bg-gray-50 border border-gray-200 p-10 rounded">
				<div className="flex flex-col items-center justify-center text-center">
					<img
						className="w-48 mr-6 mb-6"
						src="images/skynet.png"
						alt=""
					/>

					<h3 className="text-2xl mb-2">Senior Laravel Developer</h3>
					<div className="text-xl font-bold mb-4">Acme Corp</div>
					<ul className="flex">
						<Tag />
						<Tag />
						<Tag />
						<Tag />
					</ul>
					<div className="text-lg my-4">
						<Location value="Nepal" />
					</div>
					<div className="border border-gray-200 w-full mb-6"></div>
					<div>
						<h3 className="text-3xl font-bold mb-4">
							Job Description
						</h3>
						<div className="text-lg space-y-6">
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Eligendi non reprehenderit
								facilis architecto autem quam necessitatibus,
								odit quod, repellendus voluptate cum.
								Necessitatibus a id tenetur. Error numquam at
								modi quaerat.
							</p>
							<p>
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Quaerat praesentium eos
								consequuntur ex voluptatum necessitatibus odio
								quos cupiditate iste similique rem in,
								voluptates quod maxime animi veritatis illum quo
								sapiente.
							</p>

							<div className="flex gap-4 items-center justify-center">
								<Button
									text="Contact employer"
									icon="fa-envelope"
									classnames="rounded-xl"
								/>
								<Button
									text="Visit website"
									icon="fa-globe"
									classnames="rounded-xl"
									bg="bg-dark"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Show
