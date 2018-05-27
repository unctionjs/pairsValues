import { last } from "ramda";
import { map } from "ramda";
export default function pairsValues(pairs) {
  return map(last, pairs);
}
