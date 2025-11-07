import Image from "next/image";

interface ExperienceItemProps {
  name: string;
  logo: string;
  label: string;
  link?: string;
  backgroundImage?: string;
}

export function ExperienceItem({
  name,
  logo,
  label,
  link = "#",
  backgroundImage,
}: ExperienceItemProps) {
  return (
    <a
      className="exp-card border"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
    >
      {/* Background Image Layer */}
      {backgroundImage && (
        <div
          className="exp-card-background"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Card Content */}
      <div className="exp-card-content">
        {/* Logo Container with yellow-green background */}
        <div className="exp-logo-container">
          <Image
            src={logo}
            alt={`${name} logo`}
            width={64}
            height={64}
            className="h-full w-full object-contain rounded-[8px]"
          />
        </div>

        {/* Text Content */}
        <div className="exp-text-content">
          <span className="exp-title">{name}</span>
          <span className="exp-label">{label}</span>
        </div>
      </div>
    </a>
  );
}
