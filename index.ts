import last from "@unction/last";
import mapValues from "@unction/mapvalues";
import {ListType} from "./types";

export default function pairsValues<A, B> (pairs: ListType<[A, B]>): ListType<B> {
  return mapValues(last)(pairs);
}
