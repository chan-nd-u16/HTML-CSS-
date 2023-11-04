
// function encrpt(text,key){
//     blank=' '
//     let i=0
//     for(i of text.split('')){
//         blank+=String.fromCharCode(i.charCodeAt(0)+key)
        
//     }
//     console.log(blank)

// }
// encrpt('chandrurr',9)

// function overloadd(one){
//     let num=1
//     for(i=one;i<=one;i--){
//         num+=num*i
//     }
//     console.log(num)
// }
// function overloadd(one,two){
//     let b=one+two
//     console.log(b)
// }
// function overloadd(one,two,three){
//     let sum=one+two+three
//     let cube=sum*sum*sum
//     console.log(cube)
// }

// overloadd(5)
// overloadd(2,3)
// overloadd(1,2,2)

// function add(num){
//     console.log(num)
// }

// function inone(one,two,three){
//     if(arguments.length==1){
//         let num=1
//         for(i=1;i<=one;i++){
//         num=num*(i)
//         }
//         console.log(num)


//     }
//     else if(arguments.length==2){
//         let sum=one+two
//         console.log(sum)
//     }
//     else if(arguments.length==3){
//         let summ=one+two+three
//         console.log(summ*summ*summ)
//     }


// }
// inone(5)
// inone(2,3)
// inone(1,2,2)
function encrpt(text,key){
    blank=' '
//    let  key2=arguments[2]   
//     let key3=arguments[3] 
    if(arguments.length==2){
        for(i of text.split('')){
            blank+=String.fromCharCode(i.charCodeAt(0)+key)
            
        }
        console.log(blank)


    }
    else if(arguments.length==3){
        for(i of text.split('')){
            
            
            blank+=String.fromCharCode(i.charCodeAt(0)+key+arguments[2])
            
        }
        console.log(blank)
    }
        
    else if(arguments.length==4){
        for(i of text.split('')){
            blank+=String.fromCharCode(i.charCodeAt(0)+key+arguments[3])
            
        }
        console.log(blank)
        
    }

    
        
        
        


    }
encrpt('jcnscncccs',8,8,9)


