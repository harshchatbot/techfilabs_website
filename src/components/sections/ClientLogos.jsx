import { motion } from "framer-motion";

const CLIENTS = [
  {
    name: "Annavaram Craft Studio",
    logo: "https://annavarams.com/cdn/shop/files/annavaram_logo.png?v=1773553676",
  },
  {
    name: "ABB",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/320px-ABB_logo.svg.png",
  },
  {
    name: "Pinterest",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pinterest-logo.png/160px-Pinterest-logo.png",
  },
  {
    name: "Credit Karma",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Credit_Karma_logo.svg/320px-Credit_Karma_logo.svg.png",
  },
  {
    name: "InCharge",
    logo: "https://www.incharge.org/wp-content/themes/incharge/assets/images/logo.svg",
  },
  {
    name: "Azul",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Azul_Airlines_logo_2.svg/320px-Azul_Airlines_logo_2.svg.png",
  },
];

export default function ClientLogos() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
            A trusted partner in customer success
          </h2>
          <p className="text-gray-500 text-sm">Some of the customers we have served</p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-8">
          {CLIENTS.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              viewport={{ once: true }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
