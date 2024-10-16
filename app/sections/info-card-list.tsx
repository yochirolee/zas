import { TruckIcon } from 'lucide-react';
import { InfoCard } from '../components/info/info-card';
import AnimatedPriceCard from '../components/animations/animated-price-card';

const info = [
  {
    id: 2,
    title: 'Envío Gratis',
    description: 'Envío Gratis para compras mayores a $50',
    icon: <TruckIcon className="h-8 w-8 text-[#0EA5E9]" />,
    type: 'Duraderos',
  },
  {
    id: 3,
    title: 'Envío Gratis',
    description: 'Envío Gratis para compras mayores a $50',
    icon: <TruckIcon className="h-8 w-8 text-[#0EA5E9]" />,
    type: 'Alimentos, Aseo, etc',
  },
];

export const InfoCardList = () => {
  return (
    <div>
      <p className="text-base font-semibold leading-7 text-sky-800">
        Principales Categorías
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Envios de Miscelaneas, Medicinas y Duraderos
      </h1>
      <div className="mx-auto grid grid-cols-1 gap-8 py-10 sm:grid-cols-1 md:grid-cols-2  lg:max-w-7xl lg:grid-cols-3">
        <AnimatedPriceCard />
        {info.map((item) => (
          <InfoCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};
