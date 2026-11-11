class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = s.toLowerCase().match(/[a-z0-9]/g);

        if(!str) return true;

        let p1 = str.length - 1;
        let p2 = 0;

        while (p2 < p1 ) {
            if (str[p1] !== str[p2]) {
                return false;
            } 
            p1--;
            p2++;
        }

        return true;
    }
}
