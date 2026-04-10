// IERCTM

import {Page, Locator} from '@playwright/test'

export class BasePage{

    readonly page: Page
    constructor(page: Page)
    {
        this.page=page
    }

    async navigateTo(url: string)
    {
        await this.page.goto(url)
    }

    async fill(element: Locator, text: string)
    {
        await element.fill(text)
    }

    async click(element: Locator)
    {
        await element.click()
    }
}