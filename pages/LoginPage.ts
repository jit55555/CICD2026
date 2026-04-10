// IIERCSTM

import{Page, Locator} from '@playwright/test'
import { BasePage } from './BasePage'

export class LoginPage extends BasePage{
    
    readonly username: Locator
    readonly password: Locator
    readonly loginBtn: Locator

    constructor(page: Page)
    {
       super(page)
       this.username = page.locator("//input[@name='username']")
       this.password= page.locator("//input[@name='password']")
       this.loginBtn= page.locator("//button[@type='submit']")

    }

    async loginMethod(uname: string, pwd: string)
    {
        await this.fill(this.username, uname)
        await this.fill(this.password, pwd)
        await this.click(this.loginBtn)
    }
} 