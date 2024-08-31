
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ProductCard() {
  return (
    <Card className="width w-full max-w-xs rounded-xl ">
      <div className="grid gap-4 p-4">
        <div className="aspect-[4/5] w-full overflow-hidden ">
          <img
            src="/3.webp?height=200&width=200"
            alt="Product image"
            width="400"
            height="500"
            className="aspect-[4/5] w-full  object-cover"
          />
        </div>
        <div className="grid gap-1.5">
          <h3 className="text-sm font-semibold md:text-base">
            Acme Circles T-Shirt
          </h3>
          <p className="text-sm font-semibold md:text-base">$99</p>
          <p className="text-sm  md:text-base">
            Stylish and comfortable tee for everyday wear
          </p>
        </div>
        <Button size="sm">Add to cart</Button>
      </div>
    </Card>
  );
}
