import { TruckIcon } from 'lucide-react';
import { InfoCard } from './info-card';

const info = [
  {
    title: 'Envío Gratis',
    description: 'Envío Gratis para compras mayores a $50',
    icon: <TruckIcon className="h-8 w-8 text-[#0EA5E9]" />,
    type: 'Miscelaneas',
  },
  {
    title: 'Envío Gratis',
    description: 'Envío Gratis para compras mayores a $50',
    icon: <TruckIcon className="h-8 w-8 text-[#0EA5E9]" />,
    type: 'Duraderos',
  },
  {
    title: 'Envío Gratis',
    description: 'Envío Gratis para compras mayores a $50',
    icon: <TruckIcon className="h-8 w-8 text-[#0EA5E9]" />,
    type: 'Alimentos, Aseo, etc',
  },
];

export const InfoCardList = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Principales Categorías</h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {info.map((item) => (
          <InfoCard
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};
