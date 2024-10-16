import { lazy } from 'react';
import { InfoCardList } from './sections/info-card-list';
import Header from './components/header';
import Footer from './components/footer/footer';
import TrackingSection from './sections/tracking-section';
import CallToAction from './sections/call-to-action';
import AnimatedCardAndDetails from './sections/animated-card-and-details';
import Agencies from './sections/agencies';
import Prices from './sections/prices';
import Stats from './sections/stats';

//lazy load all sections
const Publicity = lazy(() => import('./sections/publicity'));
const SocialMedia = lazy(() => import('./sections/social-media'));

const Faq = lazy(() => import('./sections/faq'));

export default function Page() {
  return (
    <div>
      <div className="md:container">
        <Header />
        <div className="relative m-0 mx-auto flex flex-col space-y-10 px-2  md:container md:mx-auto ">
          <CallToAction />
          <Stats />
          <TrackingSection />
        {/*   <InfoCardList />
           */}
          <Agencies />
         {/*  <AnimatedCardAndDetails />
 */}
          <SocialMedia />
          <Publicity />
          <Faq />
        </div>
      </div>
      <Footer />
    </div>
  );
}
