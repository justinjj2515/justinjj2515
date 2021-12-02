import { NO_MATCH } from "../common"

const binarySearch = (items: any[], item: any): number => {

   

let low = 0;
let high = items.length - 1;
let result = null

while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    
    if (item == items[mid]) {
      return mid ;
    }
    else if  ( low == high) {
      return NO_MATCH
    }
    else if (item < items[mid]) {
      high = mid + 1;
    } else {
      low = mid - 1;
    }
  }
  return NO_MATCH;
}


export default binarySearch;




