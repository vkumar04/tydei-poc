import { ReactNode } from "react";

interface CardProps {
  cardBody: ReactNode;
}

export default function Card({ cardBody }: CardProps) {
  return (
    <div className="card bg-primary text-primary-content shadow-xl">
      {cardBody}
    </div>
  );
}
