import {test, expect } from '@playwright/test'
import { baseURL } from '../TestData/constant'
import { BasePage } from '../pages/BasePage'
import loginData from '../TestData/login.config.json'
import { LoginPage } from '../pages/LoginPage'

test.describe('Login cases', ()=>{

    

    for(const data of loginData)
    {
        const Name="Name:"+data.Name
        test(Name, async({browser})=>{

            const context=await browser.newContext()
            const page= await context.newPage()

            await page.goto(baseURL)

            const login=new LoginPage(page)

            await login.loginMethod(data.Username, data.Password)


        })
    }
})