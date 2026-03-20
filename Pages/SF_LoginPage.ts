import { PlaywrightWrapper } from "../helper/playwright";


 export class LoginPage extends PlaywrightWrapper{


public selectors={
    username:"#username"
}


async launchApplication(){
    await this.page.goto("https://login.salesforce.com/?locale=in")
}

async loginData(){

    await this.type(this.selectors.username,"Enter the Username","dilipkumar.rajendran@testleaf.com")
    await this.type("#password","enter the password","TestLeaf@2025")
    await this.click("#Login","Login Button","Click")
}





}