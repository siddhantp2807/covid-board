import React, { useState, useRef } from 'react'
import { arc, sum, pie, color, scaleOrdinal, select } from 'd3';

const othData = {
    "updated": 1625483041130,
    "cases": 184661246,
    "todayCases": 108929,
    "deaths": 3995158,
    "todayDeaths": 1811,
    "recovered": 168981823,
    "todayRecovered": 84293,
    "active": 11684265,
    "critical": 77796,
    "casesPerOneMillion": 23690,
    "deathsPerOneMillion": 512.5,
    "tests": 2768857775,
    "testsPerOneMillion": 353382.35,
    "population": 7835302867,
    "oneCasePerPeople": 0,
    "oneDeathPerPeople": 0,
    "oneTestPerPeople": 0,
    "undefined": 0,
    "activePerOneMillion": 1491.23,
    "recoveredPerOneMillion": 21566.73,
    "criticalPerOneMillion": 9.93,
    "affectedCountries": 222
};

const propFilter = (obj, arr) => {
    
    let y = Object.keys(obj).filter((elmt) => arr.includes(elmt)).map((elmt) => {
        return {"name": elmt, "amount": obj[elmt] }
    })

    return y
};

const PieChart = ({ height, width, data, filter, iRadius, oRadius, fillerColor, heading }) => {

     
    const [selected, setSelected] = useState(filter[2]);
    
    const margin = { top: height * 0.1, right: width * 0.05, left: width * 0.05, bottom: height * 0.15 };

    const innerHeight = height - margin.top - margin.bottom;
    const innerWidth = width - margin.right - margin.left;
    

    let filteredData = filter ? propFilter(data, filter) : propFilter(data, data);
    
    const py = pie().value(d => d.amount);
    const pieArc = arc()
                    .padAngle(0.03)
    
    return (
        <svg height={height} width={width}>
            <text stroke="white" transform={`translate(${innerWidth*1/20}, ${innerHeight*1/10})`}>{heading}</text>
            <g transform={`translate(${innerWidth*11/20}, ${innerHeight*7/10})`}>
                {py(filteredData).map((elmt, idx) => {
                    
                    return (
                    <path fill={ selected === filteredData[idx].name ? fillerColor[filteredData[idx].name] : fillerColor[filteredData[idx].name] + "99"} d={pieArc(
                        {
                            startAngle: elmt.startAngle,
                            endAngle: elmt.endAngle,
                            innerRadius: iRadius || 90,
                            outerRadius: selected === filteredData[idx].name ? oRadius*1.1 : oRadius || 135
                        }
                    )} >
                    </path>
                    )
                })}
                
            </g>
        </svg>
    )
}

export default PieChart;
