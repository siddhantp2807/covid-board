import { React, useContext } from 'react';
// import { selectId } from './../App';
import { ReactComponent as Search } from './../icons/search.svg';
import { ReactComponent as Arrow } from './../icons/increase.svg';
import { BarGraph, LineGraph, AutoLineGraph } from './Graphs';
import PieChart from "./PieChart";

const data = {
    "country": "India",
    "province": [
        "mainland"
    ],
    "timeline": {
        "cases": {
            "6/4/21": 28694879,
            "6/5/21": 28809339,
            "6/6/21": 28909975,
            "6/7/21": 28996473,
            "6/8/21": 29089069,
            "6/9/21": 29182532,
            "6/10/21": 29274823,
            "6/11/21": 29359155,
            "6/12/21": 29439989,
            "6/13/21": 29510410,
            "6/14/21": 29570881,
            "6/15/21": 29633105,
            "6/16/21": 29700313,
            "6/17/21": 29762793,
            "6/18/21": 29823546,
            "6/19/21": 29881772,
            "6/20/21": 29935221,
            "6/21/21": 29977861,
            "6/22/21": 30028709,
            "6/23/21": 30082778,
            "6/24/21": 30134445,
            "6/25/21": 30183143,
            "6/26/21": 30233183,
            "6/27/21": 30279331,
            "6/28/21": 30316897,
            "6/29/21": 30362848,
            "6/30/21": 30411634,
            "7/1/21": 30458251,
            "7/2/21": 30502362,
            "7/3/21": 30502362
        },
        "deaths": {
            "6/4/21": 344082,
            "6/5/21": 346759,
            "6/6/21": 349186,
            "6/7/21": 351309,
            "6/8/21": 353528,
            "6/9/21": 355705,
            "6/10/21": 363079,
            "6/11/21": 367081,
            "6/12/21": 370384,
            "6/13/21": 374305,
            // "6/14/21": 377031,
            // "6/15/21": 379573,
            // "6/16/21": 381903,
            // "6/17/21": 383490,
            // "6/18/21": 385137,
            // "6/19/21": 386708,
            // "6/20/21": 388135,
            // "6/21/21": 389302,
            // "6/22/21": 390660,
            // "6/23/21": 391981,
            // "6/24/21": 393310,
            // "6/25/21": 394493,
            // "6/26/21": 395751,
            // "6/27/21": 396730,
            // "6/28/21": 397637,
            // "6/29/21": 398454,
            // "6/30/21": 399459,
            // "7/1/21": 400312,
            // "7/2/21": 401050,
            // "7/3/21": 401050
        },
        "recovered": {
            "6/4/21": 26795549,
            "6/5/21": 26984781,
            "6/6/21": 27159180,
            "6/7/21": 27341462,
            "6/8/21": 27504126,
            "6/9/21": 27655493,
            "6/10/21": 27790073,
            "6/11/21": 27911384,
            "6/12/21": 28043446,
            "6/13/21": 28162947,
            "6/14/21": 28280472,
            "6/15/21": 28388100,
            "6/16/21": 28491670,
            "6/17/21": 28580647,
            "6/18/21": 28678390,
            "6/19/21": 28765738,
            "6/20/21": 28844199,
            "6/21/21": 28926038,
            "6/22/21": 28994855,
            "6/23/21": 29063740,
            "6/24/21": 29128267,
            "6/25/21": 29193085,
            "6/26/21": 29251029,
            "6/27/21": 29309607,
            "6/28/21": 29366601,
            "6/29/21": 29427330,
            "6/30/21": 29488918,
            "7/1/21": 29548302,
            "7/2/21": 29605779,
            "7/3/21": 29605779
        }
    }
};

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


const fillerColor = [
    
    {
        "deaths": "#F87171",
        "recovered": "#34D399",
        "active": "#FBBF24",
        
    },
    {
        "deathsPerOneMillion": "#F87171",
        "recoveredPerOneMillion": "#34D399",
        "activePerOneMillion": "#FBBF24"
    }
];


