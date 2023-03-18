import { ReactNode } from "react";

interface IconProps {
  icon: ReactNode;
  indicator?: ReactNode;
}

export default function Icon({ icon, indicator }: IconProps) {
  return (
    <label tabIndex={0} className="btn-ghost btn-circle btn">
      <div className="indicator">
        {icon}
        {indicator}
      </div>
    </label>
  );
}
