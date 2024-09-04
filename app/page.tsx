import CallToAction from './components/call-to-action';

import ProductsList from './components/products-list';
import { Faq } from './components/info/faq';
import { InfoCardList } from './components/info/info-card-list';

export default function Page() {
  return (
    <div className=" mx-auto w-full  ">
      <CallToAction />

      <div className="  container mx-auto flex flex-col space-y-16 p-4">
        <InfoCardList />
        <ProductsList />
        <Faq />
      </div>
    </div>
  );
}
