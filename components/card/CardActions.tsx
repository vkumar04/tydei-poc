interface item {
  title: string;
  value: string | number;
}

interface data {
  data: item[];
}

export default function CardActions({ data }: data) {
  return (
    <div className="card-actions mt-2 justify-between">
      {data.map((item: item, i: number) => {
        return (
          <div key={i}>
            <p>{item.title}</p>
            <p className="text-xl font-semibold">{item.value}</p>
          </div>
        );
      })}
    </div>
  );
}
