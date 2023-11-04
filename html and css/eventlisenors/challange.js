
function problem(dic){
balance={}
result=[]
// let obj={}

// let give={}
// let rec={}
// let givelist=[]
// let reclist=[]
// let emp1=[]

// sum=0
// count=0
for(i of dic){
    let total=0
    let count=0
    for(j in i){
        total+=i[j]
        count++
        
    }
    // console.log(total)
    let avg=total/count
    for(j in i){
        let bal=i[j]-avg
        if(balance[j]===undefined){
            balance[j]=0
        }
        balance[j]+=bal
        

    }
    
    

}
console.log(balance)

// reclist.sort(function(a, b){return a-b})
// givelist.sort(function(a,b){return a-b})
// for(j in rec){
// for(i in give){
//         // if((rec[j]!==0)||(give[i]!==0)){
//         if((Math.abs(give[i]))<=(Math.abs(rec[j]))){
//                 let ab=give[i]+rec[j]
//                 obj[j]=i+" "+(give[i]+rec[j])+" "+obj[j]
//                  rec[j]=ab
//                  give[i]=ab
//                 console.log("if")
//         }
//         else if((Math.abs(give[i]))>=(Math.abs(rec[j]))){
            

//             obj[j]=i+" "+(give[i]+rec[j])+" "+obj[j]
//             // rec[j]=rec[j]+give[i]
//             let ab=give[i]+rec[j]
//             give[i]=ab
//             rec[j]=ab
//             console.log("else")
//         }
for(pay in balance){
    for(rec in balance){
        if(balance[pay]>0 && balance[rec]<0){
            
            let amount=Math.min(Math.abs(balance[pay]),Math.abs(balance[rec]))
            if(amount==1.1368683772161603e-13 ){
                console.log(" ")
            }
            else{
                result.push({from:rec,to:pay,amount})
            balance[pay]-=amount
            balance[rec]+=amount

            }
            

        }
    }
}
        
return result
}
let obj=[
    {a:1299,b:789,d:800,c:890,e:900},
    {x:7890,y:12090,m:1200,n:2000,o:3000}
    

]
let finaloutput=problem(obj)
console.log(finaloutput)
    













