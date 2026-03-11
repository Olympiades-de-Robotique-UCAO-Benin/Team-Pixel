// components/layout/Navbar.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import ThemeSwitcher from "../ui/ThemeSwitcher";
import MobileMenuButton from "../ui/MobileMenuButton";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  const menuItems = [
    { label: "Accueil", href: "#hero" },
    { label: "Présentation", href: "#presentation" },
    { label: "Matériels", href: "#materiels" },
  ];

  // Définition des variants
  const buttonVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        type: "spring" as const,
        stiffness: 120,
      },
    }),
  };

  return (
    <header className="navbar bg-base-100 border-b border-primary sticky top-0 z-50 px-6">
      <div className="flex-1">
        <a href="#hero" className="text-2xl font-bold scroll-smooth">
          PIXEL Robotics
        </a>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-2 items-center">
        {menuItems.map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            className="btn btn-ghost scroll-smooth"
            custom={i}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            {item.label}
          </motion.a>
        ))}
        <ThemeSwitcher />
      </nav>

      {/* Mobile button */}
      <MobileMenuButton open={open} setOpen={setOpen} />

      {/* Mobile Menu */}
      {open && (
        <motion.div
          className="absolute top-16 left-0 w-full bg-base-100 flex flex-col items-center p-4 gap-2 md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="btn btn-ghost w-full text-center scroll-smooth"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2">
            <ThemeSwitcher />
          </div>
        </motion.div>
      )}
    </header>
  );
}
