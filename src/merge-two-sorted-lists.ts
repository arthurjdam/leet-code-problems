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
): ListNode | null {}
