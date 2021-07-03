import axios from 'axios'
import { useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import { Item } from './components/Item'

import request from './request/request'

function App() {

  const [array, setArray] = useState([])
  const getServer = (nameTitle) => {
    if (nameTitle !== "") {
      axios.get(request.SEARCH.url + nameTitle)
        .then(requery => {
          const result = requery.data.items.reduce((result, value, index, sourceArray) => index % 2 === 0 ? [...result, sourceArray.slice(index, index + 2)] : result, []);
          console.log(requery.data.items)
          setArray(result);
        })
        .catch(e => { console.log(e) })
    }
  }

  const arrayLength = () => {
    return (
      <>
        {
          array.length !== 0
            ? <Carousel>
              {
                array.map(
                  (data) => (
                    <div key={data[0].id}>
                      <Item data={data[0]} />
                      <Item data={data[1]} />
                    </div>
                  )
                )
              }
              </Carousel>
            : <div className="w-full h-8 text-center text-white bg-brown-white rounded max-w-card">
                <h3 className="mt-1">Sin resultados de busqueda</h3>
              </div>
        }
      </>
    );
  }
  const [nameTitle, setNameTitle] = useState('')

  const updateNameTitle = (e) => setNameTitle(e.target.value)

  return (
    <div className="w-full h-screen">
      <div className="bg-header-image bg-no-repeat bg-center bg-cover w-full h-full flex items-center flex-col">
        <div className="relative w-full h-14 top-7 bg-opacity-75 bg-brown-brown font-body md:h-16">
          <h1 className="relative text-white text-center text-xl top-1 md:text-3xl">Book's Store</h1>
          <h2 className="relative text-white text-center text-base md:text-xl">Bookstore and Publishing House</h2>
          <div className="absolute bg-white w-7 h-1 top-7 md:top-8"></div>
          <div className="absolute bg-white w-7 h-1 top-7 right-0 md:top-8"></div>
        </div>
        <div className="relative flex justify-center items-center w-10/12 h-8 bg-brown-brown font-body top-10 rounded max-w-md md:h-10 ">
          <h1 className="mx-2 text-white md:text-2xl">Title:</h1>
          <input className="w-9/12 focus:outline-none rounded md:h-8 md:text-2xl" type="text" onChange={updateNameTitle} />
          <button className="mx-2 text-white w-20 p-0.5 focus:outline-none bg-brown-white rounded-2xl text-sm md:text-xl md:w-24" type="button" onClick={() => getServer(nameTitle)}>Search</button>
        </div>
        <div className="relative w-9/12 h-[450px] top-14 flex justify-center">
          {arrayLength()}
        </div>
      </div>
    </div>
  );
}

export default App;
