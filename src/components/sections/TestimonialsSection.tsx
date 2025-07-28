import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import TestimonialCard from "../TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout>();

  const testimonials = [
    {
      quote: "ADmyBRAND AI has completely transformed our marketing strategy. We've seen a 300% increase in ROI within just 3 months. The predictive analytics are incredibly accurate.",
      author: "Sarah Chen",
      role: "Head of Marketing",
      company: "TechFlow Inc",
      avatar: "SC",
      rating: 5,
    },
    {
      quote: "The sentiment analysis feature helped us understand our customers better than ever before. We can now create campaigns that truly resonate with our audience.",
      author: "Michael Rodriguez",
      role: "CMO",
      company: "GrowthLabs",
      avatar: "MR",
      rating: 5,
    },
    {
      quote: "Implementation was seamless and the results were immediate. Our team productivity increased by 400% and we're generating more qualified leads than ever.",
      author: "Emily Johnson",
      role: "Digital Marketing Director",
      company: "InnovateCorp",
      avatar: "EJ",
      rating: 5,
    },
    {
      quote: "The AI-powered automation saved us countless hours while delivering better results. It's like having a team of marketing experts working 24/7.",
      author: "David Kim",
      role: "Marketing Manager",
      company: "ScaleUp Solutions",
      avatar: "DK",
      rating: 5,
    },
    {
      quote: "ADmyBRAND AI doesn't just automate our campaigns, it makes them smarter. The real-time optimization has increased our conversion rates by 250%.",
      author: "Lisa Thompson",
      role: "VP of Marketing",
      company: "NextGen Dynamics",
      avatar: "LT",
      rating: 5,
    },
  ];

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
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
            <span className="text-sm text-muted-foreground">Success Stories</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-space-grotesk font-bold mb-6">
            Loved by
            <span className="gradient-text block">Marketing Teams</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how leading companies are transforming their marketing with our AI platform.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <TestimonialCard {...testimonials[currentIndex]} />
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="glass-card"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="glass-card"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "10,000+", label: "Happy Customers" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "99%", label: "Customer Satisfaction" },
          ].map((stat, index) => (
            <div key={index} className="text-center glass-card p-6 rounded-xl">
              <div className="text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;