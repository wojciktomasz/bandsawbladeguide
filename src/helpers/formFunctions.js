/**
 * Created by Superstar on 14.01.2018.
 */
import React from 'react'
import _ from 'lodash'
import { Field } from 'redux-form'


const renderProducer = (data) => {
  return _.map(_.uniqBy(data, 'producer'), post => {
    return (
        <label key={post.id}><Field name='producer' component='input' type='radio' value={post.producer}/>{post.producer}</label>
    )
  })
}

const renderWidth = data => {
  const mappedWidths = _.map(data, 'widths')
  const mergedArray = _.flatten(mappedWidths)
  const uniqueValueArray = _.uniq(mergedArray)
  return uniqueValueArray.map(item => {
    return (
        <label key={item}><Field name='width' component='input' type='radio' value={item.toString()}/>{item}</label>
    )
  })
}

const renderSort = (data, params) => {
  const filtered = _.filter(data, ['application', params])
  const mappedWidths = _.map(filtered, 'cutting')
  const mergedArray = _.flatten(mappedWidths)
  const mappedSort = mergedArray.map(item => item.sort)
  const mappedSortUnique = _.uniq(mappedSort)
  return mappedSortUnique.map(item => {
    return (
        <label key={item}><Field name='sort' component='input' type='radio' value={item}/>{item}</label>
    )
  })
}

const renderType = (data, params) => {
  const filtered = _.filter(data, ['application', params])
  const mappedWidths = _.map(filtered, 'cutting')
  const mergedArray = _.flatten(mappedWidths)
  const mappedSort = mergedArray.map(item => item.type)
  const mappedSortUnique = _.uniq(mappedSort)
  return mappedSortUnique.map(item => {
    return (
        <label key={item}><Field name='type' component='input' type='radio' value={item}/>{item}</label>
    )
  })
}

export { renderProducer, renderWidth, renderSort, renderType }