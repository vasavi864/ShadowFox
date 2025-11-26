import aboutImage from "@/assets/about-section.jpg";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              About CultureCraft
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At CultureCraft, we believe in preserving cultural heritage through authentic handcrafted 
                materials and traditional snacks. Every product in our collection tells a story of skilled 
                artisans and time-honored recipes passed down through generations.
              </p>
              <p>
                Our mission is to connect you with the beauty of traditional craftsmanship and authentic 
                flavors. We work directly with local artisans and food makers to ensure every item meets 
                our high standards of quality and authenticity.
              </p>
              <p>
                Whether you're looking for unique handcrafted decor, meaningful gifts, or delicious 
                cultural treats, we're here to bring the world's finest artisan products to your doorstep.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-medium">
              <img
                src={aboutImage}
                alt="Artisan workshop"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
