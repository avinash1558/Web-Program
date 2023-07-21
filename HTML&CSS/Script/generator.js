function* name() {
    let i=[];
    while(1){
        yield i++;
    }
}
let gen= name()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())