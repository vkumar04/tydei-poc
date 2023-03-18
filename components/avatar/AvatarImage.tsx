import { ReactNode } from "react";

interface AvatarImageProps {
  img: ReactNode;
}

export default function AvatarImage({ img }: AvatarImageProps) {
  return <div className="w-10 rounded-full">{img}</div>;
}
