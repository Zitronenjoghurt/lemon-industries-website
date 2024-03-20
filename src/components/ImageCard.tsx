import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

interface ImageCardProps {
  imageUrl: string;
  height: number;
  buttonLabel: string;
  buttonUrl: string;
};

function ImageCard({ imageUrl, height, buttonLabel, buttonUrl }: ImageCardProps) {
  const isExternal = !buttonUrl.startsWith('/');

  const renderButton = () => {
    if (isExternal) {
      return (
        <Button size="small" color="warning" variant="contained" component="a" href={buttonUrl} target="_blank" rel="noopener noreferrer">
          {buttonLabel}
        </Button>
      );
    } else {
      return (
        <Button size="small" color="warning" variant="contained" component={Link} to={buttonUrl}>
          {buttonLabel}
        </Button>
      );
    }
  };

  return (
    <Box sx={{ minWidth: 275, height: '100%', maxHeight: 300, display: 'flex', flexDirection: 'column' }}>
      <Card sx={{ backgroundColor: "#272727", color: 'white', height: "100%" }}>
        <CardMedia
          component="img"
          height={height}
          image={imageUrl}
          alt="Image description"
        />
        <CardActions sx={{ justifyContent: 'center', p: 0.75 }}>
          {renderButton()}
        </CardActions>
      </Card>
    </Box>
  );
};

export default ImageCard;