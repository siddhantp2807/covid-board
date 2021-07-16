import { React, useRef, useEffect } from 'react';
import { select, scaleBand, scaleLinear, max, min, extent, scaleTime, timeFormat, format, line, axisBottom, axisLeft } from 'd3';


const data = {
    "country": "India",
    "province": [
        "mainland"
    ],
    "timeline": {
        "cases": {
            "6/17/21": 29762793,
            "6/18/21": 29823546,
            "6/19/21": 29881772,
            "6/20/21": 29935221,
            "6/21/21": 29977861,
            "6/22/21": 30028709,
            "6/23/21": 30028709
        },
        "deaths": {
            "6/17/21": 383490,
            "6/18/21": 385137,
            "6/19/21": 386708,
            "6/20/21": 388135,
            "6/21/21": 389302,
            "6/22/21": 390660,
            "6/23/21": 390660
        },
        "recovered": {
            "6/17/21": 28580647,
            "6/18/21": 28678390,
            "6/19/21": 28765738,
            "6/20/21": 28844199,
            "6/21/21": 28926038,
            "6/22/21": 28994855,
            "6/23/21": 28994855
        }
    }
};

const estimate = (arg) => {
    if (arg > 1000000) {
        return `${arg/1000000}m`
    }
    else if (arg > 1000) {
        return `${arg/1000}k`
    }
    else {
        return `${arg}`
    }
}

