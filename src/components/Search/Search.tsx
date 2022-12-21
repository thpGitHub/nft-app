import React, {ChangeEvent} from 'react'

type searchProp = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function Search({onChange}: searchProp) {
  return (
    <input
      type="text"
      className="input-search"
      onChange={onChange}
    />
  )
}

export default Search
