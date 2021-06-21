import { useState } from "react"
export const Search = (props) => {

const [nameTitle, setNameTitle] = useState('')

const updateNameTitle = e => setNameTitle(e.target.value)

const callback = () => {
    props.searchBookbyTitle(nameTitle)
    setNameTitle("")
}

    return (
        <div className="bg-gray-200 w-4/5 h-8 my-6 flex items-center justify-center rounded-2xl max-w-screen-md">
            <label className="mx-2 ">Search book by title:</label>
            <input className="mx-2 focus:outline-none w-2/5" type="text" onChange={updateNameTitle}/>
            <button className="mx-2 w-20 focus:outline-none rounded-2xl bg-brown-brown text-white" type="button" onClick={callback}>Search</button>
        </div>
    )
}
