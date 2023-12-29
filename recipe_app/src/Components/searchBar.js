import { useState } from "react";
import {Form,FormGroup,Label,Input} from "reactstrap";
import "../Assets/Styles/searchBar.scss"

export default function SearchBar(props){
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  
  const handleInputChange = (event) => {
    setQuery(event.target.value);
    handleSearch(event.target.value);
  };

  const handleSearch = (query) => {
    props.onSearch(query);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipe"
        value={query}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        className={isFocused ? 'searchBarFocused' : 'searchBar'} 
      />
      {/* <button onClick={handleSearch}>Search</button> */}
    </div>
  )
}

