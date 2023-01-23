import React, {FC} from 'react';

interface IProgressBar{
    type?:"line"|'circle'
    percentage:number
    colour:string
    colorroler:string
    size:number
    strokeWidth:string

}
interface Icircle{
    colour?:any
    percentage?:number
    r?:number
    strokeWidth?:string
}

const cleanPercentage = (percentage:any) => {
    const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0; // we can set non-numbers to 0 here
    const isTooHigh = percentage > 100;
    return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
};
const Circle:FC<Icircle> = ({ colour, percentage,r,strokeWidth }:Icircle) => {

    const circ = 2 * Math.PI * r!;
    const strokePct = ((100 - percentage!) * circ) / 100;
    return (
        <circle
            r={r?r:60}
            cx={100}
            cy={100}
            fill="transparent"
            stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
            strokeWidth={strokeWidth}
            strokeDasharray={circ}
            strokeDashoffset={percentage ? strokePct : 0}
            strokeLinecap="round"
        ></circle>
    );
};
const Text:FC<Icircle> = ({ percentage }) => {
    return (
        <text
            x="50%"
            y="50%"
            dominantBaseline="central"
            textAnchor="middle"
            fontSize={"1.5em"}
        >
            {percentage!.toFixed(0)}%
        </text>
    );
};



const ProgressBar:FC<IProgressBar> = ({ percentage, colour,strokeWidth,size,colorroler }) => {
    const pct = cleanPercentage(percentage);
    return (
        <svg width={200} height={200}>
            <g transform={`rotate(-90 ${"100 100"})`}>
                <Circle colour={colorroler?colorroler:"lightgrey"} r={size} strokeWidth={strokeWidth} />
                <Circle colour={colour}   percentage={pct} r={size} strokeWidth={strokeWidth} />
            </g>
            <Text percentage={pct} />
        </svg>
    );
};

export default ProgressBar;
