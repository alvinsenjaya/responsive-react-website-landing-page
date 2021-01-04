import React, {useState} from 'react'
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import HeroSection from '../components/hero_section';
import InfoSection from '../components/info_section';
import ParticleBackground from '../components/ParticleBackground';
import {AboutData, DiscoverData, SignupData} from '../components/info_section/Data';
import ServicesSection from '../components/services_section';
import FooterSection from '../components/footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggleIsOpen={toggleIsOpen}></Sidebar>
      <Navbar toggleIsOpen={toggleIsOpen}></Navbar>
      <HeroSection></HeroSection>
      <InfoSection data={AboutData}></InfoSection>
      <InfoSection data={DiscoverData}></InfoSection>
      <ServicesSection></ServicesSection>
      <InfoSection data={SignupData}></InfoSection>
      <FooterSection></FooterSection>
      <ParticleBackground></ParticleBackground>
    </>
  );
}

export default Home;
