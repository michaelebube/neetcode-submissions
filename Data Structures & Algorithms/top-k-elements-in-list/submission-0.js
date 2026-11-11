class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {}

        for (const num of nums) {
            if(!map[num]) {
                map[num] = 1
            } else {
                map[num]++;
            }
        }

        let arr = []

       for (const key in map) {
        arr.push([key, map[key]]);
    }

  
    arr.sort((a, b) => b[1] - a[1]);


    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(Number(arr[i][0]));
    }

    return result;
    }
}
