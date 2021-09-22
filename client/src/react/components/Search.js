import React from 'react'

const Search = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        name="search"
        value={props.value}
        placeholder="Search Games"
        onChange={props.onChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Search