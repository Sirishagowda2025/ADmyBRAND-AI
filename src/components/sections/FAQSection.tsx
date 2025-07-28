import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How quickly can I see results with ADmyBRAND AI?",
      answer: "Most customers see significant improvements within the first 30 days. Our AI algorithms start optimizing your campaigns immediately, with measurable ROI improvements typically visible within 2-4 weeks of implementation."
    },
    {
      question: "Is my data secure with your platform?",
      answer: "Absolutely. We use enterprise-grade encryption, comply with GDPR and CCPA regulations, and store all data in SOC 2 Type II certified data centers. Your data never leaves our secure environment and is never shared with third parties."
    },
    {
      question: "Do I need technical expertise to use ADmyBRAND AI?",
      answer: "Not at all! Our platform is designed for marketers, not developers. We provide an intuitive interface, guided setup, and comprehensive training. Our customer success team is always available to help you get the most out of the platform."
    },
    {
      question: "Can I integrate with my existing marketing tools?",
      answer: "Yes! We integrate with 200+ popular marketing tools including HubSpot, Salesforce, Google Ads, Facebook Ads, Mailchimp, and more. Our API also allows for custom integrations with your existing tech stack."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer multiple support channels including 24/7 chat support, email support, video tutorials, documentation, and live training sessions. Pro and Enterprise customers get priority support and dedicated account managers."
    },
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
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
            <span className="text-sm text-muted-foreground">Got Questions?</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-space-grotesk font-bold mb-6">
            Frequently Asked
            <span className="gradient-text block">Questions</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our AI marketing platform.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-8 rounded-2xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-white/10 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">
                    <span className="font-space-grotesk font-semibold">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-space-grotesk font-bold mb-4 text-foreground">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help. Get in touch and we'll answer any questions you have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-primary text-white rounded-lg hover:shadow-lg transition-all duration-300">
                Contact Support
              </button>
              <button className="px-6 py-3 border border-border rounded-lg hover:bg-accent/10 transition-all duration-300">
                Book a Call
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;