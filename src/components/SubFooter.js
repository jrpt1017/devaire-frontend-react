import React from 'react'

const SubFooter = () => {
  return (
    <div className="Sub-Footer">
      <p className="STARTERS-GUIDE-TO-CREATE-LANDING-PAGES">STARTER'S GUIDE TO CREATE LANDING PAGES</p>
      <p className="Building-a-Landing-Page-was-never-so-Easy-Interactive">Building a Landing Page was never so Easy & Interactive</p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <button className="btn-free-trial">START YOUR FREE TRIAL</button>
        -OR-
        <button className="btn-subscription">SIGN UP FOR A SUBSCRIPTION</button>
      </div>
    </div>
  )
}

export default SubFooter
