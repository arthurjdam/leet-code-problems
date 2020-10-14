export class ListNode {
  constructor(public val: number = 0, public next?: ListNode | null) {}
  toArray(): number[] {
    const out = this.val ? [this.val] : [];
    if (this.next) {
      out.push(...this.next.toArray());
    }
    return out;
  }
}

export default function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  if (!l1 && !l2) return null;

  function merge(
    left: ListNode | null,
    right: ListNode | null,
  ): ListNode | null {
    if (!left) return right;
    if (!right) return left;

    if (left.val < right.val) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      left.next = merge(left.next!, right);
      return left;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      right.next = merge(left, right.next!);
      return right;
    }
  }
  return merge(l1, l2);
}
