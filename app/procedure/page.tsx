import {
  DocumentArrowUpIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/solid";

export default function Procedure() {
  return (
    <div className="grid min-w-full grid-cols-3 gap-4 p-4">
      <div className="col-span-3 mt-6 flex items-center justify-between">
        <p className="text-2xl font-semibold">Purchase Orders</p>
        <div className="flex items-center space-x-4">
          <button className="btn-circle btn">
            <RectangleGroupIcon className="h-5 w-5" />
          </button>
          <button className="btn-circle btn">
            <DocumentArrowUpIcon className="h-5 w-5" />
          </button>
          <button className="btn-primary btn">Create Purchase Order</button>
        </div>
      </div>
    </div>
  );
}
