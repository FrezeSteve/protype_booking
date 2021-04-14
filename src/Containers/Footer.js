import React from 'react';

const Example = (props) => {
    return (
        <>
            {props.children}
            <div style={{ bottom: "0", backgroundColor: "#183952!important" }}>
                <div className="container pt-sm-5">
                    <h1>Footer</h1>
                </div>
            </div>
        </>
    )
}
export default Example;