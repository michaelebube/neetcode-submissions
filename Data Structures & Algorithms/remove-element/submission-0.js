class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        // My solution - swap approach, better here as order doesn't matter, fewer writes to the array
        let k = nums.length;

        let i = 0;

        while (i < k) {
            if (nums[i] === val) {
                nums[i] = nums[k - 1];
                k--;
            } else {
                i++;
            }
        }

        return k;

// ChatGPT's overwrite approach, useful when order matters 
        //    let k = 0;

        // for (let i = 0; i < nums.length; i++) {
        //     if (nums[i] !== val) {
        //         nums[k] = nums[i];
        //         k++;
        //     }
        // }

        // return k;

    }
}

