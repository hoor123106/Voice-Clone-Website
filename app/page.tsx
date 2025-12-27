import Image from "next/image";
import Hero from "./components/HeroSection/Hero";
import Meeting from "./components/MeetingSection/Meeting";
import Course from "./components/CourseSection/Course";
import Card from "./components/CardSection/Card";
import FAQ from "./components/FAQSection/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <Meeting></Meeting>
      <Course></Course>
      <Card></Card>
      <FAQ></FAQ>
    </main>
  );
}