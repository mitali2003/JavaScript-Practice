//Generate LRU (Least reasent used)
// When you want to remove then it removed least used value

function createLRUCache(capacity) {}
const cache = createLRUCache(2);

cache.put(1, 1);
cache.put(2, 2);

console.log(cache.get(1)); // 1

cache.put(3, 3); // evicts key 2

console.log(cache.get(2)); // -1

cache.put(4, 4); // evicts key 1

console.log(cache.get(1)); // -1
console.log(cache.get(3)); // 3
console.log(cache.get(4)); // 4
