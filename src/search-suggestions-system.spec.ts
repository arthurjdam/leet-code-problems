import { expect, test } from '@jest/globals';
import suggestedProducts from './search-suggestions-system';

test('Basic examples', () => {
  expect(
    suggestedProducts(
      ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'],
      'mouse',
    ),
  ).toStrictEqual([
    ['mobile', 'moneypot', 'monitor'],
    ['mobile', 'moneypot', 'monitor'],
    ['mouse', 'mousepad'],
    ['mouse', 'mousepad'],
    ['mouse', 'mousepad'],
  ]);

  expect(suggestedProducts(['havana'], 'havana')).toStrictEqual([
    ['havana'],
    ['havana'],
    ['havana'],
    ['havana'],
    ['havana'],
    ['havana'],
  ]);

  expect(
    suggestedProducts(['bags', 'baggage', 'banner', 'box', 'cloths'], 'bags'),
  ).toStrictEqual([
    ['baggage', 'bags', 'banner'],
    ['baggage', 'bags', 'banner'],
    ['baggage', 'bags'],
    ['bags'],
  ]);

  expect(suggestedProducts(['havana'], 'tatiana')).toStrictEqual([
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]);
});
