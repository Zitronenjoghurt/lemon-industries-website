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
    imageUrl: string;
    imageAlt: string;
    imageHeight: number;
    button1Label: string;
    button1Url: string;
    button2Label: string;
    button2Url: string;
    cardWidth: number;
};

export default function MediaCard({ title, description, imageUrl, imageAlt, imageHeight, button1Label, button1Url, button2Label, button2Url, cardWidth }: CardProps) {
    const renderButton = (buttonLabel: string, buttonUrl: string) => {
        const isExternal = !buttonUrl.startsWith('/');
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
        <Card sx={{ display: 'flex', flexDirection: 'column', maxWidth: cardWidth, height: '100%' }}>
            <CardMedia
                sx={{ height: imageHeight }}
                image={imageUrl}
                title={imageAlt}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                {renderButton(button1Label, button1Url)}
                {renderButton(button2Label, button2Url)}
            </CardActions>
        </Card>
    );
}