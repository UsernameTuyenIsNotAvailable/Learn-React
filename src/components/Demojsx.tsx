

const today = new Date();

const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink',
    },
};

export default function Demojsx() {
    return (
        <>
            <h1>nlknl</h1>
            <img
                src="https://i.imgur.com/yXOvdOSs.jpg"
                alt="Hedy Lamarr"
                className="photo"
            />
            <>
                <img
                    src="https://i.imgur.com/yXOvdOSs.jpg"
                    alt="Hedy Lamarr"
                    className="photo"
                />
                <ul>
                    <li>Invent new traffic lights</li>
                    <li>Rehearse a movie scene</li>
                    <li>Improve the spectrum technology</li>
                    <Avatar/>
                    <TodoList/>
                    <TodoList1/>
                    <Click/>
                    <Avatar3
                        person3={{name: 'Lin Lanying', imageId: '1bX5QH6'}}
                        size1={100}
                     person1={{name: "tuyen", imageId : '312342' }}/>
                    <Avatar1 person1={{name: "tuyen", imageId : 'T213224'}} />
                    <h6>Subtitle</h6>
                </ul>
            </>
        </>
    );
}

export function Avatar() {
    return (
        <img
            className="avatar"
            src="https://i.imgur.com/1bX5QH6.jpg"
            alt="Lin Lanying"
            width={100}
            height={100}
        />
    );
}

function formatDate(date?: number | Date) {
    if (!date) return 'Unknown date';
    return new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(date);
}

export function TodoList() {
    return <h1>To Do List for {formatDate(today)}</h1>;
}

export function TodoList1() {
    return (
        <ul
            style={{
                backgroundColor: 'black',
                color: 'pink',
                fontFamily: 'sans-serif',
                backgroundSize: '13px',
                printColorAdjust: 'exact',
            }}
        >
            <li>Improve the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fuelled engine</li>
        </ul>
    );
}

export function Click() {
    return (
        <>
            {person.name}
            <div style={person.theme}>
                <h1>{person.name}'s Todos</h1>
            </div>
        </>
    );
}

interface Avatar1Props {
    person1: { imageId: string; name: string };
}

export function Avatar1({person1}: Avatar1Props) {
    return (
        <img
            className="avatar"
            src={`https://i.imgur.com/${person1.imageId}.jpg`}
            alt={person1.name}
            width={100}
            height={100}
        />
    );
}

interface Avatar3Props {
    person1: { name: string; imageId: string },
    size1: number,
    person3: { imageId: string; name: string }
}

export function Avatar3({person1, size1}: Avatar3Props) {
    return (
        <img
            className="avatar"

            alt={person1.name}
            width={size1}
            height={size1}
        />
    );
}
