import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Friends from './Friends'

const fetchFriends = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

function App() {

  const friendsPromise = fetchFriends();

  return (
    <>
      <h1>Vite + React</h1>
      <Suspense fallback={<h3>Friends are coming for treat</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
    </>
  )
}

export default App
