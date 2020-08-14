import React from 'react'
import SVGAtomik from '../public/images/atomik.svg'

export const Work = (props) => {
  const { workRef } = props

  return (
    <section ref={workRef} className="row">
      <div className="col-md-12 pr-0 pl-0">
        <a href="https://github.com/atomiklabs/defuma" target="_blank" rel="noopener noreferrer">
          <div className="work-card work-card--atomik">
            <SVGAtomik className="work-card-icon" />
            <h3 className="work-card-title">Decentralised Full Market</h3>
          </div>
        </a>
      </div>
    </section>
  )
}
