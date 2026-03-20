import {test as baseCode} from '@playwright/test'
import { LoginPage } from '../Pages/SF_LoginPage'
import { HomePage } from '../Pages/SF_Homepage'
import { MarketingCRM } from '../Pages/SF_MarketingPage'

type SFData={
    SF_Login:LoginPage
    SF_Home:HomePage
    SF_Marketing:MarketingCRM
}

export const test=baseCode.extend<SFData>({

SF_Login:async({page,context},use)=>{
    const SfLogin=new LoginPage(page,context)
    await use(SfLogin)
},

SF_Home:async({page,context},use)=>{
    const sfHome=new HomePage(page,context)
    await use(sfHome)
},

SF_Marketing:async({page,context},use)=>{
    const sfMarketing=new MarketingCRM(page,context)
    await use(sfMarketing)
}







})
