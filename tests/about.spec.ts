import { test, expect } from '@playwright/test';

test('About page renders DB-driven content', async ({ page }) => {
  await page.route('**/rest/v1/*', async route => {
    const url = route.request().url();
    const respond = async (body: unknown) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(body),
      });
    };

    if (url.includes('/about_professional_journey')) {
      return respond([{ id: 'j1', order_index: 1 }]);
    }
    if (url.includes('/about_professional_journey_translations')) {
      return respond([{ journey_id: 'j1', language: 'en', text: 'Shipped platforms' }]);
    }
    if (url.includes('/about_philosophy')) {
      return respond([{ id: 'p1', order_index: 1 }]);
    }
    if (url.includes('/about_philosophy_translations')) {
      return respond([{ philosophy_id: 'p1', language: 'en', text: 'Quality first' }]);
    }
    if (url.includes('/about_toolbox_items')) {
      return respond([{ id: 't1', order_index: 1 }]);
    }
    if (url.includes('/about_toolbox_translations')) {
      return respond([{ toolbox_item_id: 't1', language: 'en', label: 'TypeScript' }]);
    }
    if (url.includes('/about_key_results')) {
      return respond([{ id: 'k1', order_index: 1 }]);
    }
    if (url.includes('/about_key_result_translations')) {
      return respond([{ key_result_id: 'k1', language: 'en', summary: 'Reduced flakiness by 40%' }]);
    }
    if (url.includes('/about_languages')) {
      return respond([{ id: 'l1', order_index: 1 }]);
    }
    if (url.includes('/about_language_translations')) {
      return respond([{ about_language_id: 'l1', language: 'en', name: 'English', level: 'C1' }]);
    }

    return respond([]);
  });

  await page.goto('/about');

  await expect(page.getByText('Reduced flakiness by 40%')).toBeVisible();
  await expect(page.getByText('Shipped platforms')).toBeVisible();
  await expect(page.getByText('TypeScript')).toBeVisible();
});
