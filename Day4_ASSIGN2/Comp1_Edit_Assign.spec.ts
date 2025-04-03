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
await page.locator(`//a[text()='Leads']`).click();
await page.locator(`//a[text()='Find Leads']`).click();
await page.waitForTimeout(10000);
await page.locator(`(//input[@name='firstName'])[3]`).fill("FSONY");
await page.locator(`//button[text()='Find Leads']`).click();
await page.locator(`//a[text()='10338']`).click();
await page.locator(`//a[text()='Edit']`).click();
await page.locator(`//input[@name='companyName']`).fill("NSONY");
await page.locator(`//input[@name='annualRevenue']`).fill("100002");
await page.locator(`//input[@name='departmentName']`).fill("NAUTOMATION");
await page.locator(`//input[@name='departmentName']`).fill("NAUTOMATION");
await page.locator(`//textarea[@name='description']`).fill("Automation Edit Process");
await page.locator(`(//input[@name='submitButton'])[3]`).click();
/* Edit and Update getting the below error not able to proceed because of Application Error The Following Errors Occurred:
Failed to add marketing campaign: ERROR: Could not complete the Add Role To MarketingCampaign 
[file:/C:/opentaps/applications/marketing/script/org/ofbiz/marketing/campaign/CampaignServices.xml#createMarketingCampaignRole] 
process [problem creating the newEntity value: Error while inserting MarketingCampaignRole (SQL Exception: (Duplicate entry 
'9002-10338-PROSPECT' for key 'PRIMARY'))]*/



//Below using Parernt chile for the above code which is not working
//await page.locator(`//div[@class='x-form-element']/(input[@name='firstName'])[3]`).fill("FSONY");
await page.pause();
// Assertion having Doubt Verify the company name, first name, last name and the status using auto retrying and nonretrying assertions
//await expect(page.locator(`//a[text()='SONY'][2]`)).toHaveText('CSONY');
})

