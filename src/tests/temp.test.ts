import {describe, expect, test} from "vitest"; 

const person = {
    isActive : false,
    age : 32,
};

describe("person",()=>{
    test("Person is defined",()=>{
        expect(person).toBeDefined();
    })

    test("is Active",()=>{
        expect(person.isActive).toBeTruthy();
    })
})