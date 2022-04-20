import { Box, Typography, Button } from '@mui/material';
import '../App.css'

const PriceCard = (props) => {
  const { title, price, userAccounts, access } = props;
  return (
    <div className="Rounded-Rectangle" style={{ position: 'relative' }}>
      <div
        style={{
          borderBottom: 'solid 1px rgba(0, 0, 0, 0.09)',
        }}
      >
        <p className="Price-Title">{title}</p>
      </div>
      <div className="Price-Card-Details">
        <p>
          <span>$</span>
          <span>{price}</span>
          <span>/mo</span>
        </p>
        <p>Full Access</p>
        <p>Source Files</p>
        <p>{userAccounts} User accounts</p>
        <p>{access} year access</p>
        <p>Phone & Email Supports</p>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          padding: '14px 24px 14px 20px',
          borderTop: 'solid 1px rgba(0, 0, 0, 0.09)',
        }}
      >
        <button className="Price-Button"><span className="Price-Button-Title">Sign Up</span></button>
      </div>
    </div>
  )
};

export default PriceCard;