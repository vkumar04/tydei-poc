interface AvatarIndicatorProps {
  value: string | number;
}

export default function AvatarIndicator({ value }: AvatarIndicatorProps) {
  return <span className="badge-secondary badge indicator-item">{value}</span>;
}
