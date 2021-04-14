import React from 'react';
import Card from './Card';

function Home() {
    const units = [
        {id:1, booked:false}
        , {id:2, booked:false}
        , {id:3, booked:false}
        , {id:4, booked:false}
        , {id:5, booked:false}
    ]
    return (
        <div className="container-fluid">
            <div className="row">
                {
                    units.map(element => {
                        return (<Card key={element.id} {...element}/>)
                    })
                }
            </div>
        </div>

    )
}

export default Home;