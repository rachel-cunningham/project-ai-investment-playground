import React from "react";
import {Box, ImageList, ImageListItem,ImageListItemBar, ListSubheader} from '@mui/material/';
import AuthHeader from "../components/AuthHeader";
import { useParams } from "react-router-dom";
import "./articles.css";


function Articles(){
  const { userId } = useParams();
  
  return (
    <Box>
      <AuthHeader userId={userId} />
      <ImageList sx={{ width: 350, height: 500 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Explore Investment Strategies, Analysis, Trends</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <a key={item.img} href={item.link} target="_blank" rel="noopener noreferrer"> 
          <ImageListItem className="image-list-item">
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar className="image-overlay"
              title={item.title}
              link={item.link}
            />
          </ImageListItem>
        </a>
      ))}
    </ImageList>
    </Box>
  )
}

const itemData = [
  {
    img: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1mzPoT.img?w=800&h=435&q=60&m=2&f=jpg",
    title: '10-timesless principles',
    link: "https://www.msn.com/en-us/money/savingandinvesting/10-timeless-investing-principles-used-by-legendary-investors-to-build-massive-wealth/ss-BB1mzIxi#image=1",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://www.investopedia.com/thmb/yXSY_G0ApFAmll4FUu457jAx-hI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/riskreturntradeoff_definition_final_0830-fb7089cafb0f4f578e798d49c41dbe99.jpg",
    title: 'How the Investment Principle Works',
    link: "https://www.investopedia.com/terms/r/riskreturntradeoff.asp",
  },
  {
    img: "https://www.investopedia.com/thmb/tadi23Duo5yXoT9QgVXEiqpMGNc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1751834114-dbed438a5a604136994315d8d8f93e91.jpg",
    title: 'Introduction to Stock Market Investing',
    link: "https://www.investopedia.com/articles/basics/06/invest1000.asp",
  },
  {
    img: "https://endeavorwa.com/wp-content/uploads/2020/01/growing-wealth-money-1080x675.jpg",
    title: 'Diversification: The Key to Investment Success',
    link: "https://endeavorwa.com/successful-investment-diversification/",
    cols: 2,
  },
  {
    img: "https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2020/09/growth-investing-e1600172087547.jpg",
    title: 'Growth vs Value Investing: Which Is Best For You?',
    link: "https://www.forbes.com/advisor/investing/growth-investing-alternatives/",
    cols: 2,
  },
  {
    img: "https://cdn.corporatefinanceinstitute.com/assets/income-investing.jpeg",
    title: "10 Long-Term Investing Strategies That Work",
    link: "https://money.usnews.com/investing/slideshows/long-term-investing-strategies-that-work",
    rows: 2,
    cols: 2,
    featured: true,
  },
];


export default Articles; 