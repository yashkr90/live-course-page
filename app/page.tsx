import Image from 'next/image'
import Hero from './Components/Hero/Hero';
import Features from './Components/Features/Features';
import Schedule from './Components/Schedule/Schedule';
import Faculty from './Components/Faculty/Faculty';
import Books from './Components/Books/Books';
import Syllabus from './Components/Syllabus/Syllabus';
import Pricing from './Components/Pricing/Pricing';
import Scholarships from './Components/Scholarships/Scholarships';
import Navbar from './Components/Navbar/Navbar';

export default function Home() {
  return (
    <>
    <Navbar />
    
    <Hero />
    <Features />
    <Schedule />
    <Faculty />
    <Books />
    <Syllabus />
    <Pricing />
    <Scholarships />
    
    </>
  )
}
