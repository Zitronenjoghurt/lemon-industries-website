import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

interface CardProps {
    title: string;
    description: string;
    buttonLabel: string;
    buttonUrl: string;
    imageUrl: string;
    imageAlt: string;
    cardWidth: number;
    imageHeight: number;
};

export default function MediaCard({ title, description, buttonLabel, buttonUrl, imageUrl, imageAlt, cardWidth, imageHeight }: CardProps) {
    const isExternal = !buttonUrl.startsWith('/');

    const renderButton = () => {
        if (isExternal) {
            return (
                <Button size="small" component="a" href={buttonUrl} target="_blank" rel="noopener noreferrer">
                    {buttonLabel}
                </Button>
            );
        } else {
            return (
                <Button size="small" component={Link} to={buttonUrl}>
                    {buttonLabel}
                </Button>
            );
        }
    };

    return (
        <Card sx={{ maxWidth: cardWidth }}>
            <CardMedia
                sx={{ height: imageHeight }}
                image={imageUrl}
                title={imageAlt}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                {renderButton()}
                <Button size="small">Read More</Button>
            </CardActions>
        </Card>
    );
}