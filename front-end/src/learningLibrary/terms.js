import React from "react";
import {Box, Card, CardActions, Button, CardMedia} from '@mui/material/';
import AuthHeader from "../components/AuthHeader";
import { useParams } from "react-router-dom";


function Terms(){
    const { userId } = useParams();

    return(
    <Box>
        <AuthHeader userId={userId} />
        <Card sx={{ maxWidth: 5000 }}>
        <CardMedia
          sx={{ height: 400 }}
          image= "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2RpY3Rpb25hcnkuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9LCJ0b0Zvcm1hdCI6ImF2aWYifX0="
        />
        <CardActions>
          <Button size="large" variant="contained" href="https://www.investopedia.com/financial-term-dictionary-4769738">Glossary of Investment Terms</Button>
        </CardActions>
        </Card>
    </Box>
    )
}

export default Terms; 