import { React, useContext } from 'react';
// import { selectId } from './../App';

const Body = ( { children }) => {
    // const [selectContext, setSelectContext] = useContext(selectId);
    return (
        <div className="grid grid-cols-12 gap-4">
            {children}
        </div>
    )
}

const Card = ({ Source, text, data }) => {
    return (
    <div className="col-span-3 mx-2 border-none rounded-lg bg-gray-700 shadow-lg h-40 w-max">
        <p className="text-4xl text-gray-100 font-bold px-8 pt-8">+{data.total}</p>
        <p className="text-md text-gray-100 px-16">{text}</p>
        <div className="flex flex-row px-8">
            <Source width="28" className="fill-current text-yellow-400 transform rotate-45"/>
            <p className="ml-2 text-sm text-yellow-400 pb-4">{data.new} New cases</p>
        </div>
    </div>
    )

} 

export { Body, Card };
