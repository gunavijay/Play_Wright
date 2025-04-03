import {chromium, expect, firefox, test, webkit } from "@playwright/test";
import { text } from "stream/consumers";
test(`Test to launch a browser`, async({}) => {

const browser = await chromium.launch({headless:false,channel:'msedge'});
const context = await browser.newContext();
const page = await context.newPage();

await page.goto("http://leaftaps.com/opentaps/control/main");
await page.locator(`//input[@id='username']`).fill("democsr");
await page.locator(`//input[@id='password']`).fill("crmsfa");
await page.locator(`//input[@value='Login']`).click();
await page.locator(`//a[contains(text(),'CRM')]`).click();
//await page.locator(`//a[@id='ext-gen510']`).click();
await page.locator(`//a[text()='Create Lead']`).click();
await page.locator(`//input[@id='createLeadForm_companyName']`).fill("CSONY");
await page.locator(`//input[@id='createLeadForm_firstName']`).fill("FSONY");
await page.locator(`//input[@id='createLeadForm_lastName']`).fill("Industries");
await page.locator(`//input[@id='createLeadForm_lastNameLocal']`).fill("SIA");
await page.locator(`//input[@id='createLeadForm_personalTitle']`).fill("SONY Industires");
await page.locator(`//input[@id='createLeadForm_annualRevenue']`).fill("1000000");
await page.locator(`//input[@id='createLeadForm_departmentName']`).fill("Automation");
await page.locator(`//input[@id='createLeadForm_primaryPhoneNumber']`).fill("9840590497");
await page.waitForTimeout(1000);
await page.locator(`//input[@class='smallSubmit']`).click();


// Assertion having Doubt Verify the company name, first name, last name and the status using auto retrying and nonretrying assertions
const a= await expect(page.locator(`//span[@id='viewLead_firstName_sp']`)).toHaveText('FSONY');
console.log(`Assert value is${a}`);


const b= await expect (page.locator(`//span[@id='viewLead_lastName_sp']`)).toHaveText('Industries');
console.log("Assert value is" , +b);
/*Commenting this line of Code since the Company name has dynamic value genration
const c= await expect(page.locator(`//span[@id='viewLead_companyName_sp']`)).toHaveText('CSONY');*/
await page.pause();


})

