import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const LinksContainerRef = useRef(null);
  const LinksRef = useRef(null);

  useEffect(() => {
    const linksHeight = LinksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      LinksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      LinksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={LinksContainerRef}>
          <ul className='links' ref={LinksRef}>
            {
              links.map(({ id, url, text }) => {
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <ul className='social-icons'>
          {
            social.map(({ id, url, icon }) => {
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
