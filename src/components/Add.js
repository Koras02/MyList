import React, { useState } from 'react'
import { ResultCard } from './ResultCard'


export const Add = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const onChange = (e) =>{
        e.preventDefault();

        setQuery(e.target.value);

        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=7db8b1ffbba88aaa67068565d84fe99f&language=ko&page=1&include_adult=true&query=${e.target.value}`
         )
        .then((res) => res.json())
        .then((data) => {
            if (!data.erros) {
                setResults(data.results);
            } else {
                setResults([]);
            }
        });
    }

    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input 
                          type="text"
                          placeholder="검색할 영화/드라마를 입력해주세요"
                          value={query}
                          onChange={onChange}
                        />
                    </div>

                    {results.length > 0 && (
                        <ul className="results">
                            {results.map((movie) => (
                                <li key={movie.id}>
                                    <ResultCard movie={movie} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
};

