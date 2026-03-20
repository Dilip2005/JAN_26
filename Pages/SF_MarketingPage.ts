import { HomePage } from "./SF_Homepage";

;

export class MarketingCRM extends HomePage{

    async clickOnLeads(){

        await this.click("(//span[text()='Leads'])[1]","Leads","clicka")
        await this.wait('mediumWait')
    }


}