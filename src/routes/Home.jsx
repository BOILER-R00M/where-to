import NavBar from "../components/ui/NavBar";
import bus from "../assets/bus.svg";
import traveling from "../assets/traveling.svg";
import { useNavigate } from "react-router-dom";
import travel_flag from "../assets/travel_flag.svg";
import groups from "../assets/groups.svg";
import pin from "../assets/pin.svg";
import rate from "../assets/rate.svg";

export default function Home() {
	const nav = useNavigate();
	return (
		<>
			<NavBar />
			<section className="h-screen bg-tertiary">
				<div className="lg:max-w-[80%] lg:pt-5 lg:flex lg:space-x-6 lg:items-center lg:mx-auto">
					<div className="flex flex-col lg:space-y-4">
						{" "}
						<h1 className="px-6 py-4 mx-auto text-4xl font-main text-primary iphoneXr:text-6xl lg:w-full">
							Track Your{" "}
							<span className="text-secondary">Travels</span>.
							Share Your{" "}
							<span className="text-secondary">Tales</span>.
						</h1>
					</div>
					<img
						className="hidden lg:block lg:w-2/5"
						src={travel_flag}
						alt="travel_flag"
					/>
				</div>

				<div className="lg:flex lg:space-x-4 lg:pl-[10%] lg:pt-[5%] ">
					<button
						onClick={() => nav("/login")}
						className="hidden px-6 py-3 font-bold text-white rounded-full bg-secondary lg:block"
					>
						CREATE ACCOUNT
					</button>
					<button
						onClick={() =>
							(window.location.href = "#offer-section")
						}
						className="hidden px-6 py-3 font-bold text-white rounded-full bg-secondary lg:block"
					>
						LEARN MORE
					</button>
					<p className="px-6 py-4 font-main text-primary iphoneXr:text-2xl lg:hidden">
						Explore the world together, one pin at a time! WhereTo
						is a unique platform that lets you create and join
						groups with your friends to share and discover exciting
						travel experiences.
					</p>
				</div>
				<div className="lg:hidden">
					<img src={bus} alt="bus" />
				</div>
			</section>

			<section id="offer-section" className="h-screen bg-tertiary">
				<div>
					<h2 className="px-6 py-4 mx-auto text-3xl font-main text-primary iphoneXr:text-6xl">
						What We <span className="text-secondary">Offer</span>
					</h2>
				</div>

				<div>
					<p className="px-6 py-4 font-main text-primary iphoneXr:text-2xl">
						Imagine having a virtual travel diary that you can share
						with your closest companions. With WhereTo, you can
						create personalized travel groups where you and your
						friends can collaboratively pin locations you've visited
						on an interactive map. It's like creating memories
						together on a digital journey!
					</p>
					<img src={traveling} alt="traveling" />
				</div>
			</section>
			<section className="h-screen bg-tertiary">
				<div>
					<h2 className="px-6 py-4 mx-auto text-3xl font-main text-primary iphoneXr:text-5xl lg:pt-20 lg:pl-18">
						Key <span className="text-secondary">Features</span>
					</h2>
				</div>

				<div className="px-6 py-4 font-main text-primary">
					<ul className="pl-5 list-disc lg:flex lg:space-x-4 lg:list-none lg:pt-10">
						<div className="lg:w-1/3 lg:flex lg:flex-col lg:items-center">
							<img
								src={groups}
								alt="Groups"
								className="hidden mb-4 lg:block"
							/>
							<li className="iphoneXr:text-[18px] pt-3 lg:rounded-lg lg:shadow-lg lg:p-4 lg:bg-white">
								<strong className="text-secondary">
									Create and Join Groups:
								</strong>{" "}
								Gather your travel buddies and create groups to
								embark on memorable journeys together. Share
								your experiences, recommendations, and favorite
								spots in a collaborative space that's just for
								your group.
							</li>
						</div>
						<div className="lg:w-1/3 lg:flex lg:flex-col lg:items-center">
							<img
								src={pin}
								alt="Pin"
								className="hidden mb-4 lg:block"
							/>
							<li className="iphoneXr:text-[18px] pt-8 lg:rounded-lg lg:shadow-lg lg:p-4 lg:bg-white">
								<strong className="text-secondary">
									Pin Your Adventures:
								</strong>{" "}
								Drop pins on the map to mark the places you've
								been to. Whether it's a hidden gem or a popular
								landmark, you can pinpoint your travels and add
								meaningful notes to remember the moments.
							</li>
						</div>
						<div className="lg:w-1/3 lg:flex lg:flex-col lg:items-center">
							<img
								src={rate}
								alt="Rate and Review"
								className="hidden mb-4 lg:block"
							/>
							<li className="iphoneXr:text-[18px] pt-8 lg:rounded-lg lg:shadow-lg lg:p-4 lg:bg-white">
								<strong className="text-secondary">
									Rate and Review:
								</strong>{" "}
								Rate the places you've visited and leave reviews
								to share your thoughts with your group. Did you
								discover an incredible local eatery or a
								breathtaking viewpoint? Your friends can now
								benefit from your insights.
							</li>
						</div>
					</ul>
				</div>
			</section>

			<section className="h-screen bg-tertiary">
				<div>
					<h2 className="px-6 py-4 mx-auto text-3xl font-main text-primary iphoneXr:text-6xl">
						Join the{" "}
						<span className="text-secondary">Adventure</span>
					</h2>
				</div>

				<div className="px-6 py-4 font-main text-primary">
					<p className="iphoneXr:text-2xl">
						Whether it's a cross-country road trip, an exotic
						getaway, or simply exploring your local neighborhood,
						WhereTo is your ultimate companion. Unleash the power of
						shared experiences and turn every journey into an
						unforgettable story.
					</p>
					<p className="mt-4 iphoneXr:text-2xl">
						Ready to embark on a new way of traveling?
					</p>
					<div className="mt-4 iphoneXr:pt-8">
						{/* Placeholder for your link */}
						<button
							onClick={() => nav("/login")}
							className="px-4 py-2 text-white rounded bg-secondary hover:bg-blue-600 iphoneXr:text-2xl "
						>
							CREATE AN ACCOUNT
						</button>
					</div>
				</div>
			</section>
		</>
	);
}
