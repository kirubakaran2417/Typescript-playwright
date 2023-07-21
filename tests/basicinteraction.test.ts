import { chromium, test,expect } from "@playwright/test";

test("login test demo",async() => {
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageInput=page.locator("input#user-message");
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder","Please enter your Message");
})