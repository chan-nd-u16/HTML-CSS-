
// let a=2
// let b=3
// console.log(a+b)
// console.log(a-b)
// console.log(a/b)
// console.log(a%b)
// console.log(Math.pow(a,b))
// let date = new Date('june 16, 2003 23:15:30')
// const day=date.getdate()
// let arr=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
// console.log(arr[day])
let shortlistedteams=['mi','kkr','csk','rcb','srk']
console.log(shortlistedteams[0] ,'vs',shortlistedteams[1])
console.log(shortlistedteams[0],'vs',shortlistedteams[2])
console.log(shortlistedteams[0],'vs',shortlistedteams[3])
console.log(shortlistedteams[0],'vs',shortlistedteams[4])
console.log(shortlistedteams[1],'vs',shortlistedteams[2])
console.log(shortlistedteams[1],'vs',shortlistedteams[3])
console.log(shortlistedteams[1],'vs',shortlistedteams[4])
console.log(shortlistedteams[2],'vs',shortlistedteams[3])
console.log(shortlistedteams[2],'vs',shortlistedteams[4])
console.log(shortlistedteams[3],'vs',shortlistedteams[4])

for (let i = 0; i < 6; i++) {
    for(let j=i+1;j<6;j++)
   
    console.log(shortlistedteams[i],'vs',shortlistedteams[i+1])
  }
  
        