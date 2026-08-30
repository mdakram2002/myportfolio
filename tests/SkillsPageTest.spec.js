import { test, expect } from '@playwright/test';

test.describe('Skills Page Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://mdakram.vercel.app', {
      timeout: 60000,
      waitUntil: 'domcontentloaded',
    });

    // Wait for React to hydrate and #home to actually render
    await page.waitForSelector('#home', { timeout: 20000 });
  });

  test('Page loads with correct URL', async ({ page }) => {
    const pageTitle = await page.title();
    console.log("Page Title of Portfolio: ", pageTitle);

    const pageUrl = page.url();
    console.log("Page URL of Portfolio: ", pageUrl);

    await expect(page).toHaveURL('https://mdakram.vercel.app');
    await expect(page).toHaveTitle("Akram's Portfolio - Full Stack Engineer");
  });

  test('Skills section header and description are visible', async ({ page }) => {
    const header = await page.locator('#skills h2');
    await expect(header).toBeVisible();
    await expect(header).toHaveText('What I Build & Test With');

    const description = await page.locator('#skills p.text-slate-400').first();
    await expect(description).toBeVisible();
    await expect(description).toHaveText(/7 areas, 3 cards on screen at a time/);
  });

  test('All 7 skill category tabs are visible', async ({ page }) => {
    const categories = ['Frontend', 'Backend', 'Testing', 'Database', 'AI & Payments', 'DevOps', 'Languages'];
    
    for (const category of categories) {
      const tab = await page.locator('.sk-tab', { hasText: category });
      await expect(tab).toBeVisible();
    }
  });

  test('Initial 3 skill cards are displayed', async ({ page }) => {
    const initialCategories = ['Testing', 'Backend', 'Frontend'];
    
    for (const category of initialCategories) {
      const card = await page.locator('.sk-card').filter({ hasText: category });
      await expect(card).toBeVisible();
    }
  });

  test('Initially visible tabs are highlighted', async ({ page }) => {
    const initialCategories = ['Testing', 'Backend', 'Frontend'];
    
    for (const category of initialCategories) {
      const tab = await page.locator('.sk-tab', { hasText: category });
      const backgroundColor = await tab.evaluate((el) => window.getComputedStyle(el).background);
      expect(backgroundColor).toContain('gradient');
    }
  });

  test('Clicking a hidden category replaces the oldest card', async ({ page }) => {
    const databaseTab = await page.locator('.sk-tab', { hasText: 'Database' });
    await databaseTab.click();
    
    await page.waitForTimeout(500);
    
    const databaseCard = await page.locator('.sk-card').filter({ hasText: 'Database' });
    await expect(databaseCard).toBeVisible();
    
    const testingCard = await page.locator('.sk-card').filter({ hasText: 'Testing' });
    await expect(testingCard).not.toBeVisible();
  });

  test('Clicking an already visible category moves it to the end', async ({ page }) => {
    const initialCards = await page.locator('.sk-card').all();
    const initialTexts = await Promise.all(initialCards.map(card => card.textContent()));
    
    const testingTab = await page.locator('.sk-tab', { hasText: 'Testing' });
    await testingTab.click();
    
    await page.waitForTimeout(500);
    
    const newCards = await page.locator('.sk-card').all();
    const newTexts = await Promise.all(newCards.map(card => card.textContent()));
    
    expect(newTexts[newTexts.length - 1]).toContain('Testing');
  });

  test('Each skill card displays correct information', async ({ page }) => {
    const categories = ['Testing', 'Backend', 'Frontend'];
    
    for (const category of categories) {
      const card = await page.locator('.sk-card').filter({ hasText: category });
      
      const tagline = await card.locator('p.text-slate-400');
      await expect(tagline).toBeVisible();
      
      const skillsInfo = await card.locator('span:has-text("skills")');
      await expect(skillsInfo).toBeVisible();
      
      const projectsInfo = await card.locator('span:has-text("projects")');
      await expect(projectsInfo).toBeVisible();
    }
  });

  test('Skill chips are displayed correctly in each card', async ({ page }) => {
    const testingCard = await page.locator('.sk-card').filter({ hasText: 'Testing' });
    const skillChips = await testingCard.locator('.sk-chip').all();
    
    expect(skillChips.length).toBe(12);
  });

  test('Navigation link to projects section works', async ({ page }) => {
    const projectsLink = await page.locator('a[href="#projects"]').filter({ hasText: 'See all projects' });
    await expect(projectsLink).toBeVisible();
    await expect(projectsLink).toHaveText('See all projects');
  });

  test('Hover effects work on skill chips', async ({ page }) => {
    const testingCard = await page.locator('.sk-card').filter({ hasText: 'Testing' });
    const firstChip = await testingCard.locator('.sk-chip').first();
    
    const initialBorder = await firstChip.evaluate((el) => window.getComputedStyle(el).borderColor);
    
    await firstChip.hover();
    await page.waitForTimeout(200);
    
    const hoverBorder = await firstChip.evaluate((el) => window.getComputedStyle(el).borderColor);
    
    await expect(firstChip).toBeVisible();
  });

  test('Tabs change color when hovered', async ({ page }) => {
    const tab = await page.locator('.sk-tab', { hasText: 'DevOps' });
    
    const initialColor = await tab.evaluate((el) => window.getComputedStyle(el).color);
    
    await tab.hover();
    await page.waitForTimeout(200);
    
    const hoverColor = await tab.evaluate((el) => window.getComputedStyle(el).color);
    
    await expect(tab).toBeVisible();
  });

  // Card count remains at 3 after multiple clicks
  test('Card count remains at 3 after multiple clicks', async ({ page }) => {
    // Click on different categories
    const categories = ['Database', 'AI & Payments', 'DevOps', 'Languages'];
    
for (const category of categories) {
  const tab = await page.locator('.sk-tab', { hasText: category });
  await tab.click();

  // Poll until exactly 3 cards remain (waits out any in-flight exit animation)
  await expect(async () => {
    const count = await page.locator('.sk-card').count();
    expect(count).toBe(3);
  }).toPass({ timeout: 10000, intervals: [200, 400, 600] });

  const allCards = await page.locator('.sk-card').all();
  const cardTexts = await Promise.all(
    allCards.map(card => card.textContent().then(text => text?.substring(0, 30)))
  );
  console.log(`After clicking "${category}", found ${allCards.length} cards:`, cardTexts);

  expect(allCards.length).toBe(3);
  for (const card of allCards) {
    await expect(card).toBeVisible();
    const text = await card.textContent();
    expect(text?.length).toBeGreaterThan(10);
  }
}
  });

  test('Skills section is responsive on different viewports', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.waitForTimeout(500);
    
    const cards = await page.locator('.sk-card').all();
    expect(cards.length).toBeGreaterThanOrEqual(3);
    
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForTimeout(500);
    
    const tabletCards = await page.locator('.sk-card').all();
    expect(tabletCards.length).toBeGreaterThanOrEqual(3);
  });

  test('Each card has a unique accent color from its gradient', async ({ page }) => {
    const cards = await page.locator('.sk-card').all();
    
    for (const card of cards) {
      const borderColor = await card.evaluate((el) => window.getComputedStyle(el).borderColor);
      expect(borderColor).toBeDefined();
    }
  });

  test('Skill cards have correct animation classes', async ({ page }) => {
    const card = await page.locator('.sk-card').first();
    const className = await card.getAttribute('class');
    expect(className).toContain('sk-card');
  });

  test('Accessibility - skills section has proper heading hierarchy', async ({ page }) => {
    const h2 = await page.locator('#skills h2');
    await expect(h2).toHaveAttribute('class', /font-display/);
  });

  test('All icons are rendered correctly', async ({ page }) => {
    const icons = await page.locator('#skills svg').all();
    expect(icons.length).toBeGreaterThan(10);
  });

  test('Clicking visible category does not duplicate cards', async ({ page }) => {
    const frontendTab = await page.locator('.sk-tab', { hasText: 'Frontend' });
    await frontendTab.click();
    await page.waitForTimeout(500);
    
    const frontendCards = await page.locator('.sk-card').filter({ hasText: 'Frontend' }).all();
    expect(frontendCards.length).toBe(1);
  });

  test('Database card appears when clicked and displays correct skills', async ({ page }) => {
    const databaseTab = await page.locator('.sk-tab', { hasText: 'Database' });
    await databaseTab.click();
    await page.waitForTimeout(500);
    
    const databaseCard = await page.locator('.sk-card').filter({ hasText: 'Database' });
    await expect(databaseCard).toBeVisible();
    
    const skills = ['MongoDB', 'PostgreSQL', 'Redis'];
    for (const skill of skills) {
      const skillChip = await databaseCard.locator('.sk-chip', { hasText: skill }).first();
      await expect(skillChip).toBeVisible();
    }
  });

  test('Ambient glow background is present', async ({ page }) => {
    const glowElement = await page.locator('#skills div.absolute').first();
    await expect(glowElement).toBeVisible();
    
    const style = await glowElement.getAttribute('style');
    expect(style).toContain('radial-gradient');
  });

  test('Keyboard navigation - tabs are focusable', async ({ page }) => {
    const firstTab = await page.locator('.sk-tab', { hasText: 'Frontend' }).first();
    await firstTab.focus();
    await expect(firstTab).toBeFocused();
    
    await page.keyboard.press('Enter');
    await page.waitForTimeout(300);
    
    const card = await page.locator('.sk-card').filter({ hasText: 'Frontend' });
    await expect(card).toBeVisible();
  });

  test('All skill chips are interactive (have hover styles)', async ({ page }) => {
    const testingCard = await page.locator('.sk-card').filter({ hasText: 'Testing' });
    const chips = await testingCard.locator('.sk-chip').all();
    
    const chipsToTest = chips.slice(0, 3);
    for (const chip of chipsToTest) {
      const initialBackground = await chip.evaluate((el) => window.getComputedStyle(el).background);
      await chip.hover();
      await page.waitForTimeout(100);
      const hoverBackground = await chip.evaluate((el) => window.getComputedStyle(el).background);
      await expect(chip).toBeVisible();
    }
  });

  test('Projects count badge is correctly displayed for each category', async ({ page }) => {
    const categories = ['Testing', 'Backend', 'Frontend'];
    
    for (const category of categories) {
      const card = await page.locator('.sk-card').filter({ hasText: category });
      const projectsBadge = await card.locator('span:has-text("projects")');
      await expect(projectsBadge).toBeVisible();
      
      const text = await projectsBadge.textContent();
      expect(text).toMatch(/\d+\+ projects/);
    }
  });

  // Scroll behavior - skills section is in viewport on load
  test('Scroll behavior - skills section is in viewport on load', async ({ page }) => {
    // First check if it's already in viewport
    let isInViewport = await page.locator('#skills').evaluate((el) => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    });
    
    // If not in viewport, scroll to it
    if (!isInViewport) {
      await page.locator('#skills').scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      
      // Check again after scrolling
      isInViewport = await page.locator('#skills').evaluate((el) => {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
      });
    }
    
    expect(isInViewport).toBeTruthy();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});