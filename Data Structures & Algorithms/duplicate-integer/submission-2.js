class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
      const set = new Set()

      for(const num of nums){
        if(set.has(num)){
           return true 
        } else {
            set.add(num)
            
        }
      }
      return false
    }

    // Not ideal, 
//     const map = new Map()

//         for (const num of nums) {
//             map.set(num, (map.get(num) || 0 ) + 1)
//         }

//         for (const [num, val] of map) {
//             if (val > 1) {
//                 return true;
//             }
//         }

//         return false
//     }
}
