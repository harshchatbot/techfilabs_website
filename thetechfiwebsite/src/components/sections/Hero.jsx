import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";

const Hero = ({
  subtitle = "We help startups and growing businesses scale using Salesforce consulting, AI automation, WhatsApp solutions, and modern web & mobile app development — from CRM and data migration to intelligent customer engagement systems.",
  primaryButton = { text: "Get Free Consultation", action: () => {} },
  logo = {
    text: "The Technology Fiction",
    logo: "tech_fi_logo_512x512_image.jpeg",
  },
  className = "",
}) => {
  return (
    <section
      className={`pt-16 min-h-screen flex items-center hero-bg ${className}`}
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-secondary-900"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
            Powering Business Growth with 
              <span className="block text-gradient">
              Salesforce, AI & Digital Solutions
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-secondary-600 mb-4 leading-relaxed">
              {subtitle}
            </p>

            <p className="text-sm text-secondary-500 mb-8">
              Serving startups and businesses across India • Ajmer • Jaipur • Rajasthan • India • United States Of America • Worldwide 
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                className="btn-primary"
                icon={ArrowRight}
                onClick={primaryButton.action}
              >
                {primaryButton.text}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="w-full h-96 bg-gradient-to-br from-primary-100/50 to-accent-100/50 rounded-3xl backdrop-blur-sm border border-primary-200 flex items-center justify-center">
                <div className="text-center text-secondary-900">
                  <div className="w-24 h-24 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden shadow-lg">
                    <img
                      src={logo.logo}
                      alt={`${logo.name || logo.text} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gradient">
                    {logo.name || logo.text}
                  </h3>
                  <p className="text-secondary-600">
                    Transforming Businesses with Salesforce, Web, Cloud & Mobile
                    App Solutions
                  </p>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-200/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary-200/30 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
