import React from 'react'
import SVGDefuma from '../public/images/defuma.svg'
import SVGJackBlock from '../public/images/jackblock.svg'

export const Work = (props) => {
  const { workRef } = props

  return (
    <section ref={workRef} className="row">
      <div className="col-md-6 pr-0 pl-0">
        <a href="https://www.jackblock.network/" target="_blank" rel="noopener noreferrer">
          <div className="work-card work-card--jackblock">
            <SVGJackBlock className="work-card-icon" />
            <h3 className="work-card-title">Jack Block</h3>
          </div>
        </a>
      </div>

      <div className="col-md-6 pr-0 pl-0">
        <a href="https://github.com/atomiklabs/defuma" target="_blank" rel="noopener noreferrer">
          <div className="work-card work-card--defuma">
            <SVGDefuma className="work-card-icon" />
            <h3 className="work-card-title">Decentralised Full Market</h3>
          </div>
        </a>
      </div>
    </section>
  )
}
