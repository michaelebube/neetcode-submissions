class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        // First try
        // const n = nums.length
        // let ans = []

        // for (let i = 0; i < n; i++) {
        //     ans[i] = nums[i]
           
        // }
        // ans = ans.concat(nums)

        // return ans

        // 2nd try

    const n = nums.length;
    const ans = new Array(2 * n);

    for (let i = 0; i < n; i++) {
        ans[i] = nums[i];
        ans[i + n] = nums[i];
    }

    return ans;

    }
}
