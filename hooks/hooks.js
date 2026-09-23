const { test } = require('@playwright/test');
const AppConstant = require('../constants/AppConstant');

test.beforeAll(async () => {
    console.log("===========================================");
    console.log("Playwright Test Execution Started");
    console.log("===========================================");
});

test.beforeEach(async ({ page }) => {

    console.log("Starting TC2 - Login User with correct email and password");

    await page.goto(AppConstant.BASE_URL);

});

test.afterEach(async ({ page }, testInfo) => {

    if(testInfo.status !== testInfo.expectedStatus){

        await ScreenshotHelper.capture(page,testInfo.title.replace(/\s+/g,"_"));

        console.log("Screenshot Captured : " +testInfo.title);
    }
    console.log("Completed : " + testInfoe.title);

    });

    
test.aftereAll(async () => {
    console.log("===========================================");
    console.log("Playwright Test Execution Completed");
    console.log("===========================================");
});


   

