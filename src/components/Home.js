import React from 'react';

import IntroductionSection from './sections/IntroductionSection';
import AdvantagesSection from './sections/AdvantagesSection';
import ChoosingSection from './sections/ChoosingSection';
import CompatibilitySection from './sections/CompatibilitySection';
import WorkingSection from './sections/WorkingSection';
import BrandsSection from './sections/BrandsSection';
import BatterySection from './sections/BatterySection';

function Home() {
  return (
    <main className="container">
      <IntroductionSection />
      <AdvantagesSection />
      <ChoosingSection />
      <CompatibilitySection />
      <WorkingSection />
      <BrandsSection />
      <BatterySection />
    </main>
  );
}

export default Home;
