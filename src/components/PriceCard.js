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
      <div>
        <p>Full Access</p>
        <p>Source Files</p>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          borderTop: 'solid 1px rgba(0, 0, 0, 0.09)',
        }}
      >
        <Button variant="contained" fullWidth>Test</Button>
      </div>
    </div>
  )
};

export default PriceCard;