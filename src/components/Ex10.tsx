import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Ex10() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    const hasNext = index < sculptureList.length - 1;
    const sculpture = sculptureList[index];

    function handleNextClick() {
        if (hasNext) {
            setIndex(index + 1);
        }
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    return (
        <>
            <button onClick={handleNextClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name}</i> by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img src={sculpture.url} alt={sculpture.alt} />
        </>
    );
}
