import React, {FunctionComponent} from "react";
import {Bar, BarChart, CartesianGrid, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {LineChartDatum} from "./chart-bar-timeline.component";
import {barColor, lightBarColor, models} from "../../../../pages/usage/demo";
import {sum} from "d3";

interface ChartBarTimelineProps {
  data: LineChartDatum[],
  isOvering: boolean,
}


export const renderCustomYAxis = (data: { x: number, y: number, stroke: string, value: string, payload: any }) => {
  return (
    <text x={data.x} y={data.y} dy={5} fontSize={10} textAnchor={"end"}>
      <tspan>${data.payload.value}</tspan>
    </text>
  );
}

export const renderCustomXAxis = (data: { x: number, y: number, stroke: string, value: string, payload: any }) => {
  return (
    <text x={data.payload.coordinate} y={data.y} dy={6} fontSize={10} textAnchor={"middle"}>
      {formatDate(data.payload.value)}
    </text>
  );
}

const computeCost: (cost: number) => string = (cost: number) => {
  if (!cost) {
    return '-';
  } else if (cost < 0.01) {
    return `<$${Math.round(cost * 100) / 100}`
  } else {
    return `$${Math.round(cost * 100) / 100}`
  }
}

const formatDate = (date?: Date) => {
  return date?.toLocaleDateString("en-US", {
    month: 'short',
    day: 'numeric'
  });
}

const renderTooltip = (tooltip: any) => {
  if (tooltip.active) {
    const total = sum(tooltip.payload.map((pld: { value: any; }) => pld.value));
    return <div className='shadow border p-2.5 bg-white rounded-lg text-xs flex flex-col'>
      <div className='flex items-center justify-between font-semibold gap-2'>
        <span className='min-w-[100px]'>{formatDate(tooltip.label)}</span>
        <span>{computeCost(total)}</span>
      </div>
      {tooltip.payload.filter((pld: any) => pld.value > 0).map((pld: any) => <div key={pld.name}
                                                                                  className='flex items-center justify-between gap-2 text-gray-500'>
        <span className='flex items-center gap-2'>
        <span className='h-2 w-2' style={{background: barColor[pld.name]}}></span>
          {pld.name}
        </span>
        <span className='font-semibold'>{computeCost(pld.value)}</span>
      </div>)}
    </div>;
  }
  return null;
};
export const ChartBarTimeline: FunctionComponent<ChartBarTimelineProps> = (props: ChartBarTimelineProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%" className="visible">
      <BarChart
        data={props.data}
        margin={{
          top: 10,
          right: 15,
          left: -40,
          bottom: 10,
        }}
      >
        <Tooltip content={renderTooltip} cursor={false}/>
        <CartesianGrid vertical={false}/>
        <XAxis dataKey="date" tick={renderCustomXAxis} axisLine={false} interval={5} domain={['dataMin', 'dataMax']}/>
        <YAxis tick={renderCustomYAxis} axisLine={false} stroke={'none'} allowDataOverflow={true}/>
        {models.map((model, i) => (
          <Bar dataKey={model} key={i} stackId="a" fill={props.isOvering ? lightBarColor[model] : barColor[model]}
               activeBar={<Rectangle fill={barColor[model]}/>}/>))}
      </BarChart>
    </ResponsiveContainer>
  );
};
