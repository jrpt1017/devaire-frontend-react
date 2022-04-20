import React from 'react';
import PriceCard from './PriceCard';

const pricingDetails = [{
  title: 'STARTER',
  price: 7,
  userAccounts: 100,
  access: 1,
}, {
  title: 'PROFESSIONAL',
  price: 12,
  userAccounts: 1000,
  access: 2,
}, {
  title: 'BUSINESS',
  price: 19,
  userAccounts: 500,
  access: 3,
}, {
  title: 'ENTERPRISE',
  price: 29,
  userAccounts: 1000,
  access: 5,
}]

const PriceCardWrapper = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {pricingDetails.map((details) => {
        return (
          <React.Fragment key={details.access}>
            <PriceCard {...details} />
          </React.Fragment>
        )
      })}
    </div>
  )
};

export default PriceCardWrapper;