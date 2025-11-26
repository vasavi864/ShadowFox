import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-muted">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl animate-fade-in">
            Handcrafted Materials & Cultural Snacks
          </h2>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl animate-fade-in [animation-delay:200ms]">
            Discover authentic artisan crafts and traditional snacks that celebrate culture and heritage
          </p>
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-medium animate-fade-in [animation-delay:400ms]"
          >
            Shop Now
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 opacity-10">
        <img 
          src={heroBanner} 
          alt="Handcrafted materials and snacks" 
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
};
