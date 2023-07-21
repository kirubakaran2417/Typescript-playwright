import { chromium, test } from "@playwright/test";


test("login test demo",async() => {

    const browser=await chromium.launch({
        headless: false,
    });
    const context=await browser.newContext();
    const page=await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@role='button']//span[@class='title'][normalize-space()='My account']")
   // await page.click("text=login");

   await page.click("'Login'");
   await page.fill("input[name='email']","talk2kiruba@gmail.com");
   await page.fill("input[name='password']","agaran2417");
   await page.click("input[value='Login']");

//    await page.waitForTimeout(4000);
   const newcontext=await browser.newContext();
   const page1=await newcontext.newPage();
   await page1.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");


})