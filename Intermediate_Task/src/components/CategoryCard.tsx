import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  title: string;
  image: string;
  color: "secondary" | "peach" | "lavender" | "mint";
}

const colorClasses = {
  secondary: "bg-secondary hover:bg-secondary/80",
  peach: "bg-peach hover:bg-peach/80",
  lavender: "bg-lavender hover:bg-lavender/80",
  mint: "bg-mint hover:bg-mint/80",
};

export const CategoryCard = ({ title, image, color }: CategoryCardProps) => {
  return (
    <Card className={`group cursor-pointer overflow-hidden border-0 shadow-soft transition-all duration-300 hover:shadow-hover hover:scale-[1.02] ${colorClasses[color]}`}>
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-center">{title}</h3>
        </div>
      </CardContent>
    </Card>
  );
};
