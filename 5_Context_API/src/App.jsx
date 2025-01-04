import { useContext } from 'react'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import { DataContext } from './context/UserContext';

function App() {

  const data = useContext(DataContext)
  console.log(data);

  return (
    <div className='text-3xl'>
      <p>App is here!!! :  {data} </p>
      <Header/>
      <Section />
      <Footer name={data}/>

    </div>
  )
}

export default App
