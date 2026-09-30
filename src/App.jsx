import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TeamList from "./components/TeamList";
import TrustedCompanies from "./components/TrustedCompanies";
import BuiltForYou from "./components/BuiltForYou";
import PowerfulFeatures from "./components/PowerfulFeatures";
import CustomerTestimonials from "./components/CustomerTestimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTAFooter from "./components/CTAFooter";

import "./App.css";

function App() {
  return (
    <main className="home-page">
      <Navbar />

      <Hero />

      <TeamList />

      <TrustedCompanies />
      <BuiltForYou />
      <PowerfulFeatures />
      <CustomerTestimonials />
      <Pricing />
      <FAQ />
      <CTAFooter />
    </main>
  );
}

export default App;