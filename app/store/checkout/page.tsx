'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { CreditCard, DollarSign, Wallet } from 'lucide-react';
import OrderDetails from './components/order_details';

export default function Component() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="container mx-auto flex flex-col gap-8 p-4 lg:flex-row">
      <div className="lg:w-2/3">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Checkout</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6 flex  gap-2 text-sm">
              <span
                className={` ${step >= 1 ? 'font-semibold text-primary' : 'text-muted-foreground'}`}
              >
                Customer Information
              </span>
              <div>&gt;</div>

              <span
                className={` ${step >= 2 ? 'font-semibold text-primary' : 'text-muted-foreground'}`}
              >
                Payment
              </span>
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="123 Main St" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="New York" />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Select>
                      <SelectTrigger id="state">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ny">New York</SelectItem>
                        <SelectItem value="ca">California</SelectItem>
                        <SelectItem value="tx">Texas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" placeholder="10001" />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">
                      Checkout
                    </CardTitle>
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
                      <h2 className="mb-2 text-lg font-semibold">
                        Order Summary
                      </h2>
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
                </Card>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            {step > 1 && (
              <Button onClick={prevStep} variant="outline">
                Back
              </Button>
            )}
            <Button
              onClick={step < 2 ? nextStep : () => console.log('Place Order')}
              className="ml-auto"
            >
              {step < 2 ? 'Continue' : 'Place Order'}
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="lg:w-1/3">
        <OrderDetails />
      </div>
    </div>
  );
}
