import { ReactNode } from "react";

interface AvatarProps {
  image?: ReactNode;
  indicator?: ReactNode;
  placeholder?: ReactNode;
}

export default function Avatar({ image, indicator, placeholder }: AvatarProps) {
  return (
    <div
      className={`avatar ${indicator ? "indicator" : null} ${
        placeholder ? "placeholder" : null
      }`}
    >
      {indicator}
      {image}
      {placeholder}
    </div>
  );
}
