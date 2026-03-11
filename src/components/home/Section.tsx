interface SectionProps {
  id?: string; // <- ajouté ici
  title?: string;
  description?: string;
  pc?: string;
  /** chemin de l'image à afficher dans la section */
  imageSrc?: string;
  /** texte alternatif pour l'image */
  imageAlt?: string;
  children?: React.ReactNode;
  className?: string;
}

export function Section({
  id,
  title,
  description,
  pc,
  imageSrc,
  imageAlt,
  children,
  className = "",
}: SectionProps) {
  console.log("Section id:", id);
  console.log("Section title:", title);
  console.log("Section description:", description);
  console.log("Section pc:", pc);
  console.log("Section imageSrc:", imageSrc);
  console.log("Section imageAlt:", imageAlt);
  console.log("Section children:", children);
  console.log("Section className:", className);
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        {(title || description) && (
          <div className="mb-10 text-center">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            )}
            {description && (
              <p className={`${pc} max-w-2xl mx-auto`}>{description}</p>
            )}
          </div>
        )}
        {/* image facultative */}
        {imageSrc && (
          <div className="mb-8 text-center">
            <img
              src={imageSrc}
              alt={imageAlt || ""}
              className="mx-auto max-w-full rounded"
            />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

<Section
  id="section1"
  title="Ma section"
  description="Ma description"
  pc="text-gray-600"
  imageSrc="/photomembre.jpg"   // correspond à membre PIXEL.jpg
  imageAlt="Membres du groupe Pixel"
/>