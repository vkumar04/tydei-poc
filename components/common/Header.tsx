import {
  BellIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import Avatar from "../avatar/Avatar";
import AvatarPlaceholder from "../avatar/AvatarPlaceholder";
import Icon from "../icon/Icon";
import IconIndicator from "../icon/IconIndicator";
import ThemeToggle from "./ThemeToggle";
export default function Header() {
  return (
    <div className="navbar flex justify-between bg-primary text-white">
      <div className="space-x-6">
        <Link href="/" className="btn-ghost btn text-xl normal-case">
          daisyUI
        </Link>
        <Link href="/" className="link-hover link">
          Home
        </Link>
        <Link href="/" className="link-hover link">
          Procedure
        </Link>
        <Link href="/" className="link-hover link">
          Inventory
        </Link>
        <Link href="/" className="link-hover link">
          Financial
        </Link>
      </div>
      <div className="space-x-2">
        <Icon
          icon={<ChatBubbleBottomCenterTextIcon className="h-6 w-6" />}
          indicator={<IconIndicator value={4} />}
        />
        <Icon
          icon={<BellIcon className="h-6 w-6" />}
          indicator={<IconIndicator value={4} />}
        />
        <Avatar placeholder={<AvatarPlaceholder initials="VK" />} />
        <ThemeToggle />
      </div>
    </div>
  );
}
