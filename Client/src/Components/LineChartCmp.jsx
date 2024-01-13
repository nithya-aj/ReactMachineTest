/* eslint-disable react/prop-types */
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const LineChartCmp = ({ data }) => {
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
          <XAxis dataKey="x" />
          <YAxis ticks={[5, 10, 15, 20]} interval={0} />
          <Line
            type="monotone"
            dataKey="y"
            stroke="#a8cfe4"
            dot={{ fill: "#a8cfe4", strokeWidth: 2, r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartCmp;
