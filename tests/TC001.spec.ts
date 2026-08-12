//To Provide Actual Test Scripts
import { test } from "@playwright/test";
import { general } from "../lib/General";
test("TC001-Login to HRMS Application", async ({ page }) => {
    //Test Steps
    let obj = new general(page);
    await obj.openApplication();
    await obj.waitStatement();
    await obj.login();
    await obj.waitStatement();
    await obj.logout();
    await obj.waitStatement();
});