import { ProductCard } from "./ProductCard";
import pottery1Img from "@/assets/pottery-1.jpg";
import pottery2Img from "@/assets/pottery-2.jpg";
import pottery3Img from "@/assets/pottery-3.jpg";
import pottery4Img from "@/assets/pottery-4.jpg";
import textiles1Img from "@/assets/textiles-1.jpg";
import textiles2Img from "@/assets/textiles-2.jpg";
import textiles3Img from "@/assets/textiles-3.jpg";
import foodItemsImg from "@/assets/food-items-1.jpg";
import snacksImg from "@/assets/snacks-1.jpg";
import woven1Img from "@/assets/woven-1.jpg";
import woven2Img from "@/assets/woven-2.jpg";
import woven3Img from "@/assets/woven-3.jpg";
import giftset1Img from "@/assets/giftset-1.jpg";
import giftset2Img from "@/assets/giftset-2.jpg";
import festive1Img from "@/assets/festive-1.jpg";
import festive2Img from "@/assets/festive-2.jpg";

export const Products = () => {
  const products = [
    { name: "Artisan Pottery Set", price: 1850.00, image: pottery1Img },
    { name: "Traditional Snack Box", price: 450.00, image: foodItemsImg },
    { name: "Heritage Gift Collection", price: 2400.00, image: giftset1Img },
    { name: "Festive Ornament Pack", price: 950.00, image: festive1Img },
    { name: "Handwoven Basket", price: 1650.00, image: woven1Img },
    { name: "Cultural Treat Sampler", price: 350.00, image: snacksImg },
    { name: "Premium Gift Box", price: 2850.00, image: giftset2Img },
    { name: "Celebration Decor Set", price: 1250.00, image: festive2Img },
    { name: "Handcrafted Clay Vase", price: 1450.00, image: pottery2Img },
    { name: "Handloomed Cotton Scarf", price: 1950.00, image: textiles1Img },
    { name: "Traditional Spice Collection", price: 650.00, image: foodItemsImg },
    { name: "Hand-Woven Table Runner", price: 1750.00, image: woven2Img },
    { name: "Artisan Pottery Bowl Set", price: 2250.00, image: pottery3Img },
    { name: "Cultural Tea Assortment", price: 550.00, image: snacksImg },
    { name: "Handloomed Silk Throw", price: 2950.00, image: textiles2Img },
    { name: "Traditional Pickle Set", price: 400.00, image: foodItemsImg },
    { name: "Hand-Woven Wall Hanging", price: 2650.00, image: woven3Img },
    { name: "Authentic Spice Blends", price: 300.00, image: foodItemsImg },
    { name: "Ceramic Tea Set", price: 2750.00, image: pottery4Img },
    { name: "Handloomed Wool Blanket", price: 3000.00, image: textiles3Img },
  ];

  return (
    <section id="products" className="py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Featured Products
          </h2>
          <p className="text-muted-foreground">
            Hand-picked selection of our most popular items
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={`${product.name}-${index}`}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
