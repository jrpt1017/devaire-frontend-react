import { Box, Typography } from '@mui/material';
import '../App.css'
import FeaturedItem from './FeaturedItem';

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
    </div>
  )
};

export default MainContent;