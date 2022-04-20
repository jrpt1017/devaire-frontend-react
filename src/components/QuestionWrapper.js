import React from 'react'
import Question from './Question'

const items = [`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum
molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae
nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at
quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas.`,
  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum
molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae
nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at
quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas.`,
]

const QuestionWrapper = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {items.map((question) => {
        console.log(question)
        return (
          <Question item={question} />
        )
      })}
    </div>
  )
}

export default QuestionWrapper
