import brandSymbol from "@/logo/while-dreams-simbolo-transparente.png";

type BrandLogoProps = {
  compact?: boolean;
};

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <span className="brand-logo" aria-label="While Dreams">
      <span
        className="brand-mark"
        aria-hidden="true"
        style={{ backgroundImage: `url("${brandSymbol.src}")` }}
      />
      {!compact && (
        <span className="brand-wordmark">
          <strong>While</strong>
          <span>Dreams</span>
        </span>
      )}
    </span>
  );
}
