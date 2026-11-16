class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Time Complexity: O(n log n) - My solution
       const map = new Map();

       for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
       }

       const arr = []

       for(const [key, value] of map) {
        arr.push([key, value])
       }

       arr.sort((a,b) => b[1] - a[1])

       const result = []

       for(let i = 0; i < k; i++) {
        result.push(Number(arr[i][0]))
       }

       return result;

       // 2nd More Optimal Solution - Using Bucket Sort Time Complexity: O(n)
    //      const map = new Map();

    //    for (const num of nums) {
    //         map.set(num, (map.get(num) || 0) + 1);
    //    }

    // // Create an array of nums.length + 1 empty arrays
    //    const buckets = Array.from({length: nums.length + 1}, () => [])

    // // Store the num in the map in the array position spot of its frequency
    //    for(const [num, freq] of map) {
    //         buckets[freq].push(num)
    //    }


    //    const result = []

    // // Traverse the array backwards and the inner loop is because let's say you have nums = [1, 2, 2, 3, 3], both 2 and 3 are going to be in buckets[2] i.e. the 2nd array in the buckets array, so that you can push but numbers into the results array and depending on if results.length is equal to k, you get the top k frequent elements as since you're looping backwards and you previously stored numbers in the original map in element positions based on their frequency, a number with freq 5 is in the fifth array of buckets and you're pulling the most frequent arrays first into the results array, so that when results array.length == k, you have the right solution.
    //    for (let i = buckets.length - 1; i >= 0; i--) {
    //         for(const num of buckets[i]){
    //             result.push(num)
    //         }

    //         if (result.length == k) {
    //             return result;
    //         }

    //    }


    
    }
}
