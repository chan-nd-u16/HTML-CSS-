let obj=[

    bill1={a:1299,b:789,d:800,c:890,e:900},
    bill2={x:7890,y:12090,a:1200,b:2000,c:3000}
]
    
    
    
// for(i in obj){
//     // console.log(obj[i])
//     for(j in obj[i]){
//         console.log(obj[i])
//     }
    
// }
let bl=[]
for(i of obj){
    let total=0
    // console.log(obj[i])
    for(j in i){
        total+=i[j]
        console.log(total)

    }
}
