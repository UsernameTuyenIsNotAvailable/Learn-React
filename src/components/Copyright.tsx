interface Year {
    year : number
}
export function Copyright({year}: Year) {
    return <p className='small'>©️ {year}</p>;
}
