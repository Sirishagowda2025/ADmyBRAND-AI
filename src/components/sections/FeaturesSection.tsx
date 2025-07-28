import { motion } from "framer-motion";
import FeatureCard from "../FeatureCard";
import { 
  Zap, 
  Brain, 
  BarChart3, 
  Eye, 
  Target, 
  TrendingUp 
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Campaign Automation",
      description: "Set up intelligent campaigns that run themselves, optimizing performance in real-time based on AI insights."
    },
    {
      icon: Brain,
      title: "Customer Sentiment Detection",
      description: "Understand customer emotions and reactions across all channels with advanced natural language processing."
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Forecast trends, customer behavior, and campaign performance with 95% accuracy using machine learning."
    },
    {
      icon: Eye,
      title: "Real-Time Dashboard",
      description: "Monitor all your marketing metrics in one beautiful, intuitive dashboard with live data visualization."
    },
    {
      icon: Target,
      title: "Ad Personalization Engine",
      description: "Create hyper-personalized ads that adapt to each customer's preferences and behavior patterns."
    },
    {
      icon: TrendingUp,
      title: "Lead Scoring",
      description: "Automatically score and prioritize leads based on AI analysis of engagement and conversion probability."
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-secondary opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6"
          >
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">AI-Powered Features</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-space-grotesk font-bold mb-6">
            Everything You Need to
            <span className="gradient-text block">Dominate Marketing</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our comprehensive AI suite provides all the tools you need to create, 
            optimize, and scale your marketing campaigns like never before.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        {/* Additional visual element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 glass-card px-8 py-4 rounded-2xl">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-gradient-primary rounded-full border-2 border-background flex items-center justify-center text-white font-semibold"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="font-semibold text-foreground">Join 10,000+ users</div>
              <div className="text-sm text-muted-foreground">Growing their brands with AI</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;