import React from 'react'
import './Developers.css'
import Image1 from '../../assets/images.jpeg'

const developers = [
  {
    image: Image1,
    name: 'Eng. Travis Collin',
    duration: '5 ',
    salary: ' 50,000'

  },
  {
    image: Image1,
    name: 'Eng. Simon Kubwa',
    duration: '8 ',
    salary: ' 70,000'

  },
  {
    image: Image1,
    name: 'Eng. Jared Collin',
    duration: '6.5 ',
    salary: ' 50,000'

  },
  {
    image: Image1,
    name: 'Dev. Jolly Simms',
    duration: '5.5 ',
    salary: '50,000'

  },
  {
    image: Image1,
    name: 'Eng. Walter Collin',
    duration: '6.5 ',
    salary: ' 50,000'

  },
];

const Developers = () => {
  return (
    <div className='dev-list'>
      <div className="list-header">
        <h2>TEAM MEMBERS</h2>
        <select>
          <option value="react">React Developer</option>
          <option value="html">HTML/CSS Developer</option>
          <option value="ui">UI & UX Developer</option>
        </select>
      </div>
      <div className="list-container">
        {developers.map((developer) => (
          <div className="list">
            <div className="dev-detail">
            <img src={developer.image} alt={developer.name} />
            <h2>{developer.name}</h2>
          </div>
          <span>{developer.duration}Years Experience</span>
          <span>Ksh{developer.salary}</span>
          <span className='dev-todo'>:</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Developers
