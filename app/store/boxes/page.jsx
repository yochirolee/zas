'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

const boxes = [
  { id: 'box1', name: 'Small Box', price: 10, maxWeight: 11 },
  { id: 'box2', name: 'Medium Box', price: 15, maxWeight: 22 },
  { id: 'box3', name: 'Large Box', price: 20, maxWeight: 44 },
];

const products = [
  {
    id: 'prod1',
    name: 'Premium Coffee Beans',
    price: 12,
    weight: 1,
    description: 'Aromatic, freshly roasted coffee beans from Ethiopia',
    image: '/placeholder.svg',
  },
  {
    id: 'prod2',
    name: 'Organic Green Tea',
    price: 8,
    weight: 0.5,
    description: 'High-quality, antioxidant-rich green tea leaves',
    image: '/placeholder.svg',
  },
  {
    id: 'prod3',
    name: 'Dark Chocolate Bar',
    price: 5,
    weight: 0.2,
    description: '72% cocoa, smooth and rich dark chocolate',
    image: '/placeholder.svg',
  },
  {
    id: 'prod4',
    name: 'Assorted Cookies',
    price: 7,
    weight: 0.7,
    description: 'Delicious mix of chocolate chip, oatmeal, and almond cookies',
    image: '/placeholder.svg',
  },
  {
    id: 'prod5',
    name: 'Mixed Dried Fruits',
    price: 6,
    weight: 0.6,
    description: 'Healthy blend of raisins, cranberries, and apricots',
    image: '/placeholder.svg',
  },
];

const ProductCard = ({ product, onAdd, disabled }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <Card className="flex h-full items-center flex-col">
      <CardHeader>
        <Image
          src={product.image}
          alt={product.name}
          width={250}
          height={250}
          className="rounded-md object-cover"
        />
        <CardTitle className="text-lg">{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="mb-2 text-sm text-muted-foreground">
          {product.description}
        </p>
        <div className="mb-2 flex items-center justify-between">
          <Badge variant="secondary">${product.price.toFixed(2)}</Badge>
          <span className="text-sm text-muted-foreground">
            {product.weight} lbs
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.max(1, parseInt(e.target.value) || 1))
            }
            className="w-20"
          />
          <Button
            onClick={() => onAdd(quantity)}
            disabled={disabled}
            className="flex-grow"
          >
            Add to Box
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default function Component() {
  const [selectedBox, setSelectedBox] = useState(null);
  const [boxContents, setBoxContents] = useState([]);

  const addToBox = (product, quantity) => {
    if (selectedBox) {
      const newTotalWeight = getTotalWeight() + product.weight * quantity;
      if (newTotalWeight <= selectedBox.maxWeight) {
        const existingProductIndex = boxContents.findIndex(
          (item) => item.id === product.id,
        );
        if (existingProductIndex !== -1) {
          const updatedContents = [...boxContents];
          updatedContents[existingProductIndex].quantity += quantity;
          setBoxContents(updatedContents);
        } else {
          setBoxContents([...boxContents, { ...product, quantity }]);
        }
      }
    }
  };

  const removeFromBox = (productId) => {
    setBoxContents(boxContents.filter((item) => item.id !== productId));
  };

  const getTotalWeight = () =>
    boxContents.reduce((sum, item) => sum + item.weight * item.quantity, 0);
  const getTotalPrice = () =>
    (selectedBox ? selectedBox.price : 0) +
    boxContents.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const totalWeight = getTotalWeight();
  const totalPrice = getTotalPrice();

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-3xl font-bold">Custom Box Shop</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Select Your Box</CardTitle>
        </CardHeader>
        <CardContent>
          <Select
            onValueChange={(value) =>
              setSelectedBox(boxes.find((box) => box.id === value) || null)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Choose a box" />
            </SelectTrigger>
            <SelectContent>
              {boxes.map((box) => (
                <SelectItem key={box.id} value={box.id}>
                  {box.name} - ${box.price} (up to {box.maxWeight} lbs)
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>
      <div className="grid grid-flow-col grid-cols-10 gap-4">
        <div className="col-span8 mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={(quantity) => addToBox(product, quantity)}
              disabled={
                !selectedBox ||
                getTotalWeight() + product.weight > selectedBox.maxWeight
              }
            />
          ))}
        </div>

        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Your Custom Box</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedBox ? (
              <>
                <p className="mb-2 font-semibold">Box: {selectedBox.name}</p>
                <div className="mb-4">
                  <p className="mb-2">
                    Weight: {totalWeight.toFixed(2)} / {selectedBox.maxWeight}{' '}
                    lbs
                  </p>
                  <Progress
                    value={(totalWeight / selectedBox.maxWeight) * 100}
                    className="w-full"
                  />
                </div>
                <p className="mb-4">Contents:</p>
                {boxContents.length > 0 ? (
                  <ul className="space-y-2">
                    {boxContents.map((item) => (
                      <li
                        key={item.id}
                        className="flex items-center justify-between rounded-md bg-muted p-2"
                      >
                        <div>
                          <span className="font-medium">{item.name}</span>
                          <span className="ml-2 text-sm text-muted-foreground">
                            ${(item.price * item.quantity).toFixed(2)} -{' '}
                            {(item.weight * item.quantity).toFixed(2)} lbs
                          </span>
                          <span className="ml-2 text-sm">
                            (Qty: {item.quantity})
                          </span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromBox(item.id)}
                        >
                          Remove
                        </Button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">
                    Your box is empty. Add some products!
                  </p>
                )}
              </>
            ) : (
              <p className="text-muted-foreground">
                Please select a box to get started.
              </p>
            )}
          </CardContent>
          <CardFooter className="flex flex-col justify-between gap-4 ">
            <div className=" flex  flex-col ">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Total Price:</span>
                <Badge variant="secondary" className="text-lg">
                  ${totalPrice.toFixed(2)}
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                Total Weight: {totalWeight.toFixed(2)} lbs
              </div>
            </div>
            <Button
              disabled={!selectedBox || boxContents.length === 0}
              className="w-full sm:w-auto"
            >
              Proceed to Checkout
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
