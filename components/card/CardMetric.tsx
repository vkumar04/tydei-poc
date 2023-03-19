interface CardMetricProps {
  title: string;
  value: string | number;
}

export default function CardMetric({ title, value }: CardMetricProps) {
  return (
    <div className="mt-2">
      <p>{title}</p>
      <p className="text-4xl font-semibold">{value}</p>
    </div>
  );
}
