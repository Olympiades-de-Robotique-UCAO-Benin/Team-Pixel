// components/Footer.tsx
import React from "react";
import { Facebook, Instagram, Linkedin} from "lucide-react";

const Footer: React.FC = () => {
  const socialIcons = [
    { icon: <Facebook />, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61587814015373" },
    { icon: <Instagram />, label: "Instagram", href: "https://www.instagram.com/ucaotech2026?igsh=MTVtM2plenF1em02bw==" },
    { icon: <Linkedin />, label: "LinkedIn", href: "https://www.linkedin.com/company/ucao-tech/" },
  ];

  return (
    <footer className="bg-base-200 text-base-content border-t border-base-content mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* À propos */}
        <div>
          <h3 className="text-primary font-bold text-lg mb-4">À Propos</h3>
          <p className="text-base-content/80 text-sm leading-relaxed">
            @2026 PIXEL Robotics - Projet UCAO-TECH <br />
            UCAO-TECH - Olympiade de Robotique UCAO <br />
            PIXEL Robotics <br />
            La vision naît d'un PIXEL, l'innovation naît de nous <br />
            Robot Suiveur de Ligne - Design Formule 1
          </p>
        </div>

        {/* Contact / Infos */}
        <div>
          <h3 className="text-primary font-bold text-lg mb-4">Contact</h3>
          <ul className="text-sm space-y-2 text-base-content/80">
            <li>
              <strong>Téléphone :</strong> (229) 01 41 63 78 98
            </li>
            <li>
              <strong>Email :</strong>{" "}
              <a href="mailto:ucaotech@gmail.com" className="link link-hover">
                ucaotech@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="text-primary font-bold text-lg mb-4">Suivez-nous</h3>
          <div className="flex space-x-4">
            {socialIcons.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="btn btn-circle btn-ghost hover:bg-primary hover:text-base-100 transition-all"
              >
                {React.cloneElement(item.icon, { className: "w-5 h-5" })}
              </a>
            ))}
          </div>
        </div>

        {/* Slogan / Infos complémentaires */}
        <div>
          <h3 className="text-primary font-bold text-lg mb-4">Notre Vision</h3>
          <p className="text-base-content/80 text-sm leading-relaxed">
            Unis pour la technologie, ensemble vers l'innovation
          </p>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="text-center text-base-content/70 text-sm py-4 border-t border-base-content/30">
        &copy; 2026 AS UCAO-TECH. Tous droits réservés par la Team PIXEL 
      </div>
    </footer>
  );
};

export default Footer;
