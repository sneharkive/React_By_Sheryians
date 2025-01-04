import axios from 'axios'
import { useEffect, useState } from 'react';
import Card from './components/Card';

function App() {
  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data);
  }

  useEffect(() => {  // will get data automatically
    getData()
  }, [])
  

  return (

      <div className=" p-20">

        {/* will get data after press the button "Get Data" */}

        {/* <button onClick={getData} className="bg-green-800 text-4xl rounded-2xl py-5 px-10 font-bold active:scale-110 mx-auto block">Get Data</button> */}


        <div className="p-10 mt-5 rounded-lg flex gap-10 flex-wrap">
          {data.map((elem, index) => {
            return <Card key={index} aName={elem.author} downUrl={elem.download_url}  />
          })}


        </div>
      </div>

  )
}

export default App
