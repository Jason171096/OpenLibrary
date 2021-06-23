import axios from 'axios'
import { useState, useEffect } from 'react'
import request from 'request/request'

function App() {

  const [array, setArray] = useState([])

    const getServer = (nameTitle) => {
        if (nameTitle !== "") {
            axios.get(request.SEARCH.url + nameTitle)
                .then(requery => { setArray(requery) })
                .catch(e => { console.log(e) })
        }
    }

    useEffect(() => {
        arrayLength()
    }, [array])

    const arrayLength = () => {
        return (
            array.length !== 0 ? (<div>
                {array.data.items.map((data) => (
                    <div className="" key={data.id}>
                        <h3>{data.volumeInfo.title}</h3>
                        <p>{" " + data.volumeInfo.authors+ " "}<span>{data.volumeInfo.publishedDate}</span></p>
                        <img src={data.volumeInfo.imageLinks.thumbnail}/>
                    </div>))}
            </div>) : (<div>No hay nada que mostrar</div>)
        );
    }

  const [nameTitle, setNameTitle] = useState('')

  const updateNameTitle = (e) => setNameTitle(e.target.value)
  
  return (
    <div className="w-full h-screen">
            <div className="bg-header-image bg-no-repeat bg-center bg-cover w-full h-full flex items-center flex-col">
                <div className="relative w-full h-14 top-7 bg-opacity-75 bg-brown-brown font-body">
                    <h1 className="relative text-white text-center text-xl top-1">Book's Store</h1>
                    <h2 className="relative text-white text-center text-base">Bookstore and Publishing House</h2>
                    <div className="absolute bg-white w-7 h-1 top-7"></div>
                    <div className="absolute bg-white w-7 h-1 top-7 right-0"></div>
                </div>
                <div className="relative flex justify-center items-center w-10/12 h-8 bg-brown-brown  font-body top-10 rounded">
                    <h1 className="mx-2 text-white">Title:</h1>
                    <input className="w-9/12 focus:outline-none rounded" type="text" />
                    <button className="mx-2 text-white w-20 p-0.5 focus:outline-none bg-brown-white rounded-2xl text-sm" type="button">Search</button>
                </div>
                <div className="relative w-9/12 h-[450px] top-14">
                    <div className="">

                    </div>
                </div>
            </div>
        </div>
  );
}

export default App;
