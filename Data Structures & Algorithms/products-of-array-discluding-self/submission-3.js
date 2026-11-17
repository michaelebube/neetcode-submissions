class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
       // Time Complexity: O(n) and Space Complexity: O(n + m) - My easiest solution without    bruteforcing 
        const n = nums.length
        const prefixArr = []
        prefixArr[0] = 1

        const suffixArr = []
        suffixArr[n-1] = 1

        const resultArr = []

        for (let i = 1; i < n; i++) {
            prefixArr[i] = prefixArr[i - 1] * nums[i - 1]
        }

         for (let i = n - 2; i >= 0; i--) {
            suffixArr[i] = suffixArr[i + 1] * nums[i + 1]
        }

         for (let i = 0; i < n; i++) {
            resultArr[i] = prefixArr[i] * suffixArr[i]
        }

        return resultArr


    // Same time complexity but better space complexity, no need for extra array
    // const n = nums.length
    // const forwardArr = []
    // let start = 1

    // for (let i = 0; i < n; i++) {
    //     forwardArr.push(start)
    //     start = start * nums[i]
    // }

    // const res = []
    // let start2 = 1

    // for (let i = n - 1; i >= 0; i-- ){
    //     res[i] = start2 * forwardArr[i]
    //     start2 = start2 * nums[i]
    // }

    // return res



    }
}
