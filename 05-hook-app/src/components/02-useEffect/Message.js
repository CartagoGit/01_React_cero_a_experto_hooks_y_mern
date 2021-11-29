import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x:0,y:0});
    const {x,y} = coords;
    useEffect(() => {

        const mouseMove = (e)=> {
            const coors = {x: e.x, y: e.y};
            // console.log(coors);
            setCoords(coors);
        }
        window.addEventListener('mousemove', mouseMove)//(e)=>{
            // console.log(e);
            // const coors = {x: e.x, y: e.y};
            // console.log(coors);
        // });

        return () => {
            console.log('comoponente desmontado');
            window.removeEventListener('mousemove', mouseMove);

        }
    }, [])

    return (
        <div>
            <h3>Que Genial</h3>
            <p>x: {x} - y: {y}</p>
        </div>
    )
}
