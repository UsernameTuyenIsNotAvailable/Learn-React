

import FancyText from './FancyText';
import InspirationGenerator from './InspirationGenerator';
import {Copyright} from './Copyright';


export default  function  Ex9(){
    return (
        <>
            <h2>Keeping Components Pure</h2>
            <h1> Purity: Components as formulas</h1>
            <text> </text>
             <Demo/>
        </>
)

}



export  function Demo() {
    return (
        <>
            <FancyText title text="Get Inspired App" />
            <InspirationGenerator>
                <Copyright year={2004} />
            </InspirationGenerator>
        </>
    );
}