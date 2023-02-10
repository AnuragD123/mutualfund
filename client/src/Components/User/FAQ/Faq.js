import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',

  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Faq() {
  const classes = useStyles();

  return (

    <div className='container mt-5 mb-5' style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
      <div className={classes.root}>
        <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '30px' }}>FAQs</div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading} style={{ color: '#ff5821' }}>? How to find good companies as there are thousands of publicly listed companies in the Indian stock market?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              An easier approach would be to use a stock screener. By using stock screeners, you can apply few filters (like PE ratio, debt to equity ratio, market cap etc) specific to the industry which you are investigating and get a list of limited stocks based on the criteria applied.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading} style={{ color: '#ff5821' }}>? What is the appropriate amount of time to spend while researching stocks?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              It depends whether you are trading or investing in stocks.

              If you are trading in stocks then you do not need to spend a lot of time on fundamentals. Rather, here you should read charts, trends, patterns etc and get more involved in the day-to-day market activity. In addition, traders just work 5 days a week as the market is closed on the weekends. Hence, they can’t trade on Saturdays and Sundays.

              On the other hand, while investing- you need to spend a lot more time studying stocks compared to trading. Here maybe you have to invest a couple of hours daily to study the company (even on weekends). Choosing stocks for long-term investment is not similar to choosing stocks for intraday. You need to do a rigorous study of the company, its management, financials, competitors etc.

              Besides, the time required to research a stock also depends on your knowledge, your familiarity with the industry, your past experience with analysis, and visibility of the company (how easily the company’s information is available). With time and experience, stock research analysis becomes easier and effective.       </Typography>
          </AccordionDetails>
        </Accordion>


        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading} style={{ color: '#ff5821' }}>? Should I invest in upcoming IPO?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Frankly speaking, investing in IPOs is not very profitable. IPOs are the products of the bull market. They get public only when everything is good like people are optimistic, the economy is doing wonderful etc -in order to get good listing profits. The real test of a company is during the bear market (how they survive the bad economy and falling market)- which IPOs has not faced yet.

              Nevertheless, few IPOs has given amazing returns to its shareholders in the past for long consistent years. If you are able to find such IPOs which are very promising (good business model, strong financials, efficient management and leader, decent valuation etc), then feel free to invest in them. However, in general, most IPOs are not worth investing.
            </Typography>
          </AccordionDetails>
        </Accordion>



        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading} style={{ color: '#ff5821' }}>? My stock is down by 60%. How much further down can it can go?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Technically, it can go down 100% and the stock price may fall to zero. There are a number of stocks which has destroyed the wealth of the shareholders by over 90%. The most common example is Suzlon Energy. However, a 100% capital degradation is very unlikely- unless the company files a bankruptcy.

              What to do in such case? If you find out that your study was wrong or the fundamentals/circumstances changed after you invested, there is no shame in accepting the truth. If you won’t accept it, then you are the only one who will be affected financially and mentally. Just accept that it was a wrong investment and move to the next one.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading} style={{ color: '#ff5821' }}>? Is investing in small caps more profitable than large caps?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Small caps companies have the caliber to grow faster compared to the large caps. There can be a number of hidden gems in the small-cap industry which might not have been discovered by the market yet. However, their true potential is still untested. On the other hand, large-cap companies have already proved their worth to the market.

              Anyways, the quality of stock is more important than the size of the company. There are a number of large-cap companies which has consistently given good returns to its shareholders. Overall, investing in small caps can be more profitable than large caps if you’re investing in right stocks.
            </Typography>
          </AccordionDetails>
        </Accordion>



      </div>
    </div>
  );
}
