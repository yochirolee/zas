import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Info, LocateIcon, MapPin } from 'lucide-react';

export function Faq() {
  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold">Preguntas Frecuentes</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Que tiempo demoran en llegar los envios?
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Info className="mr-2 h-5 w-5 text-yellow-500" />
                Generalmente los envios se entregan en un plazo de 25-30 dias en
                La Habana, Artemisa y Mayabeque.
              </li>
              <li className="flex items-center">
                <Info className="mr-2 h-5 w-5 text-yellow-500" />
                En el resto de las provincias se entregan en un plazo de 30-45
                dias.
              </li>
              <li className="flex items-center">
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
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
