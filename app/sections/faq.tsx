import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Info, MapPin } from 'lucide-react';

export default function Faq() {
  return (
    <div className="items-left grid py-24 lg:mx-auto lg:max-w-7xl lg:grid-cols-12 lg:gap-6">
      <div className="lg:col-span-4 ">
        <h2 className="text-base font-semibold leading-7 text-sky-800">
          Preguntas Frecuentes
        </h2>
        <p className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 xl:text-3xl xl:leading-[2.5rem]">
          Todo lo que necesitas saber...
        </p>
      </div>
      <div className="py-8 lg:col-span-8">
        <h1 className="text-md text-sky-600">Generales</h1>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Que tiempo demoran en llegar los envios?
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                <li className="items-left flex">
                  <Info className="mr-2 h-5 w-5 text-yellow-500" />
                  Generalmente los envios se entregan en un plazo de 25-30 dias
                  en La Habana, Artemisa y Mayabeque.
                </li>
                <li className="items-left flex">
                  <Info className="mr-2 h-5 w-5 text-yellow-500" />
                  En el resto de las provincias se entregan en un plazo de 30-45
                  dias.
                </li>
                <li className="flex shrink-0 items-center">
                  <Info className="mr-2 h-5 w-5 text-yellow-500" />
                  En zonas rurales se entregan en un plazo de 45-60 dias.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Como rastrear mi envio?</AccordionTrigger>
            <AccordionContent className="flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-blue-500" />
              Ud puede seguir el estado de su envio en tiempo real accediendo a
              <a href="https://ctenvios.com/tracking">
                <span className="mx-2 text-blue-500">CTEnvios</span>
              </a>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