const dateConverter = (elmt) => {

    const date = new Date(elmt);

    return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}`

}


// const Graph = ({ data, scale, status, style, name }) => {
//     const graphRef = useRef(name);

//     const yScale = scaleBand()
//                     .domain(d => d)
//                     .range([0, 1000*scale.height]);

//     const xScale = scaleTime()
//                     .domain(d => d)
//                     .range([0, max(data, d => data[d])])

//     const margin = {top: 40, right: 30, left: 30, bottom: 40};
    
//     return (    
//         <svg height={1000*scale.height} width={1000*scale.width} ref={graphRef}>
//             <path d={`${line(data)}`} fill="none" stroke={style.color} stroke-width={style.strokeWidth}></path>
//             {Object.keys(data).map(d => <rect x={0} y={yScale(d)} width={xScale(data[d])} height={yScale.bandwidth()} />)}
//         </svg>
//     )
// }

const BarGraph = ({ data, height, width, heading }) => {

    const margin = { top: height*0.1, right: width*0.05, left: width*0.05, bottom: height*0.15 };

    const innerHeight = height - margin.top - margin.bottom;
    const innerWidth = width - margin.right - margin.left;
    
    let yScale = scaleLinear()
                    .domain([min(Object.values(data))*0.99, max(Object.values(data))*1.01])
                    .range([0, innerHeight]);

    let xScale = scaleBand()
                    .domain(Object.keys(data))
                    .range([40, innerWidth]);


    return (
        <svg width={width} height={height}>
            
            <g transform={`translate(${margin.left}, ${margin.top})`}>
                <text x={innerWidth*2/5} y={-20} stroke="white">{heading}</text>
            {yScale.ticks().map(tickVal => (
                <g transform={`translate(0, ${innerHeight-yScale(tickVal)})`}>
                    <line x1={40} x2={innerWidth} stroke="#D1D5DB" strokeDasharray="2"/>
                    <text x={0} style={{alignmentBaseline: "central"}} className="text-xs" stroke="white">{estimate(tickVal)}</text>
                </g>
            ))}
            {xScale.domain().map(tickVal => (
                <g transform={`translate(${xScale(tickVal) + xScale.bandwidth()*3/10}, ${innerHeight})`} >
                    <text x={0} style={{ textAnchor: "middle" }} dy="2.5em" className="text-xs" stroke="white">{dateConverter(tickVal)}</text>
                </g>
            ))}
            {
                Object.keys(data).map((elmt) => <rect className={`fill-current text-red-400`} x={xScale(elmt)} y={innerHeight - yScale(data[elmt])} height={yScale(data[elmt])} width={xScale.bandwidth()*3/5} />)
            }
            </g>
        </svg>
    )
}

const LineGraph = ({ data, height, width, heading }) => {
    const margin = { top: height * 0.1, right: width * 0.05, left: width * 0.05, bottom: height * 0.15 };

    const innerHeight = height - margin.top - margin.bottom;
    const innerWidth = width - margin.right - margin.left;

    let yScale = scaleLinear()
        .domain([min(Object.values(data)), max(Object.values(data))])
        .range([innerHeight, 0]);

    const x = Object.keys(data).map((elmt) => {
        return new Date(elmt).getTime(); 
    })

    let xScale = scaleTime()
                .domain(extent(x))
                .range([50, innerWidth]);
    
    return (
        <svg width={width} height={height}>
            <g transform={`translate(${margin.left}, ${margin.top})`}>
                <text x={innerWidth * 2 / 5} y={-20} stroke="white">{heading}</text>
                {yScale.ticks().map(tickVal => (
                    <g transform={`translate(0, ${innerHeight - yScale(tickVal)})`}>
                        <line x1={50} x2={innerWidth} stroke="#D1D5DB" strokeDasharray="2" />
                        <text x={0} style={{ alignmentBaseline: "central" }} className="text-xs" stroke="white">{estimate(tickVal)}</text>
                    </g>
                ))}
                {x.filter((tickVal, idx, x) => idx % Math.round(x.length/7) == 0 ).map(tickVal => (
                    <g transform={`translate(${xScale(tickVal)}, ${innerHeight})`} >
                        <text x={0} style={{ textAnchor: "middle" }} dy="2.5em" className="text-xs" stroke="white">{timeFormat("%d %b")(tickVal)}</text>
                    </g>
                ))}
                <path stroke="#F87171" fill="none" strokeWidth="4"
                    d={line()
                        .x(d => xScale(new Date(d).getTime()))
                        .y(elmt => yScale(data[elmt]))(Object.keys(data))}
                >
                </path>
                {
                    Object.keys(data).map((elmt) => <circle className={`fill-current text-red-400`} cx={xScale(new Date(elmt).getTime())} r={3} cy={yScale(data[elmt])}> <title>{data[elmt], elmt} </title></circle>)
                }
            </g>
        </svg>
    )
}

const AutoLineGraph = ({ data, height, width, heading }) => {
    const margin = { top: height * 0.1, right: width * 0.05, left: width * 0.05, bottom: height * 0.15 };

    const innerHeight = height - margin.top - margin.bottom;
    const innerWidth = width - margin.right - margin.left;

    const x = Object.keys(data).map((elmt) => {
        return new Date(elmt).getTime(); 
    })

    let xScale = scaleTime()
                .domain(extent(x))
                .range([50, innerWidth]);
    
    let yScale = scaleLinear()
        .domain(extent(Object.values(data)))
        .range([innerHeight, 0]);

    return (

        <svg width={width} height={height}>
            <XAxis xScale={xScale} innerHeight={innerHeight} />
            <YAxis yScale={yScale} innerWidth={innerWidth} />    
            <Line xScale={xScale} yScale={yScale} data={data}/>
        </svg>

    )
}

const Line = ({xScale, yScale, data }) => {
    
    return (
        <>
        <path stroke="#F87171" fill="none" strokeWidth="4"
                    d={line()
                        .x(d => xScale(new Date(d).getTime()))
                        .y(elmt => yScale(data[elmt]))(Object.keys(data))}
                >
        </path>
        {
                    Object.keys(data).map((elmt) => <circle className={`fill-current text-red-400`} cx={xScale(new Date(elmt).getTime())} r={4} cy={yScale(data[elmt])}> <title>{data[elmt], elmt} </title></circle>)
                }
        </>
    )
}

const YAxis = ({ yScale, innerWidth }) => {
    const ref = useRef();

    useEffect(() => {
        const yAxisG = select(ref.current);
        const yAxis = axisLeft(yScale).ticks(6).tickFormat(format(".3s"));
        yAxisG.call(yAxis); 

    })
    return (
        <g ref={ref} style={{textAnchor: "end"}} transform={`translate(40, 0)`} stroke="white"/>
    )
}

const XAxis = ({ xScale, innerHeight }) => {
    const ref = useRef();
    useEffect(() => {
        const xAxisG = select(ref.current);
        const xAxis = axisBottom(xScale).ticks(7);
        xAxisG.call(xAxis);
    }, [])

    return (
        <g ref={ref} transform={`translate(0, ${innerHeight})`} stroke="white"/>
    )
}


export { BarGraph, LineGraph, AutoLineGraph };