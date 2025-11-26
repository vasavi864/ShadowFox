import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-bold tracking-tight">CultureCraft</h1>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-sm font-medium transition-colors hover:text-accent-foreground">
              Home
            </a>
            <a href="#categories" className="text-sm font-medium transition-colors hover:text-accent-foreground">
              Categories
            </a>
            <a href="#products" className="text-sm font-medium transition-colors hover:text-accent-foreground">
              Products
            </a>
            <a href="#about" className="text-sm font-medium transition-colors hover:text-accent-foreground">
              About
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-medium">
              0
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};
