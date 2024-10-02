import NumberTicker from '@/components/ui/number-ticker';

const stats = [
  {
    id: 1,
    name: 'Enviados en el 2023',
    value: 48,
    description: 'contenedores',
  },
  {
    id: 2,
    name: 'Entregados en el 2023',
    value: 60000,
    description: 'paquetes',
  },
  { id: 3, name: 'Clientes nuevos en el 2023', value: 2000 },
];

export default function Stats() {
  return (
    <div className="bg-white  py-10 sm:py-32">
      <div className="mx-auto  max-w-7xl px-6 lg:px-8">
        <dl className=" grid grid-cols-1 items-center  gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className=" items-center mx-auto flex max-w-xs flex-col gap-y-4 "
            >
              <div className="text-2xl leading-5 font-bold text-gray-700">
                {stat.description}
              </div>
              <div className="text-base leading-7 text-gray-600">
                {stat.name}
              </div>
              <div className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                <NumberTicker value={stat.value} />
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
