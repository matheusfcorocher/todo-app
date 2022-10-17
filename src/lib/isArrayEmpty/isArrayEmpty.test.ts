import { isArrayEmpty } from "./isArrayEmpty";

describe("Lib :: Array", () => {
    describe("#isArrayEmpty", () => {
      describe("When array has no items", () => {
        it("return true", () => {
          const result = isArrayEmpty([]);

          expect(result).toEqual(true);
        });
      });
      describe("When array has items", () => {
        it("return false", () => {
          const result = isArrayEmpty([1, 2, 3]);

          expect(result).toEqual(false);
        });
      });
    });
});