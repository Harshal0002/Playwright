import{test} from '@playwright/test';
import { general } from '../lib/General';

test("TC003_Delete_Employee", async ({page}) => {
    let obj = new general(page);
    await obj.openApplication();
    await obj.waitStatement();
    await obj.login();
    await obj.waitStatement();
    await obj.deleteEmployee();
    await obj.waitStatement();
});