import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Content from './components/content/content'
import Profile from './components/Profile/Profile'
import './App.css'


const App = () => {
  return (
    <div className='dashboard'>
      <Sidebar/>
      <div className="dashboard-info">
        <Content />
        <Profile />
      </div>
    </div>
  )
}

export default App
