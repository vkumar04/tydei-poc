import MetricCards from "@/components/HomePage/MetricCards";
import {
  ArrowPathIcon,
  CalendarDaysIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

export default async function Home() {
  return (
    <div className="grid max-w-full grid-cols-3 gap-4 p-4">
      <div className="col-span-3">
        <h2 className="text-7xl font-thin">
          Welcome back, <span className="font-semibold">FirstHealth</span>
        </h2>
        <p className="mt-2 flex items-center">
          Last login <CalendarDaysIcon className="h-4 w-6" />
          <span className="font-semibold">{new Date().toDateString()}</span>
        </p>
      </div>
      <div className="col-span-3 flex items-center">
        <h4 className="text-2xl font-semibold">Dashboard</h4>
        <button className="btn-ghost btn-circle btn">
          <ArrowPathIcon className="h-6 w-6" />
        </button>
        <p className="flex items-center">
          updated as of <ClockIcon className="h-4 w-6" />
          <span className="font-semibold">6 Hour(s) ago</span>
        </p>
      </div>
      <MetricCards />
    </div>
  );
}
