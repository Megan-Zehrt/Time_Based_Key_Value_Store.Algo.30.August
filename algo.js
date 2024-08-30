// 981. Time Based Key-Value Store



// Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

// Implement the TimeMap class:

// TimeMap() Initializes the object of the data structure.
// void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
// String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".









var TimeMap = function() {
    this.map = new Map()
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    const map = this.map

    if(!map.has(key)){
        map.set(key, [])
    }

    map.get(key).push([value, timestamp])
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    
    const arr = this.map.get(key) || []

    let [l, r] = [0, arr.length -1]
    let res = ""

    while(l <= r){

        const mid = Math.floor((l + r) / 2)
        const [v, t] = arr[mid]

        if(timestamp === t){
            return v
        }

        if(timestamp >= t){
            l = mid + 1
            res = v
        }else{
            r = mid - 1
        }
    }

    return res
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */