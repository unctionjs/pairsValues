
import pairsValues from "./index";

test(() => {
  expect(pairsValues([
    ["a", "b"],
    ["c", "d"],
  ])).toEqual(["b", "d"]);
});
