let data = require("./Movie.json").movieList;
let List = require("./list");
let Movedata = data.map(item => item.nm)

let Movelist = new List(Movedata)


class Consumer {
    constructor(name, moviename) {
        this.name = name;
        this.movname = moviename;
    }
}
let c = new Consumer("小陈", "我和我的祖国")
let Consumerlist = new List();


function fun(consumer, moviename) {
    if (moviename.find(consumer.movname)>-1) {
        console.log(consumer.movname,"Sadasdaasdasdadad")
        Consumerlist.append(consumer)
        moviename.remove(consumer.movname)
    }

}

function show(list){
    for(list.front();list.currPos()<list.length();list.next()){
        if(list.getelement() instanceof Consumer){
            console.log(`${list.getelement().name}借走了${list.getelement().movname}`)
        }else{
            console.log(`还剩下${list.getelement()}`)
        }
    }
}

fun(c,Movelist)
show(Consumerlist)
show(Movelist)

console.log(Movelist.toString())
console.log(Consumerlist.toString())