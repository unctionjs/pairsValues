/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import pairsKeys from "./source"

test(({same, end}) => {
  same(
    pairsValues([
      ["a", "b"],
      ["c", "d"],
    ]),
    ["b", "d"]
  )
  end()
})
