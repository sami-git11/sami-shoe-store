import { Button, Grid, Typography } from '@mui/material';
import './style.css';
import afterpay from '../../images/afterpay.svg';

import data from '../../components/Products/data';
import { Link, useParams } from 'react-router-dom';

const SingleProduct = () => {
  const sizes = [4, 6, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 13, 14];

  const { personId } = useParams();

  const productId = personId;

  let product = data.filter((i) => {
    return productId === i.slug;
  });

  product = product[0];

  console.log(product);

  return (
    <Grid container spacing={2} className="single_product">
      <Grid item xs={12}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Typography variant="body1">Back to Home</Typography>
        </Link>
      </Grid>
      <Grid item md={6} xs={12} className="product_details">
        <img src={product.img} alt="no" width="100%" />
      </Grid>
      <Grid item md={6} xs={12} className="product_details" style={{}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="caption">{product.brand}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">{product.title}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2">SELECT US MENU</Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            {sizes.map((i, index) => (
              <Button
                variant="outlined"
                size="large"
                key={index}
                className="menu_btn"
              >
                {i}
              </Button>
            ))}
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body1">Buy New</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Buy Used</Typography>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="error" fullWidth>
              $300+
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" fullWidth>
              OUT OF STOCK
            </Button>
          </Grid>
          <Typography
            variant="caption"
            marginTop="10px"
            marginLeft="18px"
            style={{ display: 'flex' }}
          >
            Or 4 interest-free payments by.{' '}
            <img src={afterpay} width="80px" style={{ marginLeft: '5px' }} />
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SingleProduct;
