import { React, useState, useContext} from 'react';
import { SelectId } from './../App';


const Sidebar = (props) => {
    const [expanded, setExpanded] = useState(false);
    const [selectContext, setSelectContext] = useContext(SelectId);
    

    return (
        <>
            <div className={`flex flex-col hidden lg:block w-28 z-20 bg-gray-700 h-full fixed mainNav`} onMouseEnter={() => {setExpanded(true)}} onMouseLeave={() => setExpanded(false)}>

                    <Brand/>
                    {props.items.map((elmt) => {
                        return (
                            <BarIcon Source={elmt.icon} key={elmt.id} selected={selectContext === elmt.id} click={() => setSelectContext(elmt.id)}/>
                        )
                    })}
                    
                    
            </div>
            <div className={`flex flex-col hidden lg:block h-full pt-24 z-10 bg-gray-700 slideNav w-48 ${expanded ? "show-nav" : "hide-nav"}`} onMouseEnter={() => { setExpanded(true) }} onMouseLeave={() => setExpanded(false)}>
                {props.items.map((elmt) => {
                    return (
                        <BarText key={elmt.id} content={elmt.text} selected={selectContext === elmt.id} click={() => setSelectContext(elmt.id)}/>
                    )
                })}
            </div>
        </>
    )
}



const BarText = (props) => {
    
    return (
        <div className={`cursor-pointer py-6 pl-4 pr-6 text-lg font-bold text-left transition duration-300 ${props.selected ? "text-indigo-400" : "text-gray-100 hover:text-indigo-400 hover:bg-opacity-75"} hover:bg-gray-600`} key={props.key} onClick={props.click}>
            {props.content}
        </div>
    )
}



const Brand = (props) => {
    return (
        <div className="flex pl-10 mb-8 mt-8">
            <p className="text-2xl text-gray-100 font-bold">C</p>
            <p className="text-2xl uppercase text-indigo-400 font-bold">B</p>
        </div>
    )
}

const BarIcon = ({ key, Source, selected, click }) => {
    
    return (
        <div className="pl-10 py-6 cursor-pointer" key={key} onClick={click}>
            <Source width="28" className={`fill-current ${selected ? "text-indigo-400" : "text-gray-100"} transition duration-150 ease-in-out hover:text-indigo-400 `}/>
        </div>
    )
}



export { Sidebar } ;