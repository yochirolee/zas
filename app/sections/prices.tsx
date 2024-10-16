import { BorderBeam } from '@/components/ui/border-beam';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/20/solid';
import {
  Box,
  Clock,
  MapIcon,
  MapPinIcon,
  Package2,
  ScaleIcon,
  Truck,
} from 'lucide-react';

const tiers = [
  {
    name: 'Precio',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: '$1.99',
    description: 'En todo tipo de productos',
    features: [
      'Entregas en Todas las Provincias',
      'Sistema de Tracking en Tiempo Real',
      'Aseguramos sus envios',
      'Atencion al Cliente 24 horas  ',
    ],
    featured: false,
  },
  /*  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$99',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      'Dedicated support representative',
      'Marketing automations',
      'Custom integrations',
    ],
    featured: true,
  }, */
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function Prices() {
  return (
    <div className="relative mx-auto grid max-w-lg grid-cols-1 items-center sm:mt-10 sm:gap-y-0 lg:max-w-full lg:gap-y-6">
      <div className="relative z-10">
        {tiers.map((tier, tierIdx) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: tierIdx * 0.2 }}
            className={classNames(
              tier.featured
                ? 'relative bg-gray-900 shadow-2xl'
                : 'bg-white/60 md:mx-8 lg:mx-0',
              tier.featured
                ? ''
                : tierIdx === 0
                  ? 'rounded-3xl  lg:rounded-bl-3xl '
                  : '  lg:rounded-3xl',
              'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
            )}
          >
            <BorderBeam
              size={250}
              duration={12}
              delay={9}
              colorFrom="#ec4899"
              colorTo="#6fa8dc"
            />
            <motion.h3
              id={tier.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={classNames(
                tier.featured ? 'text-indigo-400' : 'text-indigo-600',
                'text-base font-semibold leading-7',
              )}
            >
              {tier.name}
            </motion.h3>
            <motion.p
              className="mt-4 flex items-baseline gap-x-2"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span
                className={classNames(
                  tier.featured ? 'text-white' : 'text-gray-900',
                  'text-5xl font-bold tracking-tight',
                )}
              >
                {tier.priceMonthly}
              </span>
              <span
                className={classNames(
                  tier.featured ? 'text-gray-400' : 'text-gray-500',
                  'text-base',
                )}
              >
                /Lb
              </span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-600',
                'mt-6 text-base leading-7',
              )}
            >
              {tier.description}
            </motion.p>

            <motion.ul
              className="mt-10 space-y-8 border-t border-slate-900/10 pt-10 text-sm leading-6 text-slate-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.li
                className="flex items-center"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <Package2 className="h-6 w-6 text-[#0EA5E9]" />
                <p className="ml-5">
                  <strong className="font-semibold text-slate-900">
                    Rapidez y Seguridad:
                  </strong>{' '}
                  en cada uno de sus envios
                </p>
              </motion.li>
              <motion.li
                className="flex items-center"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                <MapPinIcon className="h-6 w-6 text-[#0EA5E9]" />
                <p className="ml-5">
                  <strong className="font-semibold text-slate-900">
                    Tracking Incluido:
                  </strong>{' '}
                  Sistema de Tracking en tiempo real
                </p>
              </motion.li>
              <motion.li
                className="flex items-center"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.9 }}
              >
                <Clock className="h-6 w-6 text-[#0EA5E9]" />
                <div className="ml-5">
                  <strong className="space-x-1 font-semibold text-slate-900">
                    Horario:
                  </strong>
                  <p>
                    Lunes a Viernes: 9:00 AM - 6:00 PM
                    <br />
                    Sábados-Domingos: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </motion.li>
            </motion.ul>

            <motion.div
              className="py-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <p className="my-8 text-center  text-lg font-semibold">
                Hasta la Puerta de su Casa!
              </p>
              <div className="relative mt-4 bg-white ">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group -my-4 mx-auto  items-center  gap-2 rounded-full bg-white/25 px-3 py-2 text-center text-xs text-slate-900 ring-1 ring-inset ring-black/[0.08] hover:bg-white/50 hover:ring-black/[0.13] sm:flex  lg:hidden xl:flex"
                  href="/"
                >
                  <span className="font-semibold ">Seguridad y Garantia</span>

                  <span className="font-medium">
                    <span className="md:hidden">Lideres en el Sector</span>
                    <span className="hidden md:inline">
                      Lideres en el Sector de Paqueteria a Cuba
                    </span>
                  </span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
