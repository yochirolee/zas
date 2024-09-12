import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CreditCard, Wallet, DollarSign } from 'lucide-react';

export default function Checkout() {
  return (
    <div className="container mx-auto max-w-2xl p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Checkout</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h2 className="mb-2 text-lg font-semibold">
              Select Payment Method
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <Button
                variant="outline"
                className="flex h-24 flex-col items-center justify-center"
              >
                <CreditCard className="mb-2 h-6 w-6" />
                Credit Card
              </Button>
              <Button
                variant="outline"
                className="flex h-24 flex-col items-center justify-center"
              >
                <Wallet className="mb-2 h-6 w-6" />
                Digital Wallet
              </Button>
              <Button
                variant="outline"
                className="flex h-24 flex-col items-center justify-center"
              >
                <DollarSign className="mb-2 h-6 w-6" />
                Bank Transfer
              </Button>
            </div>
          </div>
          <Separator />
          <div>
            <h2 className="mb-2 text-lg font-semibold">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$99.99</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$9.99</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$10.00</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>$119.98</span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Complete Purchase</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
