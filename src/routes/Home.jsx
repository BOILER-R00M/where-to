import { useContext } from "react";
import NavBar from "../components/ui/NavBar";
import bus from "../assets/bus.svg"

export default function Home() {
  return (
    <>
      <NavBar />
      <div >
        <h1>Track Your Travels. Share Your Tales</h1>
        <p>Write a little intro about the application. What it does here. something fun and cool bah blah balh</p>
      </div>
    </>
  );
}
