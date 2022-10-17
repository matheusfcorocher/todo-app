import { isStringBlank } from "./string";

describe("Lib :: String", () => {
    describe("#isStringBlank", () => {
      describe("When title is blank", () => {
        it("return true", () => {
          const result = isStringBlank("");

          expect(result).toEqual(true);
        });
      });
      describe("When title isnt blank", () => {
        it("return false", () => {
          const result = isStringBlank("blank");

          expect(result).toEqual(false);
        });
      });
    });
});