interface CardTitleProps {
  title: string;
}

export default function CardTitle({ title }: CardTitleProps) {
  return <h2 className="card-title text-2xl">{title}</h2>;
}
