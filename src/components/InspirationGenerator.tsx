import * as React from 'react';
import quotes from './quotes';
import FancyText from './FancyText';
import type {ReactNode} from "react";
interface ChildrenProp {
    children :  ReactNode
}
export default function InspirationGenerator({children} : ChildrenProp) {
    const [index, setIndex] = React.useState(0);
    const quote = quotes[index];
    const next = () => setIndex((index + 1) % quotes.length);

    return (
        <>
            <p>Your inspirational quote is:</p>
            <FancyText text={quote} title={true} />
            <button onClick={next}>Inspire me again</button>
            {children}
        </>
    );
}