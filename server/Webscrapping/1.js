// import puppeteer from "puppeteer";

const puppeteer = require("puppeteer") 
const GetStock = async (href, age) => {

    //creating browser
    const browser = await puppeteer.launch();
    //opening new page
    const page = await browser.newPage();
    //opening address
    await page.goto(href, {timeout: 0})

    //getting header
    const head = await page.evaluate(() => {
        const tds = Array.from(document.querySelectorAll('.table.column-sticky.table-striped.table-hover.no-scale thead tr th'))
        return tds.map(th => th.innerText)
    });


    //getting data into single array
    const temp_data = await page.evaluate(() => {

        const td = Array.from(document.querySelectorAll('.table.column-sticky.table-striped.table-hover.no-scale tbody tr td'))
        return td.map(td => td.innerText)
    });

    //creating 2d array
    let data = Array.from(Array(15), () => new Array(10))

    //loop to create individual comapny data
    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 10; j++) {
            data[i][j] = temp_data[j + i * 10];
        }
    }

    //to get random no for limits btw 30 and 70
    const limit1 = Math.floor(Math.random() * 29)+30;


    //DATA
    // Filter and sort the data beta is 5 index Rsi is 9 index                                  
    const filteredData = data.filter(d => parseFloat(d[9].slice(0, 5)) >= limit1 && parseFloat(d[9].slice(0, 5)) <= 70 && parseFloat(d[5].slice(0, 5)) > 0 && parseFloat(d[5].slice(0, 5)) < 1); // Apply filter conditions
    
    const sortedData = filteredData.sort((a, b) => parseFloat(b[5].slice(0, 5)) - parseFloat(a[5].slice(0, 5))); // Sort by beta value in descending order

    //storing data of head and data - desc else asc
    const table = { "head": head, "data": age < 35 ? sortedData.slice(0,6):sortedData.slice(0,6).reverse()};

    //closing browser
    await browser.close();
    console.log(table) ;
};

GetStock("https://www.topstockresearch.com/rt/IndexAnalyser/NiftySmallCap50/Overview/StockList",56)

// export default GetStock;