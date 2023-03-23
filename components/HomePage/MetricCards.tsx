"use client";

import { homepageData } from "@/app/consts/homepageData";
import { motion } from "framer-motion";
import Card from "../card/Card";
import CardActions from "../card/CardActions";
import CardContent from "../card/CardContent";
import CardMetric from "../card/CardMetric";
import CardTitle from "../card/CardTitle";

export default function MetricCards() {
  const containerAnimation = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delaychildren: 0.2,
      },
    },
  };
  return (
    <motion.div
      animate="visible"
      initial="hidden"
      variants={containerAnimation}
      className="col-span-3 grid gap-4 sm:grid-cols-1 lg:grid-cols-3"
    >
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
    </motion.div>
  );
}
