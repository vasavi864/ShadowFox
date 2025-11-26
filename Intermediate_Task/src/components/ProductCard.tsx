import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

export const ProductCard = ({ name, price, image }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border border-border shadow-soft transition-all duration-300 hover:shadow-hover hover:scale-[1.02]">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3 p-4">
        <div className="w-full">
          <h3 className="font-semibold text-foreground">{name}</h3>
          <p className="text-lg font-bold text-primary">₹{price.toFixed(2)}</p>
        </div>
        <Button 
          size="sm" 
          className="w-full bg-accent text-accent-foreground hover:bg-accent/80"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};
