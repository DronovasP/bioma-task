import { test as base } from '@playwright/test'
import { EmailPage } from './weight-loss/email-page'

type TestFixtures = {
    emailPage: EmailPage
}

export const test = base.extend<TestFixtures>({
    emailPage: async ({ page }, use) => {
        await use(new EmailPage(page))
    },
})

export { expect } from '@playwright/test'