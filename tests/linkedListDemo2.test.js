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
})