const Body = ( { children }) => {
    // const [selectContext, setSelectContext] = useContext(selectId);
    return (
        <div className="flex flex-col body">
            
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 ml-4 py-8">
                <UpdateTime time={"9:23 am"} />
                <SearchBar />

            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-12 gap-6 ml-4 py-8 place-items-center">
                <Card data={{ "total": 474834, "new": 473 }} text="Coronavirus cases" Source={Arrow} />
                <Card data={{ "total": 474834, "new": 473 }} text="Coronavirus cases" Source={Arrow} />
                <Card data={{ "total": 474834, "new": 473 }} text="Coronavirus cases" Source={Arrow} />
                <Card data={{ "total": 474834, "new": 473 }} text="Coronavirus cases" Source={Arrow} />

            </div>
            <div className="grid grid-cols-5 md:grid-cols-7 lg:grid-cols-12 gap-2 mx-8 py-8 place-items-center">
                
                <div className="col-span-6 bg-gray-700 rounded-xl shadow-xl w-max">
                    <div className="flex mt-8 items-center">
                        <Arrow className="fill-current text-red-400 transform rotate-45 ml-6" width="24"/>
                        <p className="text-sm text-red-400 ml-2 font-bold">Deaths</p>
                    </div>
                    
                    <BarGraph data={data.timeline.deaths} height="400" width="550" heading={"Total Deaths"}/>
                </div>
                
                <div className="col-span-6 bg-gray-700 rounded-xl shadow-xl w-max">
                    <div className="flex mt-8 items-center">
                        <Arrow className="fill-current text-red-400 transform rotate-45 ml-6" width="24" />
                        <p className="text-sm text-red-400 ml-2 font-bold">Deaths</p>
                    </div>
                    <LineGraph data={data.timeline.cases} height="400" width="550" heading={"Total Deaths"}/>
                </div>
                

            </div>
            <div className="grid grid-cols-12 ml-2 py-8 place-items-start">
                <div className="col-span-12 bg-gray-700 rounded-xl shadow-xl ml-10">
                        <div className="flex mt-8 items-center">
                            <Arrow className="fill-current text-red-400 transform rotate-45 ml-6" width="24" />
                            <p className="text-sm text-red-400 ml-2 font-bold">Deaths</p>
                        </div>
                        <div className="flex">
                            <PieChart 
                            height="500" 
                            width="500" 
                            data={othData} 
                            filter={Object.keys(fillerColor[1])} 
                            fillerColor={fillerColor[1]} 
                            iRadius={130} 
                            oRadius={195}
                            heading={"Covid-19 Cases Per Million"}
                            />
                            
                            <PieChart 
                            height="500" 
                            width="500" 
                            data={othData} 
                            filter={Object.keys(fillerColor[1])} 
                            fillerColor={fillerColor[1]} 
                            iRadius={90} 
                            oRadius={135}
                            heading={"Covid-19 Cases Per Million"}
                            />
                        
                        </div>
                        
                        
                </div>
            </div>
        </div>
        
    )
};

const Card = ({ Source, text, data }) => {
    return (
    <div className="col-span-3 mx-2 mt-0 border-none rounded-xl bg-gray-700 shadow-xl h-40 w-max">
        <p className="text-4xl text-gray-100 font-bold px-8 pt-8">+ {data.total}</p>
        <p className="text-lg text-gray-100 px-16">{text}</p>
        <div className="flex flex-row px-8 items-center mt-4 mb-0">
                <Source width="24" className="fill-current text-yellow-400 transform rotate-45"/>
            <p className="ml-2 text-sm text-yellow-300 font-semibold">+{data.new} New cases</p>
        </div>
    </div>
    )

} 

const UpdateTime = ({ time }) => {
    return (
        <div className="col-span-3 px-2 py-2 h-max-12">
            <p className="text-gray-100 text-xl">
                Last updated at {time}
            </p>
        </div>
    )
}

const SearchBar = (props) => {
    return (
        <div className="col-start-6 col-span-6 flex flex-row justify-center h-12">
            <input className="bg-gray-700 focus:outline-none focus:border-b focus:border-gray-100 text-gray-500 py-2 pl-4 w-full rounded-l-full" placeholder="Search by Country"/>
            <div className="bg-gray-700 mx-0 px-8 pt-2.5 rounded-r-full hover:bg-gray-600 cursor-pointer">
                <Search className="fill-current text-gray-100" width="26" />
            </div>
            
            
        </div>
    )
}

export { Body, Card };
