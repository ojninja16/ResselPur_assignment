import HeroSection from "./components/HeroSection"
import HowItWorksSection from "./components/HowItWorksSection"
import WhyChooseUsSection from "./components/WhyChooseUsSection"
import NavBar from "./components/Navbar"
import Footer from './components//Footer.jsx'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../app/styles//theme.jsx';
export default function Home() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <NavBar />
    <HeroSection/>
    <HowItWorksSection/>
    <WhyChooseUsSection/>
    <Footer/>
    </ThemeProvider>
    </>
  )
}
