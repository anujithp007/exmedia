import React from 'react'
import Footer from '../components/Footer'
import HomeSection from '../components/HomeSection'
import CapsuleSection from '../components/CapsuleSection'
import VideoSection from '../components/VideoSection'
import ServiceSection from '../components/ServiceSection'
import TeamSection from '../components/TeamSection'
import ProjectSection from '../components/ProjectSection'
import ClientsSection from '../components/ClientSection'
import ContactSection from '../components/ContactSection'
import Navbar from '../components/Navbar'
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/capsule.css'

const Page = () => {
  return (
    <div>
       <div className="whatsapp-icon">
      <a href="https://api.whatsapp.com/send?phone=9526123466"> {/* Replace the href with your WhatsApp link */}
        <FaWhatsapp className="whatsapp-icon__icon" />
      </a>
    </div>
        <Navbar/>
        <HomeSection/>
        {/* <CapsuleSection/> */}
        <VideoSection/>
        <div className='pt-6'>

        <TeamSection/>
        </div>
        <ServiceSection/>
        <ProjectSection/>
        <ClientsSection/>
        <ContactSection/>
        <div className='pt-8'>

        <Footer/>
        </div>

    </div>
  )
}

export default Page