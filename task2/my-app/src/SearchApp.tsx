import {useState} from 'react';
import type {User} from './types';

const INITIAL_DATA: User[] = [
{ name: "Alice", email: "alice@mail.com", age: 25 },
{ name: "Bob", email: "bob@mail.com", age: 30 },
{ name: "Nuray", email: "nuray@mail.com", age: 20 },
{ name: "Aliya", email: "aliya@mail.com", age: 19 },
{ name: "Dias", email: "dias@mail.com", age: 21 },
];

const SearchApp = () => {
    const [users] = useState<User[]>(INITIAL_DATA);
    const [filteredUsers, setFilteredUsers] =
        useState<User[]>(INITIAL_DATA);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleSearch = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const term = event.target.value;

        setSearchTerm(term);

        const filtered = users.filter((user) =>
            user.name.toLowerCase().includes(
                term.toLowerCase()
            )
        );

        setFilteredUsers(filtered);
    };

    const handleClear = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
        setSearchTerm("");
        setFilteredUsers(users);
    };

    return (
        <div>
            <h2>User Search</h2>

            <input 
                type = "text"
                value = {searchTerm}
                onChange = {handleSearch}
                placeholder = "Search by name"
            />

            <button onClick = {handleClear}>
                Clear
            </button>

            {filteredUsers.length === 0 ? (
                <p>No result found</p>
            ) : (
                <ul>
                    {filteredUsers.map((user, index) => (
                        <li key = {index}>
                            {user.name} ({user.email})
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchApp;