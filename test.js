
import {test} from "tap";

import pairsValues from "./";

test(({same, end}) => {
  same(
    pairsValues([
      ["a", "b"],
      ["c", "d"],
    ]),
    ["b", "d"]
  );
  end();
});
