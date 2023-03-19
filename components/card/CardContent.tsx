interface CardContentProps {
  content: string;
}

export default function CardContent({ content }: CardContentProps) {
  return <p className="leading-4">{content}</p>;
}
