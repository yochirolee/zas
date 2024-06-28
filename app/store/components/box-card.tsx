import { BellRing, Box, Check, CheckIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';

const notifications = [
  {
    title: 'Entregas en todo el pais.',
    description: '1 hour ago',
  },
  {
    title: 'Entrega puerta de casa!',
    description: '1 hour ago',
  },
  {
    title: 'Your subscription is expiring soon!',
    description: '2 hours ago',
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export function BoxCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn('w-[380px]', className)} {...props}>
      <CardHeader>
        <CardTitle>Crea tu caja</CardTitle>
        <CardDescription>
          adiciona lo que desees de los miles de productos con los que contamos,
          nosotros entregamos.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <Box />
          <h2 className="text-lg font-semibold">11</h2>
          <span>Lbs</span>
        </div>
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-4 w-4 translate-y-1 ">
                <CheckIcon className="h-4 w-4" />
              </span>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check className="mr-2 h-4 w-4" /> Crear mi Caja
        </Button>
      </CardFooter>
    </Card>
  );
}
