
import pairsValues from "./index.ts";

test(() => {
  expect(pairsValues([
    ["a", "b"],
    ["c", "d"],
  ])).toEqual(["b", "d"]);
});
