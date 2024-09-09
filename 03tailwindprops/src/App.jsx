import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';

function App() {

  let newobj = {
    'name': 'mani',
    'age': 33
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind css</h1>
      <Card username="chaiaurcode" myobj={newobj} btnText="clickme!" />
      <Card username="manisha" btnText="clickme!" />

    </>
  )
}

export default App
