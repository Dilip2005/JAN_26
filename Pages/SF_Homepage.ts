import { LoginPage } from "./SF_LoginPage";

export class HomePage extends LoginPage{


    async clickOnAppLauncher(){

        await this.click(".slds-icon-waffle","AppLauncher","Click")
    }

    async clickOnViewAll(){
        await this.click("//button[text()='View All']","viewAll","click")
        await this.click("//p[text()='Marketing CRM Classic']","CRM","click")
        await this.wait('mediumWait')
    }


}