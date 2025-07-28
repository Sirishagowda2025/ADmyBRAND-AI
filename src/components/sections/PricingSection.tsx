import { useState } from "react";
import { motion } from "framer-motion";
import PricingCard from "../PricingCard";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      title: "Starter",
      monthlyPrice: "$29",
      annualPrice: "$290",
      period: isAnnual ? "year" : "month",
      features: [
        "5 AI campaigns per month",
        "Basic sentiment analysis",
        "Email support",
        "Standard dashboard",
        "1 team member",
        "API access",
      ],
    },
    {
      title: "Pro",
      monthlyPrice: "$99",
      annualPrice: "$990",
      period: isAnnual ? "year" : "month",
      features: [
        "Unlimited AI campaigns",
        "Advanced sentiment analysis",
        "Priority support",
        "Advanced dashboard",
        "10 team members",
        "Full API access",
        "Custom integrations",
        "A/B testing suite",
        "Predictive analytics",
      ],
      popular: true,
    },
    {
      title: "Enterprise",
      monthlyPrice: "Custom",
      annualPrice: "Custom",
      period: "plan",
      features: [
        "Everything in Pro",
        "Unlimited team members",
        "Dedicated account manager",
        "Custom AI models",
        "White-label solution",
        "SLA guarantee",
        "Advanced security",
        "Custom training",
        "Priority feature requests",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      
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
            <span className="text-sm text-muted-foreground">Simple Pricing</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-space-grotesk font-bold mb-6">
            Choose Your
            <span className="gradient-text block">Perfect Plan</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            Start free and scale as you grow. No hidden fees, no surprises.
            Cancel anytime.
          </p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 glass-card p-4 rounded-2xl inline-flex"
          >
            <Label htmlFor="billing-toggle" className="text-muted-foreground">
              Monthly
            </Label>
            <Switch
              id="billing-toggle"
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
            />
            <Label htmlFor="billing-toggle" className="text-foreground">
              Annual
            </Label>
            <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs font-semibold">
              Save 20%
            </span>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={isAnnual ? plan.annualPrice : plan.monthlyPrice}
              period={plan.period}
              features={plan.features}
              popular={plan.popular}
              index={index}
            />
          ))}
        </div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-space-grotesk font-bold mb-4 text-foreground">
              Need a custom solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contact our sales team to discuss enterprise pricing and custom features
              tailored to your organization's needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-primary text-white rounded-lg hover:shadow-lg transition-all duration-300">
                Contact Sales
              </button>
              <button className="px-6 py-3 border border-border rounded-lg hover:bg-accent/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;