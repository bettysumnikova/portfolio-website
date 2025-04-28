import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import WorkSection from './components/WorkSection';
import BeyondSection from './components/BeyondSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Betty Sumnikova | Portfolio';
  }, []);

  return (
    <div className="font-sans text-text bg-background">
      <Navbar />
      <main>
        <HomeSection />
        <WorkSection />
        <BeyondSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;