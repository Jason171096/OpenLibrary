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
            : <div className="w-full h-8 text-center text-white bg-brown-white rounded">
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
          {arrayLength()}
        </div>
      </div>
    </div>
  );
}

export default App;
