import NavBar from "../components/ui/NavBar";
import bus from "../assets/bus.svg";
import traveling from '../assets/traveling.svg'

export default function Home() {
  return (
    <>
      <NavBar />
      <section className="h-screen bg-tertiary">
        <div>
          <h1 className="px-6 py-4 mx-auto text-4xl font-main text-primary">
            Track Your <span className="text-secondary">Travels</span>. Share
            Your <span className="text-secondary">Tales</span>
          </h1>
        </div>

        <div>
          <p className="px-6 py-4 font-main text-primary">
            Explore the world together, one pin at a time! WhereTo is a unique
            platform that lets you create and join groups with your friends to
            share and discover exciting travel experiences.
          </p>
        </div>
        <div>
          <img src={bus} alt="bus" />
        </div>
      </section>

      <section className="h-screen bg-tertiary">
        <div>
          <h2 className="px-6 py-4 mx-auto text-3xl font-main text-primary">
            What We <span className="text-secondary">Offer</span>
          </h2>
        </div>

        <div>
          <p className="px-6 py-4 font-main text-primary">
            Imagine having a virtual travel diary that you can share with your
            closest companions. With WhereTo, you can create personalized travel
            groups where you and your friends can collaboratively pin locations
            you've visited on an interactive map. It's like creating memories
            together on a digital journey!
          </p>
          <img src={traveling} alt="traveling"/>
        </div>
      </section>
      <section className="h-screen bg-tertiary">
        <div>
          <h2 className="px-6 py-4 mx-auto text-3xl font-main text-primary">
            Key <span className="text-secondary">Features</span>
          </h2>
        </div>

        <div className="px-6 py-4 font-main text-primary">
          <ul className="pl-5 list-disc">
            <li>
              <strong>Create and Join Groups:</strong> Gather your travel
              buddies and create groups to embark on memorable journeys
              together. Share your experiences, recommendations, and favorite
              spots in a collaborative space that's just for your group.
            </li>
            <li>
              <strong>Pin Your Adventures:</strong> Drop pins on the map to mark
              the places you've been to. Whether it's a hidden gem or a popular
              landmark, you can pinpoint your travels and add meaningful notes
              to remember the moments.
            </li>
            <li>
              <strong>Rate and Review:</strong> Rate the places you've visited
              and leave reviews to share your thoughts with your group. Did you
              discover an incredible local eatery or a breathtaking viewpoint?
              Your friends can now benefit from your insights.
            </li>
          </ul>
        </div>
      </section>
      <section className="h-screen bg-tertiary">
  <div>
    <h2 className="px-6 py-4 mx-auto text-3xl font-main text-primary">
      Join the <span className="text-secondary">Adventure</span>
    </h2>
  </div>

  <div className="px-6 py-4 font-main text-primary">
    <p>
      Whether it's a cross-country road trip, an exotic getaway, or simply exploring your local neighborhood, WhereTo is your ultimate companion. Unleash the power of shared experiences and turn every journey into an unforgettable story.
    </p>
    <p className="mt-4">
      Ready to embark on a new way of traveling?
    </p>
    <div className="mt-4">
      {/* Placeholder for your link */}
      <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
        Go to Dashboard
      </button>
    </div>
  </div>
</section>

    </>
  );
}
