import {test} from '@playwright/test';
import { general } from '../lib/General';

test.describe("Test Suite for HRMS Application", () => {
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
    test('@Smoke_TC002_Add Employee', async ({page}) =>{
    let obj = new general(page);
    await obj.openApplication();
    await obj.waitStatement();
    await obj.login();
    await obj.waitStatement();
    await obj.addEmployee();
    await obj.waitStatement();
    await obj.logout();
    await obj.waitStatement();
   });  
});