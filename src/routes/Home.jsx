import { useContext } from "react";
import NavBar from "../components/ui/NavBar";
import bus from "../assets/bus.svg";


export default function Home() {
  return (
    <>
      <NavBar />
      <section className="h-screen bg-tertiary">
        <div>
          <h1 className="px-6 py-4 mx-auto text-4xl font-main text-primary ">
            Track Your <span className="text-secondary">Travels</span>. Share Your{" "}
            <span className="text-secondary">Tales</span>
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
          <h1 className="px-6 py-4 mx-auto text-4xl font-main text-primary ">
            Track Your <span className="text-secondary">Travels</span>. Share Your{" "}
            <span className="text-secondary">Tales</span>
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
    </>
  );
}

