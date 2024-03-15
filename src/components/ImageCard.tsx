import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

interface ImageCardProps {
  imageUrl: string;
  buttonLabel: string;
};

function ImageCard({ imageUrl, buttonLabel }: ImageCardProps) {
  return (
    <Box sx={{ minWidth: 275, height: '100%', maxHeight: 300, display: 'flex', flexDirection: 'column'}}>
      <Card sx={{ backgroundColor: "#272727", color: 'white', height: "100%"}}>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt="Image description"
        />
        <CardActions>
          <Button size="small" color="secondary" variant="contained">
            {buttonLabel}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ImageCard;