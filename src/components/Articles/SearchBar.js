import React, {useRef} from 'react'

const SearchBar = (props) => {
    const inputEl = useRef("");
   
    const getSearchTerm = () => {
       props.searchKeyword(inputEl.current.value)
    }

    return (
        <div className="search-bar-section">
        <div className="search-bar-container">
          <input 
            value = {props.term} 
            onChange = {getSearchTerm}
            className='search-bar font-roboto' 
            placeholder="Search..."
            ref = {inputEl}>

            </input>
        </div>
        </div>
    )
}

export default SearchBar
