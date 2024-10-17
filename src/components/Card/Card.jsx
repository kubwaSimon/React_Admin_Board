import React from 'react'
import { BiBuilding, BiLogoHtml5, BiLogoReact } from 'react-icons/bi'
import './Card.css'

const service =[
    {
        title: 'Web Development',
        icon: <BiLogoHtml5 />,
    },
    {
        title: 'React App',
        icon: <BiLogoReact />,
    },
    {
        title: 'UX & UI',
        icon: <BiBuilding />,
    },
    
];

const Card = () => {
  return (
    <div className='card-container'>
      {service.map((item) => (
        <div className="card">
        <div className='card-cover'>{item.icon}</div>
        <div className="card-title">
            <h2>{item.title}</h2>
        </div>
        </div>
      ))}
    </div>
  )
}

export default Card
