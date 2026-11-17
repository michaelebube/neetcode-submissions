class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
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
    }
}
