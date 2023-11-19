class Node { constructor(data) { this.data = data this.next = null } } class
LinkedList { constructor() { this.head = null this.tail = null this.length = 0 }
add(number) { const node = new Node(number) if (this.head === null) { this.head
= node this.tail = node } else { this.tail.next = node this.tail = node }
this.length++ } get(index) { if (index < 0 || index >= this.length) { return
null } let current = this.head for (let i = 0; i < index; i++) { current =
current.next } return current.data } addAt(index, item) { if (index < 0 || index
> this.length) { return false } const node = new Node(item) if (index === 0) {
node.next = this.head this.head = node if (this.tail === null) { this.tail =
node } } else if (index === this.length) { this.tail.next = node this.tail =
node } else { const prevNode = this.get_node(index - 1) node.next =
prevNode.next prevNode.next = node } this.length++ return true } remove(index) {
if (index < 0 || index >= this.length) { return false } if (index === 0) {
this.head = this.head.next if (this.head === null) { this.tail = null } } else {
const prevNode = this.get_node(index - 1) if (prevNode.next === this.tail) {
this.tail = prevNode } prevNode.next = prevNode.next.next } this.length-- return
true } get_node(index) { if (index < 0 || index >= this.length) { return null }
let current = this.head for (let i = 0; i < index; i++) { current = current.next
} return current } } module.exports = LinkedList
