interface IconIndicatorProps {
  value: string | number;
}

export default function IconIndicator({ value }: IconIndicatorProps) {
  return <span className="badge badge-sm indicator-item">{value}</span>;
}
