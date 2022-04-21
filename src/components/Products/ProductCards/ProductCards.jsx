import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import './style.css';

const ProductCard = ({ img, brand, title }) => {
  return (
    <Card className="card_container">
      <CardActionArea>
        <CardMedia component="img" src={img} alt={title} />
        <CardContent>
          <Typography variant="caption">{brand}</Typography>
          <Typography variant="body1">{title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
