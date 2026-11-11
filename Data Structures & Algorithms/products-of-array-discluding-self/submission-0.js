class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length
        let result = new Array(n);
        let prefixArr = new Array(n);
        let suffixArr = new Array(n);

        prefixArr[0] = 1;
        suffixArr[n - 1] = 1;

        for(let i = 1; i < n; i++) {
            prefixArr[i] = prefixArr[i - 1] * nums[i - 1]
        }

        for(let i = n - 2; i >= 0; i--) {
            suffixArr[i] = nums[i + 1] * suffixArr[i + 1]
        }

        for(let i = 0; i < n; i++) {
            result[i] = prefixArr[i] * suffixArr[i]
        }

        return result;
    }
}
