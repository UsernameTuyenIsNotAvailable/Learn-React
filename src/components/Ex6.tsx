import React, { useState } from 'react';

interface ItemProps {
    name: string;
    isPacked: boolean;
}
export function MyInput() {
    const [value, setValue] = useState('');

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
    }

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="Nhập gì đó..."
            />
            <p>Giá trị nhập: {value}+ <Item isPacked={false} name={"type"}/> </p>
        </div>
    );
}
function Item({ name, isPacked }: ItemProps) {

    if (isPacked) {
        return name ;
    }
    else if (name )
        return <> it very nice</>
    return <li className="item">{name}</li>;
}

export function PackingList() {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item isPacked={true } name="Space suit" />
                <Item isPacked={true} name="Helmet with a golden leaf" />
                <Item isPacked={true} name="Photo of Tam" />
            </ul>
        </section>
    );
}
interface ValidatedInputProps {
    label: string;
    type: string;             // kiểu dữ liệu: text, email, number...
    minLength: number;        // độ dài tối thiểu
    maxLength: number;        // độ dài tối đa
    required: boolean;        // bắt buộc nhập hay không
}

export function ValidatedInput({
                                   label,
                                   type = "text",
                                   minLength = 0,
                                   maxLength = 1000,
                                   required = false
                               }: ValidatedInputProps) {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    function validateInput(val: string) {
        if (required && val.trim() === "") {
            setError("Trường này là bắt buộc!");
        } else if (val.length < minLength) {
            setError(`Cần ít nhất ${minLength} ký tự!`);
        } else if (val.length > maxLength) {
            setError(`Không vượt quá ${maxLength} ký tự!`);
        } else if (type === "email" && !/\S+@\S+\.\S+/.test(val)) {
            setError("Email không hợp lệ!");
        } else {
            setError("");
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const val = e.target.value;
        setValue(val);
        validateInput(val);
    }

    return (
        <div style={{ marginBottom: '1rem' }}>
            <label>{label}</label><br />
            <input
                type={type}
                value={value}
                onChange={handleChange}
                placeholder={`Nhập ${label.toLowerCase()}`}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default  function  Ex6() {
    return (
        <>
            <h1>Condition Rendering</h1>
            <PackingList />
            <MyInput/>
            <ValidatedInput
                label="Tên đăng nhập"
                required={true}
                minLength={2}
                maxLength={100}
                type="text"
            />
        </>
    );
}
