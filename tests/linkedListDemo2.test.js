const LList = require("../linkedList/linkedListDemo2")

// test("test if linked list is empty", () => {
//    const llist1 = new LList();
//    const llist2 = new LList();
//    llist2.append("a")
//    expect(llist1.isEmpty()).toBe(true)
//    expect(llist2.isEmpty()).toBe(false)
// })

let list1

describe("Linked List function tests", () => {
    beforeEach(() => {
        list1 = (new LList()).fromArrayIntoLinkedList(["a", "b"])
    });

    it("test if the llist is empty", () => {
        const list2 = new LList();
        expect(list2.isEmpty()).toBe(true)
        expect(list1.isEmpty()).toBe(false)
    }) 

    it("append() addes value to the end of the linked list", () => {
        expect(list1.head.val).toBe("a")
        expect(list1.head.next.val).toBe("b")
        expect(list1.append("c").toArray()).toEqual(["a", "b", "c"])
        expect(list1.head.next.next.next).toBe(null)
    })

    it("creates linked list from array", () => {
        const list3 = new LList();
        expect(list3.fromArrayIntoLinkedList([]).toArray()).toEqual([])
        expect(list3.fromArrayIntoLinkedList(["a"]).toArray()).toEqual(["a"])
        expect(list3.fromArrayIntoLinkedList(["a", "b", "c"]).toArray()).toEqual(["a", "b", "c"])
    })

    it("prepend() adds value to start of linked list", () => {
        const list4 = new LList()
        expect(list4.prepend("a").toArray()).toEqual(["a"])
        expect(list4.prepend("b").toArray()).toEqual(["b", "a"])
        expect(list4.head.val).toBe("b") 
    })

    it("finds linked list size", () => {
        expect(list1.size()).toBe(2)
    })

    it("prints linked list as array", () => {
        expect(list1.toArray()).toEqual(["a", "b"])
    })

    it("finds the first node with provided value", () => {
        expect(list1.findByValue("k")).toBe(null)
        expect(list1.findByValue("b")).toEqual({val: "b", next: null})
        expect(list1.findByValue("a")).toEqual({val: "a", next: {val: "b", next: null}})
    })

    it("finds node by index", () => {
        expect(list1.findByIndex(5)).toBe(null)
        expect(list1.findByIndex(0)).toEqual({val: "a", next: {val: "b", next: null}})
        expect(list1.findByIndex(1)).toEqual({val: "b", next: null})
    })

    it("finds node index by passed value", () => {
        expect(list1.getIndexOfValue("k")).toBe(null)
        expect(list1.getIndexOfValue("b")).toBe(1)
    })

    it("at index inserts value", () => {
        expect(list1.insertNode(-1, "z")).toBe(null)
        expect(list1.insertNode(2, "z")).toBe(null)
        expect(list1.insertNode(5, "z")).toBe(null)
        expect(list1.toArray()).toEqual(["a", "b"])
        expect(list1.insertNode(0, "k").toArray()).toEqual(["a", "k", "b"])
        expect(list1.insertNode(1, "j").toArray()).toEqual(["a", "k", "j", "b"])
    })

    it("deletes node at index", () => {
        expect(list1.deleteAtIndex(6)).toBe(null)
        expect(list1.size()).toBe(2)
        expect(list1.deleteAtIndex(0).toArray()).toEqual(["b"])
        expect(list1.prepend("a").deleteAtIndex(1).toArray()).toEqual(["a"])
        expect(list1.deleteAtIndex(0).toArray()).toEqual([])
    })
})