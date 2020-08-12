import React from 'react'

export const Footer = (props) => {
  const { hireRef } = props

  return (
    <footer ref={hireRef} className="footer">
      <p>© Atomik Labs 2020</p>
      <a className="footer-code" href="https://github.com/atomiklabs/atomiklabs.io" target="_blank" rel="noopener noreferrer">source code</a>
    </footer>
  )
}
