interface AvatarPlaceholderProps {
  initials: string;
}

export default function AvatarPlaceholder({
  initials,
}: AvatarPlaceholderProps) {
  return (
    <div className="w-10 rounded-full bg-neutral-focus text-neutral-content">
      <span className="text-1xl">{initials}</span>
    </div>
  );
}
