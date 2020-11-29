import last from "@unction/last";
import mapValues from "@unction/mapvalues";

export default function pairsValues<A, B> (pairs: ListType<[A, B]>): Array<B> | Set<B> {
  return mapValues(last)(pairs);
}
