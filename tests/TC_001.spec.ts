import { test } from "../CustomFixture/SalesForce";

test("SalesForce application",async({SF_Home,SF_Marketing})=>{

await SF_Home.launchApplication()
await SF_Home.loginData()
await SF_Home.clickOnAppLauncher()
await SF_Home.clickOnViewAll()
await SF_Marketing.clickOnLeads()


// SF_Marketing.launchApplication()


})