import { ScaleIcon } from 'lucide-react';

export const InfoCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="lg:w-/3  relative z-10 mx-2 rounded-lg shadow-lg ring-1 ring-slate-900/10 sm:mx-0 sm:rounded-3xl lg:flex-none">
      <div className="absolute -bottom-px left-1/2 -ml-48 flex h-[2px] w-96">
        <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
        <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
        <div className="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
        <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
      </div>
      <div className="relative bg-white px-4 py-10 sm:rounded-3xl sm:px-10">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-sky-500">
            Envie con Nosotros
          </h3>
          <a
            className="inline-flex justify-center rounded-lg bg-purple-600 px-3 py-2 text-sm font-semibold text-white hover:bg-purple-700"
            href="/"
          >
            <span>Duraderos</span>
          </a>
        </div>
        <div className="mt-3 flex items-center">
          <p className="text-[2.5rem] leading-none text-slate-900">
            $<span className="font-bold">1.99</span>
          </p>
          <p className="ml-3 space-x-1 text-sm">
            <span className="font-semibold text-slate-900">
              La libra de Productos Duraderos
            </span>
          </p>
        </div>
        <p className="mt-6 text-sm leading-6 text-slate-600">
          Entregas en toda Cuba siempre que el producto o articulo no exceda las
          50 lbs
        </p>
        <h4 className="sr-only">Duraderos</h4>
        <ul className="mt-10 space-y-8 border-t border-slate-900/10 pt-10 text-sm leading-6 text-slate-700">
          <li className="flex">
            <ScaleIcon className="h-8 w-8 text-[#0EA5E9]" />
            <p className="ml-5">
              <strong className="font-semibold text-slate-900">
                $1.99 x Libra:
              </strong>{' '}
              en Duraderos hasta 500 Lbs
            </p>
          </li>
          <li className="flex">
            <ScaleIcon className="h-8 w-8 text-[#0EA5E9]" />
            <p className="ml-5">
              <strong className="font-semibold text-slate-900">
                $1.95 x Libra:
              </strong>{' '}
              en Duraderos mas de 500 Lbs
            </p>
          </li>
          <li className="flex">
            <ScaleIcon className="h-8 w-8 text-[#0EA5E9]" />
            <p className="ml-5">
              <strong className="font-semibold text-slate-900">$1,90:</strong>{' '}
              Equipaje no Acompañado o Menaje de Casa
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
