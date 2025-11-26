import { CategoryCard } from "./CategoryCard";
import handcraftImg from "@/assets/handcraft-1.jpg";
import potteryImg from "@/assets/pottery-1.jpg";
import snacksImg from "@/assets/snacks-1.jpg";
import giftsetImg from "@/assets/giftset-1.jpg";
import festiveImg from "@/assets/festive-1.jpg";
import textilesImg from "@/assets/textiles-handloom.jpg";
import accessoriesImg from "@/assets/accessories-traditional.jpg";
import spicesImg from "@/assets/spices-indian.jpg";
import bidriwareImg from "@/assets/bidriware.jpg";
import banglesImg from "@/assets/bangles-jaipur.jpg";
import sculpturesImg from "@/assets/sculptures-indian.jpg";
import shellcraftImg from "@/assets/shellcraft.jpg";
import shellJewelryImg from "@/assets/shell-jewelry.jpg";

export const Categories = () => {
  const categories = [
    { title: "Handcrafts", image: handcraftImg, color: "secondary" as const },
    { title: "Pottery", image: potteryImg, color: "peach" as const },
    { title: "Cultural Snacks", image: snacksImg, color: "lavender" as const },
    { title: "Gift Sets", image: giftsetImg, color: "mint" as const },
    { title: "Festive Items", image: festiveImg, color: "secondary" as const },
    { title: "Handloom Textiles", image: textilesImg, color: "peach" as const },
    { title: "Traditional Accessories", image: accessoriesImg, color: "lavender" as const },
    { title: "Indian Spices", image: spicesImg, color: "mint" as const },
    { title: "Bidriware", image: bidriwareImg, color: "secondary" as const },
    { title: "Jaipur Handmade Bangles", image: banglesImg, color: "peach" as const },
    { title: "Sculptures", image: sculpturesImg, color: "lavender" as const },
    { title: "Shellcraft", image: shellcraftImg, color: "mint" as const },
    { title: "Shell Jewelry", image: shellJewelryImg, color: "secondary" as const },
  ];

  return (
    <section id="categories" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Browse Categories
          </h2>
          <p className="text-muted-foreground">
            Explore our curated collection of authentic products
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CategoryCard {...category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
