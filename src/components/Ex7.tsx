

const people = [
    { id: 0, name: 'Creola Katherine Johnson', profession: 'mathematician' },
    { id: 1, name: 'Mario José Molina-Pasquel Henríquez', profession: 'chemist' },
    { id: 2, name: 'Mohammad Abdus Salam', profession: 'physicist' },
    { id: 3, name: 'Percy Lavon Julian', profession: 'chemist' },
    { id: 4, name: 'Subrahmanyan Chandrasekhar', profession: 'astrophysicist' }
];

// Lọc những người có profession là "chemist"
const chemists = people.filter(person => person.profession === 'chemist');

// Tạo danh sách các phần tử JSX từ chemists
const listItems = chemists.map(person =>
    <li key={person.id}>
        <img

            alt={person.name}
        />
        <p>
            <b>{person.name}:</b> {' ' + person.profession}
        </p>
    </li>
);
export default  function  Ex7() {
    return (
        <ul>{listItems}</ul>
    );
}
