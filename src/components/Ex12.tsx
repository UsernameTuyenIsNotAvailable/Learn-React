import { sculptureList } from './data.js';
import { useState } from 'react';
export default function Ex12 (){
    return (
        <>
        <h1>State: A Component's Memory</h1>
        <Gallery></Gallery>
        <Gallery2></Gallery2>
        </>
    )

}

 function Gallery() {
    let index = 0;

    function handleClick() {
        index = index + 1;
    }

    const sculpture = sculptureList[index];
    return (
        <>
            <button onClick={handleClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
            <p>
                {sculpture.description}
            </p>
        </>
    );
}
function  Gallery2(){
    const [index, setIndex] = useState(5);
    function handleClick() {
        setIndex(index + 2);
    }

    const sculpture = sculptureList[index];
    return (
        <>
            <button onClick={handleClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 4} of {sculptureList.length})
            </h3>
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
            <p>
                {sculpture.description}
            </p>
        </>
    )

}