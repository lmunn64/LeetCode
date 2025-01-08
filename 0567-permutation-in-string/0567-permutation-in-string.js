/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkMaps = function(map1, map2) {
    for(const [key,value] of map1){
        console.log(key)
        console.log(value)
        console.log(map2.get(key))
        if(map2.has(key)){
            if(map2.get(key) != value)
                return false
        }
        else
            return false
    }
    return true
}
var checkInclusion = function(s1, s2) {
    let s1List = s1.split("");
    let s2List = s2.split("");
    var map = new Map()
    var map2 = new Map()
    s1List.forEach((el)=>{
        map.set(el,(map.get(el) || 0) + 1)
    })
    var l = 0
    var r = 0
    var length = r - l + 1
    var bool = true
    
    while(l < s2.length){ 
        while(length <= s1.length && r < s2.length){
            if(map.has(s2List[r])){
                map2.set(s2List[r], (map2.get(s2List[r]) || 0) + 1)
                console.log("Letter COUNTED: " + s2List[r])
                console.log("Current: "+  map2.get(s2List[r]))
                console.log("v count after f count : " + map2.get('v'))
                if(length == s1.length){
                    console.log("Left: " + l)
                    console.log("Right: " + r)
                    console.log("Length: " + length) 
                    if(!checkMaps(map, map2))
                        break
                    return true
                }
                r++
                length = r-l+1    
            }
            else{
                console.log("CLEAR MAP")
                l = r
                map2.clear()
                break;
            }    
        }  
        r++;
        map2.set(s2List[l], map2.get(s2List[l]) - 1)
        console.log("Letter deleted: " + s2List[l])
        console.log("Current: "+  map2.get(s2List[l]))
        
        l++;
        length = r-l+1   
    }
    return false;
};