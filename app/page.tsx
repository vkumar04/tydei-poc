import Card from "@/components/card/Card";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
export default function Home() {
  return (
    <div className="grid max-w-full grid-cols-3 gap-4 p-4">
      <div className="col-span-3">
        <h4 className="text-7xl font-thin">
          Welcome back, <span className="font-semibold">FirstHealth</span>
        </h4>
        <p className="mt-2 flex items-center">
          Last login <CalendarDaysIcon className="h-4 w-6" />
          <span className="font-semibold">{new Date().toDateString()}</span>
        </p>
      </div>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
