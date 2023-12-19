import React, {FunctionComponent} from "react";
import {Cell, Pie, PieChart, ResponsiveContainer, Sector} from "recharts";

interface PieChartProps {
  data: number,
  size: number,
}


export const ReactPieChart: FunctionComponent<PieChartProps> = (props: PieChartProps) => {
  const value = props.data
  const fullCircleColor = '#ECECF1';
  const data = [
    {value: 1 - value, color: fullCircleColor},
    {value: value, color: '#15803D'}
  ];
  const textColor = '#727277';
  const outerRadius = props.size / 2;
  const innerRadius = outerRadius - 20;
  const renderActiveShape = () => {
    return <g>
      <text x={outerRadius} y={outerRadius} dy={8} textAnchor="middle" fill={textColor}>
        {Math.round(value * 100)}%
      </text>
      <Sector cx={props.size / 2} cy={props.size / 2} innerRadius={innerRadius} outerRadius={outerRadius}
              startAngle={90} endAngle={480} fill={fullCircleColor}/>
    </g>
  }
  return (
    <ResponsiveContainer width="100%" height="100%" className="visible">
      <PieChart width={props.size} height={props.size}>
        <Pie activeIndex={0} paddingAngle={0} animationBegin={0} animationDuration={1000} startAngle={90}
             endAngle={480}
             activeShape={renderActiveShape}
             data={data}
             dataKey="value" innerRadius={innerRadius} outerRadius={outerRadius}
             fill="#ECECF1">
          {data.map((datum, i) => (
            <Cell key={`cell-${i}`} fill={datum.color}/>
          ))}
        </Pie>

      </PieChart>
    </ResponsiveContainer>
  );
};
