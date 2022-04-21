import React from 'react'

const Question = ({ item }) => {
  return (
    <div>
      <p className="Question-Title">Q: How do i become an author?</p>
      <p className="Question">{item}</p>
    </div>
  )
}

export default Question
