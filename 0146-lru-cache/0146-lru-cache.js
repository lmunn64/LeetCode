
var Node = function(key, value){
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
};

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.cache = new Map()
    this.lru = new Node(0,0)
    this.mru = new Node(0,0)
    this.mru.prev = this.lru
    this.lru.next = this.mru
};

/** 
 * @param {Node} node
 * 
 */
LRUCache.prototype.remove = function(node) {
    const temp = node.prev
    const temp2 = node.next
    temp.next = temp2
    temp2.prev = temp
    node.next = null
    node.prev = null
};

/** 
 * @param {Node} node
 * 
 */
LRUCache.prototype.insert = function(node) {
    const temp = this.mru.prev
    this.mru.prev = node
    node.next = this.mru
    node.prev = temp
    temp.next = node
};
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.cache.has(key)){
        this.remove(this.cache.get(key))
        this.insert(this.cache.get(key))
        return this.cache.get(key).value
    }
        
    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.cache.has(key)){
        this.remove(this.cache.get(key))
    }
    var newNode = new Node(key, value)
    this.cache.set(key, newNode)
    this.insert(newNode)
    if(this.cache.size > this.capacity){
        this.cache.delete(this.lru.next.key)
        this.remove(this.lru.next)
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */