import { Box, Typography } from '@mui/material';
import '../App.css'
import FeaturedItem from './FeaturedItem';
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

const MainContent = () => {
  return (
    <div
      style={{
        marginRight: '232px',
        marginLeft: '232px'
      }}
    >
      <p className="FEATURES-OVERVIEW">
        FEATURES OVERVIEW
      </p>
      <p class="Some-of-the-Features-that-are-gonna-blow-your-mind-off">
        Some of the Features that are gonna blow your mind off
      </p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
      </div>

      {/* New Section */}
      <p class="Smart-Pricing">
        Smart Pricing
      </p>
      <p class="Flexible-Easy-Pricing-for-wide-Audience-Groups">
        Flexible & Easy Pricing for wide Audience Groups
      </p>
      {/* Price Cards */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {pricingDetails.map((details) => {
          return (
            <PriceCard {...details} />
          )
        })}
      </div>
    </div>
  )
};

export default MainContent;