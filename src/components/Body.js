import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Search } from './Search'
import request from '../request/request'

export const Body = () => {

    const [array, setArray] = useState([])

    const getServer = (nameTitle) => {
        axios.get(request.SEARCH.url + nameTitle)
            .then(requery => { console.log(requery.data)/*resquest.map((res) => setArray(res))*/ })
            .catch(e => { console.log(e) })
    }



    return (
        <div className="w-full h-screen bg-gray-500 flex flex-col items-center">
            <Search searchBookbyTitle={getServer} />
        </div>
    )
}

// export async function getServer() {
//     // axios.get(request.URL.url)
//     //         .then(res => { console.log(res.data) })
//     //         .catch(e => {console.log(e)})
// }
