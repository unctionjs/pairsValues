
import pairsValues from "./index";

test("works", () => {
  expect(pairsValues([
    ["a", "b"],
    ["c", "d"],
  ])).toEqual(["b", "d"]);
});
