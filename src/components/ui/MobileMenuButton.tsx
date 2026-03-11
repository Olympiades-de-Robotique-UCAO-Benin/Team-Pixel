import { Menu, X } from "lucide-react";

type Props = {
  open: boolean;

  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileMenuButton({ open, setOpen }: Props) {
  return (
    <button className="btn btn-ghost md:hidden" onClick={() => setOpen(!open)}>
      {open ? <X /> : <Menu />}
    </button>
  );
}
