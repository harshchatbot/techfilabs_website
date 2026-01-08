import {
    Navigation,
    Hero,
    Services,
    About,
    Testimonials,
    Contact,
    Footer
  } from "../components";
  
  import {
    SITE_CONFIG,
    SERVICES_DATA,
    TESTIMONIALS_DATA,
    ABOUT_DATA,
    CONTACT_INFO,
    FOOTER_DATA
  } from "../constants/data";
  
  import WhatsAppChatButton from "../components/WhatsAppChatButton";
  
  export default function HomePage() {
    return (
      <div className="min-h-screen bg-bg text-text">
        <Navigation
          logo={SITE_CONFIG.company}
          menuItems={SITE_CONFIG.navigation.menuItems}
          ctaButton={SITE_CONFIG.navigation.ctaButton}
        />
  
        <main id="main-content">
          <Hero
            logo={SITE_CONFIG.company}
            primaryButton={{
              text: "Explore Our Services",
              action: () => {
                const servicesSection = document.getElementById("services");
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
          />
  
          <Services services={SERVICES_DATA} />
  
          <About
            logo={SITE_CONFIG.company}
            stats={ABOUT_DATA.stats}
            features={ABOUT_DATA.features}
          />
  
          <Testimonials testimonials={TESTIMONIALS_DATA} />
  
          <Contact contactInfo={CONTACT_INFO} />
        </main>
  
        <Footer
          logo={SITE_CONFIG.company}
          services={FOOTER_DATA.services}
          company={FOOTER_DATA.company}
          socialLinks={FOOTER_DATA.socialLinks}
        />
  
        <WhatsAppChatButton />
      </div>
    );
  }
  