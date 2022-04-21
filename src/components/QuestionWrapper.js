import React from 'react'
import Question from './Question'

const items = [`1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum
molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae
nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at
quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas.`,
  `2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum
molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae
nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at
quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas.`,
  `3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum
molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae
nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at
quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas.`,
  `4Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad odio ab quis architecto
recusandae doloremque incidunt! Eius, quidem, pariatur necessitatibus commodi aliquid
deleniti repudiandae accusantium tempora soluta vel nesciunt est quibusdam iure adipisci
aspernatur maiores saepe ea eaque quo harum reprehenderit similique nemo voluptate
ullam natus illum magnam alias nobis doloremque delectus ipsa dicta repellat maxime
dignissimos eveniet quae debitis ratione assumenda tempore officiis fugiat dolor. Saepe
iusto praesentium ullam aliquam impedit.`,
  `5Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad odio ab quis architecto
recusandae doloremque incidunt! Eius, quidem, pariatur necessitatibus commodi aliquid
deleniti repudiandae accusantium tempora soluta vel nesciunt est quibusdam iure adipisci
aspernatur maiores saepe ea eaque quo harum reprehenderit similique nemo voluptate
ullam natus illum magnam alias nobis doloremque delectus ipsa dicta repellat maxime
dignissimos eveniet quae debitis ratione assumenda tempore officiis fugiat dolor. Saepe
iusto praesentium ullam aliquam impedit.`
]

const QuestionWrapper = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div>
        {items.slice(0, 3).map((question) => {
          return (
            <Question item={question} />
          )
        })}
      </div>
      <div>
        {items.slice(3, 5).map((question) => {
          return (
            <Question item={question} />
          )
        })}
      </div>
    </div>
  )
}

export default QuestionWrapper
