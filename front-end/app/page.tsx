import Hero from "./components/Hero";
import OurFutres from "./components/OurFutres";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className=" px-4 py-16 sm:px-6">
        <OurFutres />
      </div>
    </div>
  );
}
