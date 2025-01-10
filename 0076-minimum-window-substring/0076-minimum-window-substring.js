/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */


var minWindow = function(s, t) {
    if(s.length < t.length)
        return ""
    var map = new Map()
    var map2 = new Map()
    var tList = t.split("")
    var sList = s.split("")
    tList.forEach((el) => {
        map.set(el, (map.get(el) || 0) + 1)
    })
    var l = 0
    var r = -1
    var have = 0
    var need = map.size
    var minStr = s
    var minStrLen = Infinity
    while(l < s.length){
        while(have < need && r < s.length - 1){
            r++
            if(map.has(sList[r])){
                map2.set(sList[r], (map2.get(sList[r]) || 0) + 1)
                if(map.get(sList[r]) == map2.get(sList[r]))
                    have++
            } 
        }
        if(r - l + 1 < minStrLen && have == need){
            minStr = s.substring(l,r + 1)
            minStrLen = minStr.length
        }
        if(map2.has(sList[l])){
            map2.set(sList[l], map2.get(sList[l]) - 1)
            if(map2.get(sList[l]) < map.get(sList[l]))
                    have--
        }
        l++
    }
    if(minStrLen != Infinity)
        return minStr
    return ""
};