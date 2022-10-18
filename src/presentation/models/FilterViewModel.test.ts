import { filterViewModel } from "./FilterViewModel";

describe("Presentation :: Models :: FilterViewModel", () => {
    describe("#getFilterByUrlHash", () => {
        describe("When pass hash with", () => {
            describe("value /completed", () => {
                it("returns true", () => {
                    const hash = "/completed";
                    const { getFilterByUrlHash } = filterViewModel;
                    const filter = getFilterByUrlHash(hash);

                    const expected = true;

                    expect(filter).toEqual(expected);
                });
            })
            describe("value /active", () => {
                it("returns false", () => {
                    const hash = "/active";
                    const { getFilterByUrlHash } = filterViewModel;
                    const filter = getFilterByUrlHash(hash);

                    const expected = false;

                    expect(filter).toEqual(expected);
                });
            })
            describe("value /", () => {
                it("returns undefined", () => {
                    const hash = "/";
                    const { getFilterByUrlHash } = filterViewModel;
                    const filter = getFilterByUrlHash(hash);

                    const expected = undefined;

                    expect(filter).toEqual(expected);
                });
            })
            describe("any value besides /active and /completed", () => {
                it("returns undefined", () => {
                    const hash = "/";
                    const { getFilterByUrlHash } = filterViewModel;
                    const filter = getFilterByUrlHash(hash);

                    const expected = undefined;

                    expect(filter).toEqual(expected);
                });
            })
        });
    });
});