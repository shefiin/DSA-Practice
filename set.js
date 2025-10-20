const set = new Set([1, 2, 3]) //set constructor

set.add(4) //adding method
set.add(4) //will ignore duplicate
console.log(set.has(4)); //checking value exist
set.delete(3) 
console.log(set.size)
set.clear()

for(const item of set){
    console.log(item);    
}
