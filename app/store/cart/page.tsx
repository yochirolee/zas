'use client';
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  Plane,
  Ship,
  ShoppingBag,
} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCartStore } from '@/app/hooks/useCartStore';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import CheckoutPage from '../checkout/page';
import Checkout from '@/app/components/checkout/checkout';
const shippingRates = {
  air: 2.5, // $2.5 per pound
  ship: 1.5, // $1.5 per pound
};
export default function CartPage() {
  const {
    cart,

    shippingMethod,
    setShippingMethod,
    addToCart,
    removeFromCart,

    calculateTotalWeight,
    calculateShippingCost,
    calculateItemTotal,
    calculateTotal,
  } = useCartStore();

  return (
    <div className="container mx-auto mt-8 max-w-7xl space-y-6">
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-2">
          <div className="space-y-8">
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Qty: {item.quantity}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Source: {item.source}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">
                      ${calculateItemTotal(item)}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => addToCart(item)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    {/*   <Button
                        variant="ghost"
                        onClick={() =>
                          setCart(
                            cart.filter((cartItem) => cartItem.id !== item.id),
                          )
                        }
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button> */}
                  </div>
                </li>
              ))}
            </ul>
            <Card className="px-4 py-24">
              <h3 className="mb-2 font-semibold">Select Shipping Method</h3>
              <div className="flex space-x-2">
                <Button
                  variant={shippingMethod === 'ship' ? 'default' : 'outline'}
                  className="flex-1"
                  onClick={() => setShippingMethod('ship')}
                >
                  <Ship className="mr-2 h-4 w-4" />
                  Ship (${shippingRates.ship}/lb)
                </Button>
                <Button
                  variant={shippingMethod === 'air' ? 'default' : 'outline'}
                  className="flex-1"
                  onClick={() => setShippingMethod('air')}
                >
                  <Plane className="mr-2 h-4 w-4" />
                  Air (${shippingRates.air}/lb)
                </Button>
              </div>
            </Card>
            <div className="flex flex-col justify-end items-end px-4 space-y-2">
              <p className="font-semibold">
                <label>Total Weight: </label>
                <span> {calculateTotalWeight().toFixed(2)} lbs</span>
              </p>
              <p className="font-semibold">
                <label>Shipping Cost: </label>
                <span> ${calculateShippingCost().toFixed(2)}</span>
              </p>
              <p className="text-lg font-bold">
                <label>Total: </label>
                <span> ${calculateTotal()}</span>
              </p>
            </div>
          </div>
          <div>
            <Checkout />
          </div>
        </div>
      )}
    </div>
  );
}
