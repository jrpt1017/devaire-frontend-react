import { Box, Typography } from '@mui/material';
import '../App.css'
import FeaturedItem from './FeaturedItem';
import PriceCardWrapper from './PriceCardWrapper';
import QuestionWrapper from './QuestionWrapper';

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
      <p className="Some-of-the-Features-that-are-gonna-blow-your-mind-off">
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
      <p className="Smart-Pricing">
        Smart Pricing
      </p>
      <p className="Flexible-Easy-Pricing-for-wide-Audience-Groups">
        Flexible & Easy Pricing for wide Audience Groups
      </p>
      <PriceCardWrapper />

      <p className="Smart-Pricing">
        Smart Pricing
      </p>
      <p className="Flexible-Easy-Pricing-for-wide-Audience-Groups">
        Flexible & Easy Pricing for wide Audience Groups
      </p>

      <QuestionWrapper />
    </div>
  )
};

export default MainContent;