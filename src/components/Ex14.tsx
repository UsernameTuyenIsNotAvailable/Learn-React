import { useState } from 'react';

export default function Ex14() {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('Hi!');

    if (isSent) {
        return <h1>Your message is on its way!</h1>
    }
    return (
        <h1>
            <h1>Rendering takes a snapshot in time
            </h1>

            <h1 > Rendering takes a snapshot in time</h1>
             <Counter></Counter>
            <Couter2></Couter2>
            <TrafficLight></TrafficLight>
            <From ></From>
            <form onSubmit={(e) => {
                e.preventDefault();
                setIsSent(true);
                sendMessage(message);
            }}>
            <textarea
                placeholder="Message"
                value={message}
                onChange={e => setMessage(e.target.value)}/>
                <button type="submit">Send</button>

            </form>
        </h1>
    );
}

function sendMessage(message: string) {
    console.log("Sending message:", message);
}
function  Counter (){
    const [number, setNumber] = useState(0);
    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number + 1);
                setNumber(number + 1);
                setNumber(number + 1);
            }}>+3</button>
        </>
    )
}
function  Couter2 (){
    const [number, setNumber] = useState(0);

    function handleClick() {
        // Cập nhật state
        setNumber(number + 1);

        // Alert snapshot (giá trị number tại render hiện tại)
        setTimeout(() => {
            alert("Snapshot value (cũ): " + number);
        }, 3000);

        // Alert state mới nhất sau 3s
        setTimeout(() => {
            // Dùng hàm updater để chắc chắn lấy giá trị mới
            setNumber(n => {
                alert("Newest value (mới): " + (n));
                return n;
            });
        }, 3000);
    }

    return (
        <div>
            <p>Number: {number}</p>
            <button className={"demo"} onClick={handleClick}>Tăng +1 (xem alert sau 3s)</button>
        </div>
    );
}
function TrafficLight() {
    const [walk, setWalk] = useState("Walk");

    function handleClick() {
        setWalk(walk === "Walk" ? "Stop" : "Walk");
        alert("Bạn vừa đổi trạng thái!");
    }

    return (
        <>
            <button onClick={handleClick}>
                Change to {walk === "Walk" ? "Stop" : "Walk"}
            </button>
            <h1
                style={{
                    color: walk === "Walk" ? "darkgreen" : "darkred",
                }}
            >
                {walk}
            </h1>
        </>
    );
}

function From (){
    const [to, setTo] = useState('Alice');
    const [message, setMessage] = useState('Hello');

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        setTimeout(() => {
            alert(`You said ${message} to ${to}`);
        }, 5000);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                To:{' '}
                <select
                    value={to}
                    onChange={e => setTo(e.target.value)}>
                    <option value="Alice">Alice</option>
                    <option value="Bob">Bob</option>
                </select>
            </label>
            <textarea
                placeholder="Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <button type="submit">Send</button>
        </form>
    );
}