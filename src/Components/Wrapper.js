import React from 'react';

const Wrapper = (props) => {
    return (
        <div className="relative flex w-full h-full bg-gray-900 overflow-x-hidden">
            {props.children}
        </div>
    )
}

export default Wrapper;