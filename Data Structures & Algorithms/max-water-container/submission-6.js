class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
      let l = 0;
      let r = heights.length - 1
      let result = 0

      while (l < r) {
        result = Math.max(result, ((r-l) * Math.min(heights[l], heights[r])))

        if(heights[l] <= heights[r]) {
            l++
        } else{
            r--;
        }
      }

      return result;

      // Brute force - Inefficient
        // let result = 0
        // for (let i = 0; i < heights.length; i++) {
        //     for(let j = i + 1;  j < heights.length; j++) {
        //         result = Math.max(result, ((j-i) * Math.min(heights[j], heights[i])))
        //     }
        // }

        // return result;
    }
}
