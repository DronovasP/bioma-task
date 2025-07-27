import { Locator, Page } from '@playwright/test'

export class EmailPage {
  readonly emailInput: Locator
  readonly submitButton: Locator

  readonly invalidEmailError: Locator
  constructor(
    readonly page: Page,
  ) {
    this.emailInput = this.page.getByPlaceholder('youremail@gmail.com')
    this.submitButton = this.page.getByRole('button', { name: 'Unlock my results' })
    this.invalidEmailError = this.page.getByText('Email address is invalid')
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email)
  }

  async clickSubmit() {
    await this.submitButton.click()
  }
}
