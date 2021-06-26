import axios from 'axios'
import Carousel from 'react-material-ui-carousel'
import { useState, useEffect } from 'react'

import request from './request/request'

function App() {

  const [arrayItems, setArrayItems] = useState([])
  const [itemsOnPairs, setItemsOnPairs] = useState([])

  const getServer = (nameTitle) => {
    if (nameTitle !== "") {
      axios.get(request.SEARCH.url + nameTitle)
        .then(requery => { setArrayItems(requery.data.items) })
        .catch(e => { console.log(e) })
    }
  }

  useEffect(() => {
    itemsOnPairsFunction()
  }, [arrayItems])

  const itemsOnPairsFunction = () => {
    arrayItems.length !== 0 ? setItemsOnPairs([...itemsOnPairs, arrayItems.splice(0, 1)]) :
      (<div className="w-full h-8 text-center text-white bg-brown-white rounded">
        <h3 className="mt-1">Sin resultados e busqueda</h3>
      </div>)
    console.log(itemsOnPairs)
  }

  useEffect(() => {
    returnCards()
  }, [itemsOnPairs])

  const returnCards = () => {
    return (
      <Carousel>
      {
        itemsOnPairs.map((data) => (
          <div key={data}>
            {data.map((d) => (
              <div className="flex w-full h-[200px] items-center justify-center text-center bg-brown-brown text-white rounded mb-[30px] text-sm" key={d.id}>
                <img className="rounded-sm m-[5px]" src={d.volumeInfo.imageLinks.thumbnail} />
                <div className="flex-col m-[5px]">
                  <h3>{d.volumeInfo.title}</h3>
                  <p>{d.volumeInfo.authors + " "}<span>{d.volumeInfo.publishedDate}</span></p>
                </div>
              </div>
            ))}
            </div>
        ))
      }
      </Carousel>
    )
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
          <input className="w-9/12 focus:outline-none rounded" type="text" onChange={updateNameTitle} />
          <button className="mx-2 text-white w-20 p-0.5 focus:outline-none bg-brown-white rounded-2xl text-sm" type="button" onClick={() => getServer(nameTitle)}>Search</button>
        </div>
        <div className="relative w-9/12 h-[450px] top-14 flex justify-center">
          {returnCards()}
        </div>
      </div>
    </div>
  );
}

export default App;
