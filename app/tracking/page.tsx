import Header from '../components/header';
import TrackingSection from '../sections/tracking-section';

export default function TrackingPage() {
  return (
    <div className="   md:container ">
      <Header />
      <div className="relative m-0 mx-auto flex flex-col space-y-10 px-2  md:container md:mx-auto ">
        <TrackingSection />
      </div>
    </div>
  );
}
