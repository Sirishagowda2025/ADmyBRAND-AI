import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  index: number;
}

const PricingCard = ({ title, price, period, features, popular = false, index }: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`relative glass-card p-8 rounded-2xl group transition-all duration-300 ${
        popular ? "border-primary border-2 shadow-2xl shadow-primary/20" : ""
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-space-grotesk font-bold mb-2 text-foreground">
          {title}
        </h3>
        <div className="mb-4">
          <span className="text-4xl font-bold gradient-text">{price}</span>
          <span className="text-muted-foreground">/{period}</span>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {features.map((feature, featureIndex) => (
          <div key={featureIndex} className="flex items-center">
            <div className="w-5 h-5 bg-gradient-primary rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <Check className="w-3 h-3 text-white" />
            </div>
            <span className="text-muted-foreground">{feature}</span>
          </div>
        ))}
      </div>

      <Button 
        variant={popular ? "hero" : "outline"} 
        size="lg" 
        className="w-full"
      >
        Get Started
      </Button>
    </motion.div>
  );
};

export default PricingCard;