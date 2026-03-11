// pages/Home.tsx
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Footer from "../components/layout/Footer";
import {
  Cpu,
  Radar,
  Cog,
  Car,
  BatteryCharging,
  CircuitBoard,
  Disc,
  Brain,
  Laptop,
  AlertTriangle,
  Sliders,
  ArrowLeftRight,
  Target,
  Move3D,
  Trophy,
  Wallet,
  Wrench,
} from "lucide-react";
import { FeatureCard } from "../components/home/FeatureCard";
import { Section } from "../components/home/Section";
import { motion } from "framer-motion";
import { MemberCard } from "../components/MemberCard";
import { memberTab } from "./member";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "accent"
    | "warning"
    | "error";
}

export default function Home() {
  const image = ["/logopixel.jpg"];

  const cards: FeatureCardProps[] = [
    {
      icon: <Cpu size={28} />,
      title: "Carte Arduino",
      description:
        "Microcontrôleur principal permettant de programmer et contrôler tous les composants du véhicule.",
      variant: "primary",
    },
    {
      icon: <Radar size={28} />,
      title: "Capteurs infrarouges",
      description:
        "Détectent les obstacles ou suivent une ligne grâce à l’émission et la réception de signaux infrarouges.",
      variant: "info",
    },
    {
      icon: <Cog size={28} />,
      title: "Moteurs DC",
      description:
        "Moteurs à courant continu permettant le déplacement et la propulsion du châssis.",
      variant: "secondary",
    },
    {
      icon: <Car size={28} />,
      title: "Châssis F1 personnalisé",
      description:
        "Structure mécanique inspirée d’une Formule 1 servant de support pour tous les composants.",
      variant: "accent",
    },
    {
      icon: <BatteryCharging size={28} />,
      title: "Batterie rechargeable",
      description:
        "Source d’énergie alimentant la carte Arduino et les moteurs du véhicule.",
      variant: "success",
    },
    {
      icon: <CircuitBoard size={28} />,
      title: "Driver Moteur",
      description:
        "Module électronique permettant de contrôler la vitesse et le sens de rotation des moteurs.",
      variant: "warning",
    },
    {
      icon: <Disc size={28} />,
      title: "Roues",
      description:
        "Permettent le déplacement physique du véhicule et assurent l’adhérence au sol.",
      variant: "secondary",
    },
    {
      icon: <Brain size={28} />,
      title: "Cerveau moteur",
      description:
        "Logique embarquée programmée pour gérer les décisions et les réactions du robot.",
      variant: "primary",
    },
    {
      icon: <Laptop size={28} />,
      title: "Ordinateurs de développement",
      description:
        "Utilisés pour programmer la carte Arduino, tester et téléverser le code du projet.",
      variant: "info",
    },
  ];

  const difficulties: FeatureCardProps[] = [
    {
      icon: <AlertTriangle size={28} />,
      title: "Instabilité à grande vitesse",
      description:
        "Le robot perdait en précision et en stabilité lors des accélérations importantes.",
      variant: "error",
    },
    {
      icon: <Sliders size={28} />,
      title: "Mauvaise calibration des capteurs",
      description:
        "Les capteurs infrarouges donnaient des lectures imprécises, affectant le suivi de ligne.",
      variant: "warning",
    },
    {
      icon: <ArrowLeftRight size={28} />,
      title: "Déséquilibre moteur gauche/droite",
      description:
        "Une différence de puissance entre les moteurs provoquait une déviation du robot.",
      variant: "secondary",
    },
  ];

  const solutions: FeatureCardProps[] = [
    {
      icon: <Cpu size={28} />,
      title: "Optimisation du contrôle",
      description:
        "Amélioration de l’algorithme pour stabiliser la trajectoire à haute vitesse.",
      variant: "success",
    },
    {
      icon: <Target size={28} />,
      title: "Calibration précise des capteurs",
      description:
        "Réglage fin des capteurs pour garantir une détection fiable et constante.",
      variant: "info",
    },
    {
      icon: <Move3D size={28} />,
      title: "Amélioration du centre de gravité",
      description:
        "Réorganisation des composants pour mieux répartir le poids et stabiliser le robot.",
      variant: "accent",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <div id="hero">
          <Hero images={image} />
        </div>

        {/* Présentation */}
        <Section
          id="presentation"
          title="Présentation du Robot"
          description="Notre robot suiveur de ligne au design inspiré de la Formule 1 combine performance, précision et stabilité. Il est le fruit d’une collaboration stratégique entre les équipes électronique, programmation et design."
          className="bg-base-100"
          imageSrc="/photomembre.jpg"
          imageAlt="Photo du robot"
        />

        {/* Matériels */}
        <Section
          id="materiels"
          title="Matériels Utilisés"
          description="Cette section présente l’ensemble des composants électroniques et mécaniques nécessaires à la réalisation du projet"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-100px 0px" }}
              >
                <FeatureCard {...card} />
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Difficultés */}
        <Section
          id="difficultes"
          title="Difficultés Rencontrées"
          description="Durant le développement du robot, plusieurs défis techniques ont dû être surmontés afin d'améliorer ses performances."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {difficulties.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-100px 0px" }}
              >
                <FeatureCard {...item} />
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Solutions */}
        <Section
          id="solutions"
          title="Solutions Apportées"
          description="Des améliorations techniques et stratégiques ont été mises en place pour optimiser la stabilité et la précision du robot."
          className="bg-base-200"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-100px 0px" }}
              >
                <FeatureCard {...item} />
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Budget */}
        <Section
          id="budget"
          title="Budget du Projet"
          description="Répartition des coûts engagés pour la conception et la participation à la compétition."
          className="bg-base-200"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Matériel */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px 0px" }}
            >
              <div className="card bg-base-100 shadow-md border border-base-300 hover:shadow-xl transition-all">
                <div className="card-body items-center text-center">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Wrench size={30} />
                  </div>
                  <h3 className="card-title mt-3">Matériel</h3>
                  <p className="text-2xl font-bold text-primary">50 000 FCFA</p>
                </div>
              </div>
            </motion.div>

            {/* Inscription */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px 0px" }}
            >
              <div className="card bg-base-100 shadow-md border border-base-300 hover:shadow-xl transition-all">
                <div className="card-body items-center text-center">
                  <div className="p-3 rounded-full bg-accent/10 text-accent">
                    <Trophy size={30} />
                  </div>
                  <h3 className="card-title mt-3">Inscription Compétition</h3>
                  <p className="text-2xl font-bold text-accent">20 000 FCFA</p>
                </div>
              </div>
            </motion.div>

            {/* Total */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px 0px" }}
            >
              <div className="card bg-primary text-primary-content shadow-lg hover:shadow-2xl transition-all">
                <div className="card-body items-center text-center">
                  <div className="p-3 rounded-full bg-white/20">
                    <Wallet size={30} />
                  </div>
                  <h3 className="card-title mt-3">Total</h3>
                  <p className="text-3xl font-extrabold">70 000 FCFA</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Membres */}
        <Section
          id="membres"
          title="Membres de l'équipe"
          description="Découvrez les talents qui composent notre équipe passionnée."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {memberTab.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-100px 0px" }}
              >
                <MemberCard member={member} />
              </motion.div>
            ))}
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
