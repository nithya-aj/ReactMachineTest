import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const PieChartCmp = () => {
  const data = [
    { name: "Category A", value: 30 },
    { name: "Category B", value: 20 },
    { name: "Category C", value: 15 },
    { name: "Category D", value: 25 },
    { name: "Category E", value: 10 },
  ];

  const COLORS = ["#67c587", "#88d1a1", "#a9deba", "#c9ead4", "#eaf6ed"];

  return (
    <div className="shadow-xl border bg-white rounded-xl overflow-hidden">
      <ResponsiveContainer width="100%" height="60%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-col pl-8 gap-1 h-3">
        {data.map((item, id) => (
          <div key={id} className="flex items-center mb-2">
            <div
              className="h-3 w-3 mr-2 rounded-full"
              style={{ backgroundColor: COLORS[id] }}
            ></div>
            <p className="flex items-center">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartCmp;
