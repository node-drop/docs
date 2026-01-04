import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  showText?: boolean;
  className?: string;
}

export const Logo = ({
  width = 24,
  height = 6,
  showText = true,
  className = ""
}: LogoProps) => {
  return (
    <div className={`flex shrink-0 items-center gap-2 ${className}`}>
      <Image
        src="/logo.svg"
        alt="logo"
        width={width}
        height={height}
        className="dark:invert"
      />
      {showText && <span className="text-base font-semibold">NodeDrop</span>}
    </div>
  );
};
