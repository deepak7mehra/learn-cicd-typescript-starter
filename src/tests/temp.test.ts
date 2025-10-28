import {describe, expect, test} from "vitest"; 

const person = {
    isActive : true,
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