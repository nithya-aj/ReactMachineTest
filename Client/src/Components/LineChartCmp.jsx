/* eslint-disable react/prop-types */
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const LineChartCmp = () => {
  const data = [
    {
      name: "JAN",
      Y: 10,
    },
    {
      name: "FEB",
      Y: 15,
    },
    {
      name: "MAR",
      Y: 8,
    },
    {
      name: "APR",
      Y: 12,
    },
    {
      name: "MAY",
      Y: 18,
    },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      // Customizing the tooltip content
      return (
        <div className="h-5 w-20 flex flex-col gap-2 bg-white border-gray-400">
          <p>{`X: ${payload[0].payload.name}`}</p>
          <p>{`Y: ${payload[0].payload.Y}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="shadow-lg border rounded-xl bg-white">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="" />
          <XAxis dataKey="name" />
          <Tooltip content={<CustomTooltip />} />
          <YAxis ticks={[5, 10, 15, 20]} interval={0} />
          <Line
            type="monotone"
            dataKey="Y"
            stroke="#a8cfe4"
            dot={{ fill: "#a8cfe4", strokeWidth: 2, r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartCmp;
