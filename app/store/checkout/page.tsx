'use client';

import { useState } from 'react';
import { useCartStore } from '@/app/hooks/useCartStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Cart from '@/app/components/cart';

export default function CheckoutPage() {
  const { cart, calculateTotal, calculateShippingCost } = useCartStore();
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the order to your backend
    console.log('Order submitted', { cart, shippingDetails });
    // Then you might want to clear the cart and redirect to a confirmation page
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-3xl font-bold">Checkout</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Cart />
        <Card>
          <CardHeader>
            <CardTitle>Shipping Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="name"
                placeholder="Full Name"
                value={shippingDetails.name}
                onChange={handleInputChange}
                required
              />
              <Input
                name="address"
                placeholder="Address"
                value={shippingDetails.address}
                onChange={handleInputChange}
                required
              />
              <Input
                name="city"
                placeholder="City"
                value={shippingDetails.city}
                onChange={handleInputChange}
                required
              />
              <Input
                name="country"
                placeholder="Country"
                value={shippingDetails.country}
                onChange={handleInputChange}
                required
              />
              <Input
                name="zipCode"
                placeholder="Zip Code"
                value={shippingDetails.zipCode}
                onChange={handleInputChange}
                required
              />
              <Button type="submit" className="w-full">
                Place Order
              </Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="mb-4 space-y-2">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="space-y-2 border-t pt-2">
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>${calculateShippingCost().toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>${Number(calculateTotal()).toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
       
        <div
          role="radiogroup"
          aria-required="false"
          dir="ltr"
          className="grid grid-cols-3 gap-4"
          tabIndex={0}
          style={{ outline: 'none' }}
        >
          <div>
            <button
              type="button"
              role="radio"
              aria-checked="true"
              data-state="checked"
              value="card"
              className="peer sr-only aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              id="card"
              tabIndex={0}
              data-radix-collection-item=""
            >
              <span
                data-state="checked"
                className="flex items-center justify-center"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5 fill-primary"
                >
                  <path
                    d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </button>
            <label
              className="[&amp;:has([data-state=checked])]:border-primary flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 text-sm font-medium leading-none hover:bg-accent hover:text-accent-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70 peer-data-[state=checked]:border-primary"
              htmlFor="card"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="mb-3 h-6 w-6"
              >
                <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                <path d="M2 10h20"></path>
              </svg>
              Card
            </label>
          </div>
          <div>
            <button
              type="button"
              role="radio"
              aria-checked="false"
              data-state="unchecked"
              value="paypal"
              className="peer sr-only aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              id="paypal"
              tabIndex={-1}
              data-radix-collection-item=""
            ></button>
            <label
              className="[&amp;:has([data-state=checked])]:border-primary flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 text-sm font-medium leading-none hover:bg-accent hover:text-accent-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70 peer-data-[state=checked]:border-primary"
              htmlFor="paypal"
            >
              <svg role="img" viewBox="0 0 24 24" className="mb-3 h-6 w-6">
                <path
                  d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
                  fill="currentColor"
                ></path>
              </svg>
              Paypal
            </label>
          </div>
          <div>
            <button
              type="button"
              role="radio"
              aria-checked="false"
              data-state="unchecked"
              value="apple"
              className="peer sr-only aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              id="apple"
              tabIndex={-1}
              data-radix-collection-item=""
            ></button>
            <label
              className="[&amp;:has([data-state=checked])]:border-primary flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 text-sm font-medium leading-none hover:bg-accent hover:text-accent-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70 peer-data-[state=checked]:border-primary"
              htmlFor="apple"
            >
              <svg role="img" viewBox="0 0 24 24" className="mb-3 h-6 w-6">
                <path
                  d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                  fill="currentColor"
                ></path>
              </svg>
              Apple
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
