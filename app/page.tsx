import Image from "next/image";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import News from "./components/News";
import Events from "./components/Events";

export default function Home() {
  return (
    <>
    
      <Hero />
      <Courses />
      <News />
      <Events />
    </>
  
  );
}
