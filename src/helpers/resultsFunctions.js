/**
 * Created by Superstar on 14.01.2018.
 */
import React from 'react'
import data from '../data/data.json'
import _ from 'lodash'

const renderBladesWithWidths = params => {
  const filteredBlades = _.filter(data, {cutting: [{sort: params.sort, type: params.type}]})
  const parse = parseInt(params.width)
  const filteredBladesWithWidths = filteredBlades.filter(item => item.widths.indexOf(parse) > -1)
  return filteredBladesWithWidths.map(item => {
    return (
        <div key={item.id}>
          <h1>Linia {item.line}:</h1>
          <img src={item.img} alt={item.title} />
          <h2>{item.name}</h2>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <a href={item.catalogue}>Pobierz katalog</a>
        </div>
    )
  })
}

const renderBlades = params => {
  const filteredBlades = _.filter(data, {cutting: [{sort: params.sort, type: params.type}]})
  return filteredBlades.map(item => {
    return (
        <div key={item.id}>
          <h1>{item.line}</h1>
          <img src={item.img} alt={item.title} />
          <h2>{item.name}</h2>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <a href={item.catalogue}>Pobierz katalog</a>
        </div>
    )
  })
}

export { renderBladesWithWidths, renderBlades }