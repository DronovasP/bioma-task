import { expect, test } from '../POM/fixtures'
import { LeadEmailResponse } from '../../types/types'
import { getLeads } from '../utils/api/bioma-api-utils';

test.describe('Results email page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/weight-loss/email');
  });

  test('should fill email and submit', async ({ emailPage, page, request }) => {
    const testEmail = `test-${Date.now()}@test.com`;

    await test.step('Enter and submit email', async () => {
      await emailPage.fillEmail(testEmail);
      await emailPage.clickSubmit();
    });

    await test.step('Verify lead is created', async () => {
      const response = await page.waitForResponse(
        (resp) => resp.url().includes('https://api.bioma.health/api/leads') && resp.request().method() === 'POST' && resp.status() === 201,
      );
      const responseData = (await response.json()) as LeadEmailResponse;
      expect(responseData.data.email).toBe(testEmail);      

      const leadResponseData = await getLeads(request, responseData.data.code);
      expect(leadResponseData.data.email).toBe(testEmail);
    });    

    await test.step('Verify redirection to summary page', async () => {
      await expect(page).toHaveURL(/weight-loss\/summary/);
    });
  });

  test('User enters incomplete email', async ({ emailPage, page }) => {
    await test.step('User enters incomplete email', async () => {
        await emailPage.fillEmail('test@test')
    })

    await test.step('User is unable to click on submit button', async () => {
      await expect(emailPage.submitButton).toBeDisabled()
    })
  })

  test('User enters invalid email', async ({ emailPage, page }) => {
    await test.step('User enters invalid email', async () => {
        await emailPage.fillEmail('asd@us.us')
        await emailPage.clickSubmit()
    })

    await test.step('User sees invalid email error', async () => {  
      await expect(emailPage.invalidEmailError).toBeVisible()
    })
  })
})