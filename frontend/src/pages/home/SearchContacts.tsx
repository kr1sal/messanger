import './SearchContacts.css';
import searchiconPath from '../../assets/search.svg';
import { useState } from 'react';


function SearchContacts() {
    const [searchValue, setSearchValue] = useState<string>();

    const handleSearch = () => {
        alert(`searching for... ${searchValue}`);
    }

    return (
        <div className="search-contacts">
            <img className="search-contacts__icon"
                src={searchiconPath}
                alt="Search Icon"
                onClick={handleSearch} />

            <input className="search-contacts__input"
                onChange={(e) => setSearchValue(e.target.value)}
                defaultValue={searchValue} />
        </div>)
}

export default SearchContacts;