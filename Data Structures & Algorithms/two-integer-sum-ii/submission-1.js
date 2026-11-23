class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // Two Pointer Approach
        let n = numbers.length
        let i = 0;
        let j = n - 1;

        while (i < j) {
            if(numbers[i] + numbers[j] === target) {
                return [i+1, j+1]
            } else if(numbers[i] + numbers[j] > target){
                j--;
            } else if(numbers[i] + numbers[j] < target){
                i++
            }    
        }

// Hashmap approach, same as in Normal Two Sum 
        // let map = new Map();

        // for(let i = 0; i < numbers.length; i++) {
        //     let difference = target - numbers[i]

        //     if (map.has(difference)) {
        //         return [map.get(difference), i + 1]
        //     }

        //     map.set(numbers[i], i + 1)
        // }
    }
}
