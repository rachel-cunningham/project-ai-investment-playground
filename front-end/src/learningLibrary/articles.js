import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia'; 
function Articles(){

return(
  <Box>
    <Grid container direction="row" spacing={1} justifyContent="space-evenly">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1mzPoT.img?w=800&h=435&q=60&m=2&f=jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          10 Timeless Investing Principles
        </Typography>
        <Typography variant="body2" color="text.secondary">
        10 Timeless Investing Principles Used by Legendary Investors to Build Massive Wealth
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://www.msn.com/en-us/money/savingandinvesting/10-timeless-investing-principles-used-by-legendary-investors-to-build-massive-wealth/ss-BB1mzIxi#image=1">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia 
        sx={{ height: 140 }}
        image="https://www.investopedia.com/thmb/yXSY_G0ApFAmll4FUu457jAx-hI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/riskreturntradeoff_definition_final_0830-fb7089cafb0f4f578e798d49c41dbe99.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Risk-Return Tradeoff: How the Investment Principle Works
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Risk-Return Tradeoff: How the Investment Principle Works
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://www.investopedia.com/terms/r/riskreturntradeoff.asp">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Risk-Return Tradeoff: How the Investment Principle Works
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Risk-Return Tradeoff: How the Investment Principle Works
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://www.investopedia.com/terms/r/riskreturntradeoff.asp">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          10 Timeless Investing Principles
        </Typography>
        <Typography variant="body2" color="text.secondary">
        10 Timeless Investing Principles Used by Legendary Investors to Build Massive Wealth
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://www.msn.com/en-us/money/savingandinvesting/10-timeless-investing-principles-used-by-legendary-investors-to-build-massive-wealth/ss-BB1mzIxi#image=1">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
  </Box>

)
}

export default Articles; 