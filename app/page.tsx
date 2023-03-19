import Card from "@/components/card/Card";
import CardActions from "@/components/card/CardActions";
import CardContent from "@/components/card/CardContent";
import CardMetric from "@/components/card/CardMetric";
import CardTitle from "@/components/card/CardTitle";
import {
  ArrowPathIcon,
  CalendarDaysIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";
import { homepageData } from "./consts/homepageData";

// async function getData() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home`);
//   return res.json();
// }

export default async function Home() {
  // const homeData = await getData();
  // const data = homeData.data;
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
      {homepageData.map((item: any, i: number) => (
        <Card
          key={i}
          cardBody={
            <div className="card-body">
              <CardTitle title={item.title} />
              <CardContent content={item.content} />
              <CardMetric title={item.metric.title} value={item.metric.value} />
              <CardActions data={item.subValues} />
            </div>
          }
        />
      ))}
    </div>
  );
}
