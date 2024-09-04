'use client';

import { useState } from 'react';
import { useCartStore } from '@/app/hooks/useCartStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
      </div>
    </div>
  );
}
