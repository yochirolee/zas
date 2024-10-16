import { Check, MapPinIcon, Package2, ScaleIcon } from 'lucide-react';

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
            <span>Tarifa de Envio</span>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <p className="text-7xl leading-none text-slate-900">
            $<span className="font-bold">1.99</span>
          </p>
          <p className="ml-3 space-x-1 text-sm">
            <span className="font-semibold text-slate-900">por Libra</span>
          </p>
        </div>
        <p className="mt-6 text-sm leading-6 text-slate-600">
          Entregas en todas las provincias y municipios de Cuba
        </p>
        <h4 className="sr-only">Duraderos</h4>
        <ul className="mt-10 space-y-8 border-t border-slate-900/10 pt-10 text-sm leading-6 text-slate-700">
          <li className="flex items-center">
            <Package2 className="h-8 w-8 text-[#0EA5E9]" />
            <p className="ml-5">
              <strong className="font-semibold text-slate-900">
                Rapidez y Seguridad:
              </strong>{' '}
              en cada uno de sus envios
            </p>
          </li>
          <li className="flex items-center">
            <MapPinIcon className="h-8 w-8 text-[#0EA5E9]" />
            <p className="ml-5">
              <strong className="font-semibold text-slate-900">
                Tracking Incluido:
              </strong>{' '}
              Sistema de Tracking en tiempo real
            </p>
          </li>
          <li className="flex items-center">
            <ScaleIcon className="h-8 w-8 text-[#0EA5E9]" />
            <p className="ml-5">
              <strong className="font-semibold text-slate-900">Seguro:</strong>{' '}
              Aseguramos su carga
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
