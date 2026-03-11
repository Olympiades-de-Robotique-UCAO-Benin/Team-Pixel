import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  to: string;
}

export default function PrimaryButton({ children, to }: Props) {
  return (
    <Link
      to={to}
      className="
        inline-flex
        justify-center
        items-center
        whitespace-nowrap
        min-h-45px
        px-20px
        py-12px
        text-[1.1rem]
        font-semibold
        rounded-lg
        text-[#0a0e27]
        transition-all
        duration-300
        ease-in-out
        bg-gradient-to-br
        from-[#00d4ff]
        to-[#0099ff]
        hover:bg-[#00d4ff]
        hover:text-[#0a0e27]
        hover:shadow-[0_6px_20px_rgba(0,212,255,0.4)]
        hover:-translate-y-[2px]
      "
    >
      {children}
    </Link>
  );
}
