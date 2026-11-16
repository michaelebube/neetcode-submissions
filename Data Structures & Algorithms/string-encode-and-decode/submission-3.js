class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ""

        for (const str of strs) {
            res += str.length + ";" + str
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        const result = []

        while(i < str.length) {
            let j = i
            while(str[j] !== ';') {
                j++;
            }
            let length = parseInt(str.substring(i,j))
            i = j + 1
            j = i + length
            result.push(str.substring(i,j))
            i = j


        }

        return result
       
    }
}
