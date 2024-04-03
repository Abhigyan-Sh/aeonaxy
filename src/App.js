import { 
  AboutUs, 
  HeroSection, 
  LearnMore, 
  MemberShipPlans, 
  Navbar, 
  Service, 
  TestimonialSection 
} from "./components/sections/index";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <TestimonialSection />
      <Service />
      <MemberShipPlans />
      <LearnMore />
    </div>
  );
}

export default App;
