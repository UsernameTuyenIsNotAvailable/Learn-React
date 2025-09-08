import { useState, useEffect } from "react";

export default  function  Ex5() {
    return (
        <>
            <>bai 5</>
            <ol>
                <li>
                    <h1>Familiar props</h1>
                </li>
            </ol>
            <Avatar
                person={{ name: "tuyen", imageId: "fdsd" }}
                size={100}
            />
            <Clock color="red" />
        </>
    );
}

interface AvatarProps {
    person: { name: string; imageId: string };
    size: number;
}

function Avatar({ person, size }: AvatarProps) {
    return (
        <img
            className="avatar"
            src={`https://i.imgur.com/${person.imageId}.jpg`}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

interface ClockProps {
    color: string;
}

function Clock({ color }: ClockProps) {
    const [time, setTime] = useState<string>(() =>
        new Date().toLocaleTimeString()
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return <h1 style={{ color }}>{time}</h1>;
}
