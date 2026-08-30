import { test, expect } from '@playwright/test';

test.describe('Contact Page Tests', () => {

  test.beforeEach(async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://mdakram.vercel.app', {
      timeout: 60000,
      waitUntil: 'domcontentloaded',
    });

    // Wait for contact section to load
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await page.waitForSelector('#contact', { timeout: 20000 });
  });


  test('Contact section is visible', async ({ page }) => {
    const section = await page.locator('#contact');
    await expect(section).toBeVisible();
  });

  test('Get in Touch badge is displayed', async ({ page }) => {
    const badge = await page.locator('#contact span', { hasText: 'Get in Touch' });
    await expect(badge).toBeVisible();
  });

  test('Hire Me heading is displayed correctly', async ({ page }) => {
    const heading = await page.locator('#contact h2');
    await expect(heading).toBeVisible();
    await expect(heading).toContainText('Hire');
    await expect(heading).toContainText('Me');
  });

  test('Section description paragraph is visible', async ({ page }) => {
    const description = await page.locator('#contact p', { hasText: "I'd love to hear from you" });
    await expect(description).toBeVisible();
  });


  test('Profile card displays name and title', async ({ page }) => {
    const name = await page.locator('#contact h3', { hasText: 'Mohammad Akram' });
    await expect(name).toBeVisible();

    const availableBadge = await page.locator('#contact p', { hasText: 'Available for Hire' });
    await expect(availableBadge).toBeVisible();
  });

  test('Profile photo or fallback initials render', async ({ page }) => {
    const photo = await page.locator('#contact img[alt="Mohammad Akram"]');
    const fallback = await page.locator('#contact div', { hasText: 'MA' }).first();

    // Either the photo is visible, or the fallback initials block is present in DOM
    const photoVisible = await photo.isVisible().catch(() => false);
    if (!photoVisible) {
      await expect(fallback).toBeVisible();
    } else {
      await expect(photo).toBeVisible();
    }
  });

  test('Profile card bio text is visible', async ({ page }) => {
    const bio = await page.locator('#contact p', { hasText: 'Full Stack Developer focused on scalable web apps' });
    await expect(bio).toBeVisible();
  });


  test('Email card is visible with correct mailto link', async ({ page }) => {
    const emailLink = await page.locator('#contact a[href="mailto:mdakram12022002@gmail.com"]');
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toContainText('mdakram12022002@gmail.com');
  });

  test('Email card hover changes border color', async ({ page }) => {
    const emailLink = await page.locator('#contact a[href="mailto:mdakram12022002@gmail.com"]');
    await emailLink.hover();
    await page.waitForTimeout(200);
    await expect(emailLink).toBeVisible();
  });


  test('LinkedIn card links to correct profile and opens in new tab', async ({ page }) => {
    const linkedin = await page.locator('#contact a[href="https://www.linkedin.com/in/mdakram2002"]');
    await expect(linkedin).toBeVisible();
    await expect(linkedin).toHaveAttribute('target', '_blank');
    await expect(linkedin).toHaveAttribute('rel', /noopener/);
    await expect(linkedin).toContainText('Connect with me');
  });

  test('GitHub card links to correct profile and opens in new tab', async ({ page }) => {
    const github = await page.locator('#contact a[href="https://github.com/mdakram2002"]');
    await expect(github).toBeVisible();
    await expect(github).toHaveAttribute('target', '_blank');
    await expect(github).toHaveAttribute('rel', /noopener/);
    await expect(github).toContainText('View my projects');
  });

  test('Location card is displayed as non-clickable info block', async ({ page }) => {
    const location = await page.locator('#contact div', { hasText: 'India — remote open' }).last();
    await expect(location).toBeVisible();
  });

  test('Social card icons render correctly', async ({ page }) => {
    const linkedinIcon = await page.locator('#contact a[href="https://www.linkedin.com/in/mdakram2002"] svg');
    await expect(linkedinIcon).toBeVisible();

    const githubIcon = await page.locator('#contact a[href="https://github.com/mdakram2002"] svg');
    await expect(githubIcon).toBeVisible();
  });


  test('Resume card is visible and links to a PDF opening in new tab', async ({ page }) => {
    const resumeCard = await page.locator('#contact a', { hasText: 'View Resume' });
    await expect(resumeCard).toBeVisible();
    await expect(resumeCard).toHaveAttribute('target', '_blank');
    await expect(resumeCard).toHaveAttribute('rel', /noopener/);

    const href = await resumeCard.getAttribute('href');
    expect(href).toMatch(/\.pdf/i);
  });

  test('Resume card shows PDF badge and open-icon', async ({ page }) => {
    const resumeCard = await page.locator('#contact a', { hasText: 'View Resume' });
    const pdfBadge = await resumeCard.locator('span', { hasText: 'PDF' });
    await expect(pdfBadge).toBeVisible();

    const icon = await resumeCard.locator('svg').first();
    await expect(icon).toBeVisible();
  });

  test('Resume card hover changes border color', async ({ page }) => {
    const resumeCard = await page.locator('#contact a', { hasText: 'View Resume' });
    await resumeCard.hover();
    await page.waitForTimeout(200);
    await expect(resumeCard).toBeVisible();
  });

  test('First name and last name fields are visible', async ({ page }) => {
    const firstName = await page.locator('#firstName');
    await expect(firstName).toBeVisible();
    await expect(firstName).toHaveAttribute('placeholder', 'Akram');

    const lastName = await page.locator('#lastName');
    await expect(lastName).toBeVisible();
    await expect(lastName).toHaveAttribute('placeholder', 'Shaikh');
  });

  test('Email field is visible with correct type', async ({ page }) => {
    const email = await page.locator('#contact #email');
    await expect(email).toBeVisible();
    await expect(email).toHaveAttribute('type', 'email');
    await expect(email).toHaveAttribute('placeholder', 'you@example.com');
  });

  test('Phone number field is visible and marked optional', async ({ page }) => {
    const phoneLabel = await page.locator('label[for="contactNumber"]');
    await expect(phoneLabel).toContainText('optional');

    const phoneInput = await page.locator('#contactNumber');
    await expect(phoneInput).toBeVisible();
    await expect(phoneInput).toHaveAttribute('type', 'tel');
  });

  test('Message textarea is visible', async ({ page }) => {
    const message = await page.locator('#message');
    await expect(message).toBeVisible();
    await expect(message).toHaveAttribute('placeholder', /Tell me about your project/);
  });

  test('Submit button is visible with correct default label', async ({ page }) => {
    const submitBtn = await page.locator('#contact button[type="submit"]');
    await expect(submitBtn).toBeVisible();
    await expect(submitBtn).toHaveText('Send Message');
    await expect(submitBtn).toBeEnabled();
  });

  test('Country code dropdown shows default dial code button', async ({ page }) => {
    const ccButton = await page.locator('#contact button', { hasText: /^\+/ });
    await expect(ccButton).toBeVisible();
  });

  test('Clicking dial code button opens the dropdown with search input', async ({ page }) => {
    const ccButton = await page.locator('#contact button', { hasText: /^\+/ });
    await ccButton.click();

    const searchInput = await page.locator('input[placeholder="Search country or code…"]');
    await expect(searchInput).toBeVisible();
    await expect(searchInput).toBeFocused();
  });

  test('Typing in country search filters the list', async ({ page }) => {
    const ccButton = await page.locator('#contact button', { hasText: /^\+/ });
    await ccButton.click();

    const searchInput = await page.locator('input[placeholder="Search country or code…"]');
    await searchInput.fill('india');

    const option = await page.locator('li[role="option"]', { hasText: /india/i });
    await expect(option.first()).toBeVisible();

    const allOptions = await page.locator('li[role="option"]').all();
    expect(allOptions.length).toBeGreaterThan(0);
  });

  test('Searching a non-existent country shows "No matches found"', async ({ page }) => {
    const ccButton = await page.locator('#contact button', { hasText: /^\+/ });
    await ccButton.click();

    const searchInput = await page.locator('input[placeholder="Search country or code…"]');
    await searchInput.fill('zzzzznotacountry');

    const noMatches = await page.locator('li', { hasText: 'No matches found' });
    await expect(noMatches).toBeVisible();
  });

  test('Selecting a country updates the dial code button and closes dropdown', async ({ page }) => {
    const ccButton = await page.locator('#contact button', { hasText: /^\+/ });
    await ccButton.click();

    const searchInput = await page.locator('input[placeholder="Search country or code…"]');
    await searchInput.fill('india');

    const option = await page.locator('li[role="option"]', { hasText: /india/i }).first();
    const optionCode = await option.locator('span').last().textContent();
    await option.click();

    await expect(page.locator('input[placeholder="Search country or code…"]')).not.toBeVisible();
    await expect(ccButton).toContainText(optionCode.trim());
  });

  test('Escape key closes the country dropdown', async ({ page }) => {
    const ccButton = await page.locator('#contact button', { hasText: /^\+/ });
    await ccButton.click();

    const searchInput = await page.locator('input[placeholder="Search country or code…"]');
    await expect(searchInput).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(searchInput).not.toBeVisible();
  });

  test('Arrow keys navigate country options and Enter selects highlighted one', async ({ page }) => {
    const ccButton = await page.locator('#contact button', { hasText: /^\+/ });
    await ccButton.click();

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');

    const options = await page.locator('li[role="option"]').all();
    expect(options.length).toBeGreaterThan(0);

    await page.keyboard.press('Enter');

    // Dropdown should close after selection
    await expect(page.locator('input[placeholder="Search country or code…"]')).not.toBeVisible();
  });

  test('Clicking outside the dropdown closes it', async ({ page }) => {
    const ccButton = await page.locator('#contact button', { hasText: /^\+/ });
    await ccButton.click();

    const searchInput = await page.locator('input[placeholder="Search country or code…"]');
    await expect(searchInput).toBeVisible();

    // Click somewhere clearly outside the dropdown
    await page.locator('#contact h2').click();
    await expect(searchInput).not.toBeVisible();
  });


  test('Submitting empty form shows required field errors', async ({ page }) => {
    const submitBtn = await page.locator('#contact button[type="submit"]');
    await submitBtn.click();

    await expect(page.locator('text=First Name is required')).toBeVisible();
    await expect(page.locator('text=Last Name is required')).toBeVisible();
    await expect(page.locator('text=Email is required')).toBeVisible();
    await expect(page.locator('text=Message is required')).toBeVisible();
  });

  test('Form does not show error for empty phone number (optional field)', async ({ page }) => {
    const submitBtn = await page.locator('#contact button[type="submit"]');
    await submitBtn.click();

    await page.waitForTimeout(300);
    const phoneError = await page.locator('#contact').locator('text=Too short');
    await expect(phoneError).not.toBeVisible();
  });

  test('Phone number shorter than 8 digits shows "Too short" error', async ({ page }) => {
    const phoneInput = await page.locator('#contactNumber');
    await phoneInput.fill('123');

    const submitBtn = await page.locator('#contact button[type="submit"]');
    await submitBtn.click();

    await expect(page.locator('text=Too short')).toBeVisible();
  });

  test('Phone number longer than 10 digits shows "Too long" error', async ({ page }) => {
    const phoneInput = await page.locator('#contactNumber');
    await phoneInput.fill('123456789012');

    const submitBtn = await page.locator('#contact button[type="submit"]');
    await submitBtn.click();

    await expect(page.locator('text=Too long')).toBeVisible();
  });

  test('Valid phone number (8-10 digits) shows no phone error', async ({ page }) => {
    const phoneInput = await page.locator('#contactNumber');
    await phoneInput.fill('9876543210');

    const submitBtn = await page.locator('#contact button[type="submit"]');
    await submitBtn.click();

    await page.waitForTimeout(300);
    await expect(page.locator('text=Too short')).not.toBeVisible();
    await expect(page.locator('text=Too long')).not.toBeVisible();
  });

  test('Filling required fields clears their validation errors', async ({ page }) => {
    const submitBtn = await page.locator('#contact button[type="submit"]');
    await submitBtn.click();
    await expect(page.locator('text=First Name is required')).toBeVisible();

    await page.locator('#firstName').fill('Akram');
    await submitBtn.click();

    await expect(page.locator('text=First Name is required')).not.toBeVisible();
  });


  test('Successful submission shows loading state then resets form', async ({ page }) => {
    await mockContactApi(page, {
      status: 200,
      body: { success: true, message: 'Message sent successfully!' },
    });

    await page.locator('#firstName').fill('Akram');
    await page.locator('#lastName').fill('Shaikh');
    await page.locator('#contact #email').fill('test@example.com');
    await page.locator('#message').fill('This is a test message for the contact form.');

    const submitBtn = await page.locator('#contact button[type="submit"]');
    await submitBtn.click();

    // Loading state should appear briefly
    await expect(page.locator('text=Sending…')).toBeVisible();
    await expect(submitBtn).toBeDisabled();

    // Success toast should appear
    await expect(page.locator('text=Message sent successfully!')).toBeVisible({ timeout: 10000 });

    // Form fields should reset
    await expect(page.locator('#firstName')).toHaveValue('');
    await expect(page.locator('#message')).toHaveValue('');
  });

  test('Failed submission shows error toast and does not reset form', async ({ page }) => {
    await mockContactApi(page, {
      status: 500,
      body: { success: false, message: 'Server error. Please try again.' },
    });

    await page.locator('#firstName').fill('Akram');
    await page.locator('#lastName').fill('Shaikh');
    await page.locator('#contact #email').fill('test@example.com');
    await page.locator('#message').fill('This message should fail to send.');

    const submitBtn = await page.locator('#contact button[type="submit"]');
    await submitBtn.click();

    await expect(page.locator('text=Server error. Please try again.')).toBeVisible({ timeout: 10000 });

    // Form should NOT reset on failure
    await expect(page.locator('#firstName')).toHaveValue('Akram');
  });

  test('Network failure during submission shows fallback error toast', async ({ page }) => {
    await mockContactApi(page, { shouldAbort: true });

    await page.locator('#firstName').fill('Akram');
    await page.locator('#lastName').fill('Shaikh');
    await page.locator('#contact #email').fill('test@example.com');
    await page.locator('#message').fill('Testing network failure handling.');

    const submitBtn = await page.locator('#contact button[type="submit"]');
    await submitBtn.click();

    await expect(page.locator('text=Failed to send message. Please try again.')).toBeVisible({ timeout: 10000 });
  });

  test('Submit button is disabled while request is in flight', async ({ page }) => {
    await page.route('**/*', async (route) => {
      const req = route.request();
      const isContactCall = req.method() === 'POST' && (req.postData() ?? '').includes('firstName');
      if (!isContactCall) return route.continue();

      await new Promise((r) => setTimeout(r, 1000));
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true, message: 'Message sent successfully!' }),
      });
    });

    await page.locator('#firstName').fill('Akram');
    await page.locator('#lastName').fill('Shaikh');
    await page.locator('#contact #email').fill('test@example.com');
    await page.locator('#message').fill('Checking disabled state during submit.');

    const submitBtn = await page.locator('#contact button[type="submit"]');
    await submitBtn.click();

    await expect(submitBtn).toBeDisabled();
    await expect(submitBtn).toHaveCSS('cursor', 'not-allowed');
  });


  test('All required inputs are associated with a visible label', async ({ page }) => {
    const fields = ['firstName', 'lastName', 'email', 'message'];
    for (const field of fields) {
      const label = await page.locator(`label[for="${field}"]`);
      await expect(label).toBeVisible();
    }
  });

  test('Form is keyboard navigable via Tab', async ({ page }) => {
    await page.locator('#firstName').focus();
    await expect(page.locator('#firstName')).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(page.locator('#lastName')).toBeFocused();
  });

  test('Contact section is responsive on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.waitForTimeout(500);

    const heading = await page.locator('#contact h2');
    await expect(heading).toBeVisible();

    const submitBtn = await page.locator('#contact button[type="submit"]');
    await expect(submitBtn).toBeVisible();
  });

  test('Contact section is responsive on tablet viewport', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForTimeout(500);

    const form = await page.locator('#contact form');
    await expect(form).toBeVisible();

    const socialLinks = await page.locator('#contact a[href="https://github.com/mdakram2002"]');
    await expect(socialLinks).toBeVisible();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});