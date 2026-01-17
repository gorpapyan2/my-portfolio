import { describe, expect, it, vi } from 'vitest';
import { getAbout } from './getAbout';

const mockFrom = vi.fn();

vi.mock('../supabase', () => ({
  supabase: {
    from: mockFrom,
  },
}));

describe('getAbout', () => {
  it('maps translation rows into about content', async () => {
    mockFrom.mockImplementation((table: string) => {
      if (table === 'about_professional_journey') {
        return {
          select: () => ({
            order: () => Promise.resolve({ data: [{ id: 'j1', order_index: 1 }], error: null }),
          }),
        };
      }
      if (table === 'about_professional_journey_translations') {
        return {
          select: () => ({
            eq: () => Promise.resolve({
              data: [{ journey_id: 'j1', language: 'en', text: 'Shipped platforms' }],
              error: null,
            }),
          }),
        };
      }
      if (table === 'about_philosophy') {
        return {
          select: () => ({
            order: () => Promise.resolve({ data: [{ id: 'p1', order_index: 1 }], error: null }),
          }),
        };
      }
      if (table === 'about_philosophy_translations') {
        return {
          select: () => ({
            eq: () => Promise.resolve({
              data: [{ philosophy_id: 'p1', language: 'en', text: 'Quality first' }],
              error: null,
            }),
          }),
        };
      }
      if (table === 'about_toolbox_items') {
        return {
          select: () => ({
            order: () => Promise.resolve({ data: [{ id: 't1', order_index: 1 }], error: null }),
          }),
        };
      }
      if (table === 'about_toolbox_translations') {
        return {
          select: () => ({
            eq: () => Promise.resolve({
              data: [{ toolbox_item_id: 't1', language: 'en', label: 'TypeScript' }],
              error: null,
            }),
          }),
        };
      }
      if (table === 'about_key_results') {
        return {
          select: () => ({
            order: () => Promise.resolve({ data: [{ id: 'k1', order_index: 1 }], error: null }),
          }),
        };
      }
      if (table === 'about_key_result_translations') {
        return {
          select: () => ({
            eq: () => Promise.resolve({
              data: [{ key_result_id: 'k1', language: 'en', summary: 'Reduced flakiness by 40%' }],
              error: null,
            }),
          }),
        };
      }
      if (table === 'about_languages') {
        return {
          select: () => ({
            order: () => Promise.resolve({ data: [{ id: 'l1', order_index: 1 }], error: null }),
          }),
        };
      }
      if (table === 'about_language_translations') {
        return {
          select: () => ({
            eq: () => Promise.resolve({
              data: [{ about_language_id: 'l1', language: 'en', name: 'English', level: 'C1' }],
              error: null,
            }),
          }),
        };
      }
      return {
        select: () => ({
          eq: () => Promise.resolve({ data: [], error: null }),
        }),
      };
    });

    const result = await getAbout('en');

    expect(result.professionalJourney).toEqual(['Shipped platforms']);
    expect(result.philosophy).toEqual(['Quality first']);
    expect(result.toolbox).toEqual(['TypeScript']);
    expect(result.keyResults[0].summary).toBe('Reduced flakiness by 40%');
    expect(result.languages).toEqual([{ name: 'English', level: 'C1' }]);
  });
});
