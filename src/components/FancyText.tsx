interface FancyTextProp{
    title : boolean;
    text : string

}

export default function FancyText({title, text} : FancyTextProp) {
    return title
        ? <h1 className='fancy title'>{text}</h1>
        : <h3 className='fancy cursive'>{text}</h3>
}