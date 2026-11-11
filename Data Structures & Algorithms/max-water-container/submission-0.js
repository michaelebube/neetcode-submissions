class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;

        let result = 0;

        while (l < r) {
            result = Math.max(result, ((r-l) * Math.min(heights[l], heights[r])))

            if (heights[l] <= heights[r]) {
                l++
            } else {
                r--;
            }
        }

        return result;
    }
}
