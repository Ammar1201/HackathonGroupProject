import puppeteer from 'puppeteer';
import { Book } from '../models/books.models';

const final = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://monkeypen.com/pages/free-childrens-books");
    let articles = await page.$$eval("#prod", (links) => {
      links = links.map((el) => el.querySelector("a").href);
      return links;
    });  
    for (let i = 0; i < articles.length; i++) {
      const page = await browser.newPage();
      await page.goto(articles[i]);    
      let name =  await page.$eval("h1", (el) => el.innerText.split("|")[0].trim());
      let paragraph = await page.$eval(".article__content.rte", (el) => el.innerText);
      let image = await page.$eval("div > img",(el) => el.src);
      
        const book = new Book({ 
            name: name,
            paragraph: paragraph,
            image: image
        });
        await book.save();
    }
    await browser.close();
  };
  final();