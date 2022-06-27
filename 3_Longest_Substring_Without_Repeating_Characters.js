/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    //map
    let myMap = new Map();
    let longest = 0;
    let len_growing = 0;
    let cut = 0;

    for(let i = 0; i < s.length; i++)
    {
        if(!myMap.has(s[i]))
        {
            myMap.set(s[i], i+1);
        }
        else if(myMap.has(s[i]))
        {
            cut = (myMap.get(s[i]) > cut ? myMap.get(s[i]) : cut);
            myMap.set(s[i], i+1);
        }

        len_growing = i + 1 - cut;
        longest = ( longest < len_growing ? len_growing : longest);
        // console.log(myMap, cut, len, longest);
    }
    return longest;
};

ss = "abba";
console.log(lengthOfLongestSubstring(ss));