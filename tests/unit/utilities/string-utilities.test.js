import { toTitleCase, toSentenceCase, slugify, removeNonAlphanumeric, normalizeWhitespace } from "../../../src/utilities/index.js";

describe("string-utilities - basic functionality", () => {
    it("toTitleCase - should return a string in title case", ()=>{
        const str = 'It is a random string';
        const title = toTitleCase(str, " ");
        expect(title).toBe('It Is A Random String')
    });

    it("slugify - should return a string for use in url", ()=>{
        const str = 'It is A  random  string  ';
        const slug = slugify(str);
        expect(slug).toBe('it-is-a-random-string-')
    })

    it("removeNonAlphanumeric - should return a string that only has alphabets and numbers", ()=>{
        const str = '!@It is a # random? string * 12 3 09';
        const alphaNum = removeNonAlphanumeric(str);
        expect(alphaNum).toBe('Itisarandomstring12309')
    })

    it("normalizeWhitespace - should return a string that only has alphabets and numbers", ()=>{
        const str = '  It   is a    random   string   ';
        const normalized = normalizeWhitespace(str);
        expect(normalized).toBe('It is a random string')
    })

    it("toSentenceCase - should return a string that only has alphabets and numbers", ()=>{
        const str = 'it is a random string. in non sentence case';
        const sentenced = toSentenceCase(str);
        expect(sentenced).toBe('It is a random string. In non sentence case')
    })
})