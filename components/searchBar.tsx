"use client"
import React, { useState } from 'react';

interface SearchBarProps {
    onCahnge: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onCahnge }) => {
    const [input, setInput] = useState("");

    const handleSearch = () => {
        if (input.trim()) {
            onCahnge(input.trim());
        }
    };

    return (
        <div>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="أدخل اسم المدينة"
            />
            <button onClick={handleSearch}>بحث</button>
        </div>
    );
};

export default SearchBar;
