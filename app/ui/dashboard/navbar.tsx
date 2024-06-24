import { Avatar } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';

export default function Navbar() {
  return (
    <header className="bg-background sticky top-0  z-30 flex h-14 items-center gap-4 border-b p-2 px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <button
        className="focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-md border text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 sm:hidden"
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="radix-:R1cmuuuuu6la:"
        data-state="closed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-panel-left h-5 w-5"
        >
          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
          <path d="M9 3v18"></path>
        </svg>
        <span className="sr-only">Toggle Menu</span>
      </button>

      <div className="relative ml-auto flex-1 md:grow-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-search text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>
        <Input className="min-w-md" />
      </div>
      <Avatar>
       
      </Avatar>
        
    </header>
  );
}
