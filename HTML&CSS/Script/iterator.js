function iterator(params) {
    let index=0;
    return{
        next:function () {
            if(index<params.length){
                return{
                    params:params[index++],
                    done:false
                }
            }
            else{
                return{
                    done:true
                }
            }
        }
    }
    
}
let arr=[121,11,234,232,2122,222]
let f=iterator(arr)
console.log(f)
console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f.next())