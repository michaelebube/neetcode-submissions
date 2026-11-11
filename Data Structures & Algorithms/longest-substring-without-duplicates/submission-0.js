class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let size = 0;
        let set = new Set();

        for(let i = 0; i < s.length; i++) {
            while(set.has(s[i])) {
                set.delete(s[l])
                l++;
            }

            set.add(s[i]);
            size = Math.max(size, i - l + 1)

        }

       
        return size;
    }
}
