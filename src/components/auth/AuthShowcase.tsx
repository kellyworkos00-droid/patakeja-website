import Image from "next/image";

type AuthShowcaseProps = {
  kicker: string;
  title: string;
  description: string;
  imageSrc: string;
};

export default function AuthShowcase({
  kicker,
  title,
  description,
  imageSrc,
}: AuthShowcaseProps) {
  return (
    <aside className="auth-showcase" aria-hidden>
      <Image src={imageSrc} alt="" fill className="auth-showcase-image" priority />
      <div className="auth-showcase-overlay" />
      <div className="auth-showcase-copy">
        <p className="auth-kicker">{kicker}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </aside>
  );
}
