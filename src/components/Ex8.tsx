import { Avatar } from "./Demojsx.tsx";
import {useEffect, useState} from "react";


let guest = 0;

interface ClockProps {
    time: Date;
}

// ❌ Bad (impure): thay đổi biến global `guest`
function Cup() {
    guest = guest + 1;
    return <h2>Tea cup for guest #{guest}</h2>;
}

// ✅ Good (pure): chỉ dùng props
function PureCup({ guest }: { guest: number }) {
    return <h2>Tea cup for guest #{guest}</h2>;
}

export default function Ex8() {
    // Tạo danh sách Cup theo props (pure)
    const cups = [];
    for (let i = 1; i <= 12; i++) {
        cups.push(<PureCup key={i} guest={i} />);
    }

    return (
        <>
            <h2>Keeping Components Pure</h2>
            <h1>Purity: Components as formulas</h1>

            <p>Ex function pure:</p>
            <p>{multiply(3, 5)}</p>

            {/* Impure: mỗi lần render guest sẽ tăng */}
            <Cup />
            <Cup />
            <Cup />

            {/* Pure: mỗi lần render giống nhau */}
            <PureCup guest={1} />
            <PureCup guest={2} />
            <PureCup guest={3} />

            <Profile />
            <Clock time={new Date()} />

            <p>Ex function not pure:</p>
            <p>{increase()}</p>

            <section>{add(2, 4)}</section>

            <Recipe drinkers={2} />

            <h3>Generated Cups:</h3>
            {cups}
        </>
    );
}

let counter = 0;
function increase() {
    counter++; // ❌ impure vì thay đổi biến bên ngoài
    return counter;
}

function multiply(a: number, b: number) {
    return a * b; // ✅ pure
}

function add(a: number, b: number) {
    return a + b; // ✅ pure
}

interface Recipeprop {
    drinkers: number;
}
function Recipe({ drinkers }: Recipeprop) {
    return (
        <ol>
            <li>Boil {drinkers} cups of water.</li>
            <li>
                Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.
            </li>
            <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
        </ol>
    );
}
interface ClockProps {
    initialTime?: Date; // props optional
}
export function Clock({ initialTime = new Date() }: ClockProps) {
    const [time, setTime] = useState<Date>(initialTime);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date()); // cập nhật mỗi giây
        }, 1000);

        return () => clearInterval(timer); // cleanup khi unmount
    }, []);

    const hours = time.getHours();
    const className = hours >= 0 && hours <= 6 ? "night" : "day";

    return <h1 className={className}>{time.toLocaleTimeString()}</h1>;
}
// ==== Profile và Header ====
function Header({ name }: { name: string }) {
    return <h1>{name}</h1>;
}

export function Profile() {
    const person = { name: "Nguyen Van A" }; // ✅ fix currentPerson undefined
    return (
        <>
            <Header name={person.name} />
            <Avatar />
        </>
    );
}
