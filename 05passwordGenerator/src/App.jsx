// import { useCallback, useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [length, setLength] = useState(8)
//   const [numberAllowed, setnumberAllowed] = useState(false)
//   const [charAllowed, setcharAllowed] = useState(false)
//   const [password, setPassword] = useState("")



//   useCallback(() => {
//     let pass = ""
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//     if (numberAllowed) str += "0123456789"
//     if (charAllowed) str += "!@#$%^&*()-_=+\|[]{};:/?.>"
//     for (let i = 1; i < length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1)
//       pass = str.charAt(char)
//     }
//     setPassword(pass)
//   }, [setPassword, length, numberAllowed, charAllowed])



//   return (
//     <>


//       <form className="max-w-md mx-auto mt-12">
//         <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
//         <div className="relative">
//           <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//             <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
//             </svg>
//           </div>
//           <input type="text" id="default-search" value={password} className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." readOnly required />

//         </div>

//         <div className="flex items-center  space-x-4 mb-6">
//           <div className="flex-1">
//             <label htmlFor="range" className="block text-sm font-medium text-gray-700">Select Value:</label>
//             <input
//               type="range"
//               id="range"
//               min="8"
//               max="100"
//               step="1"
//               value={length}
//               className="w-full mt-2"
//               onChange={(e) => setLength(parseInt(e.target.value))}
//             />
//             <p className="mt-2 text-gray-600">{length}</p>
//           </div>
//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               defaultChecked={charAllowed}
//               className="mr-2"
//               onChange={(e) => { setcharAllowed((prev) => !prev) }}
//             />
//             <label htmlFor="includeSpecialChars" className="text-sm font-medium text-gray-700">Include Special Characters</label>
//           </div>
//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               defaultChecked={numberAllowed}
//               className="mr-2"
//               onChange={() => { setnumberAllowed(prev => !prev) }}
//             />
//             <label htmlFor="includenumbers" className="text-sm font-medium text-gray-700">Include Numbers</label>
//           </div>
//         </div>
//       </form>


//     </>
//   )
// }

// export default App



import { useCallback, useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()-_=+\\|[]{};:/?.>';

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyPasswordtoclipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)

  }, [password])

  return (
    <>

      <form className="max-w-md mx-auto mt-12">
        <h1 className='mb-4 text-center text-blue-300 text-2xl'>Password Generator</h1>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input
            type="text"
            id="default-search"
            value={password}
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Generated Password"
            readOnly
            required
            ref={passwordRef}
          />

        </div>
        <button type="button" className="mt-4 p-2 bg-blue-500 text-white rounded" onClick={copyPasswordtoclipboard}>copy</button>


        <div className="flex items-center space-x-2 mb-6">
          <div className="flex-1">
            <label htmlFor="range" className="block text-sm font-medium text-gray-700">Select Length:</label>
            <input
              type="range"
              id="range"
              min="8"
              max="100"
              step="1"
              value={length}
              className="w-full mt-2"
              onChange={(e) => setLength(parseInt(e.target.value))}
            />
            <p className="mt-2 text-gray-600">{length}</p>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="includeSpecialChars"
              checked={charAllowed}
              onChange={(e) => setCharAllowed(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="includeSpecialChars" className="text-sm font-medium text-gray-700">Include Special Characters</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="includeNumbers"
              checked={numberAllowed}
              onChange={(e) => setNumberAllowed(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="includeNumbers" className="text-sm font-medium text-gray-700">Include Numbers</label>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
