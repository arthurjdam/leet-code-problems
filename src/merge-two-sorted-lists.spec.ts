import { expect, test } from '@jest/globals';
import mergeTwoLists, { ListNode } from './merge-two-sorted-lists';

test('Input examples', () => {
  expect(
    mergeTwoLists(
      new ListNode(1, new ListNode(2, new ListNode(4))),
      new ListNode(1, new ListNode(3, new ListNode(4))),
    )?.toArray(),
  ).toStrictEqual([1, 1, 2, 3, 4, 4]);

  expect(
    mergeTwoLists(new ListNode(), new ListNode())?.toArray(),
  ).toStrictEqual([]);

  expect(
    mergeTwoLists(new ListNode(), new ListNode(0))?.toArray(),
  ).toStrictEqual([0]);
});
