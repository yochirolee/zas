import Stats from '@/app/sections/stats';
import Ripple from '@/components/ui/ripple';

export function RippleDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Stats />
      <Ripple />
    </div>
  );
}
