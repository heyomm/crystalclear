import About from '../components/About.jsx'
import Contact from '../components/Contact.jsx'
import Faq from '../components/Faq.jsx'
import FinalCta from '../components/FinalCta.jsx'
import Footer from '../components/Footer.jsx'
import Hero from '../components/Hero.jsx'
import MobileActionBar from '../components/MobileActionBar.jsx'
import Navbar from '../components/Navbar.jsx'
import Process from '../components/Process.jsx'
import Products from '../components/Products.jsx'
import ServiceAreas from '../components/ServiceAreas.jsx'
import Services from '../components/Services.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import { EnquiryProvider } from '../context/EnquiryContext.jsx'

export default function Home() {
  return (
    <EnquiryProvider>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Products />
        <ServiceAreas />
        <Contact />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileActionBar />
    </EnquiryProvider>
  )
}
