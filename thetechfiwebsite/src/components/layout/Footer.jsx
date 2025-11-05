import Container from "../ui/Container";
import {
  SITE_CONFIG,
  SERVICES_DATA,
  TESTIMONIALS_DATA,
  ABOUT_DATA,
  CONTACT_INFO,
  FOOTER_DATA,
} from "../../constants/data";

const Footer = ({
  logo = {
    text: "The Technology Fiction",
    initials: "TF",
    logo: "tech_fi_logo_512x512_image.jpeg",
  },
  description = "Transforming businesses through innovative technology solutions. We specialize in Salesforce automation, implementation, and React development.",
  copyright = "© 2024 The Technology Fiction. All rights reserved.",
  className = "",
}) => {
  return (
    <footer className={`bg-gray-900 text-white py-12 ${className}`}>
      <Container>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src={logo.logo}
                  alt={`${logo.text} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-display font-bold">
                {logo.text}
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">{description}</p>
            <div className="flex space-x-4">
              {FOOTER_DATA.socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank" // open in new tab
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon === "instagram" && (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M7.001 2C4.243 2 2 4.243 2 7.001v9.998C2 19.757 4.243 22 7.001 22h9.998C19.757 22 22 19.757 22 17V7c0-2.757-2.243-5-5.001-5H7.001zM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6zm0 1.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm4.9-.9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                    </svg>
                  )}
                  {social.icon === "linkedin" && (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              {FOOTER_DATA.services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              {FOOTER_DATA.company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{copyright}</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
