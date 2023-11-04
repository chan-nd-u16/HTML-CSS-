function fun1(){
    // let profile=document.getElementById('fille').files[0]
    let img=document.getElementsByClassName('imageurl1')[0].files[0]
    let prof=URL.createObjectURL(img)





    let obj=document.getElementsByClassName('obj')[0].value
    let name=document.getElementsByClassName('name')[0].value
    let email=document.getElementsByClassName('email')[0].value
    let skill1=document.getElementsByClassName('skill1')[0].value
    let skill2=document.getElementsByClassName('skill2')[0].value
    let skill3=document.getElementsByClassName('skill3')[0].value


    let sslcsch=document.getElementsByClassName('sslcscl')[0].value
    let sslcmar=document.getElementsByClassName('sslc')[0].value

    let hrsch=document.getElementsByClassName('hrsch')[0].value
    let hrmar=document.getElementsByClassName('hr')[0].value

    let clg=document.getElementsByClassName('clg')[0].value
    let clgpg=document.getElementsByClassName('pg')[0].value
    let clgp=document.getElementsByClassName('pgp')[0].value

    let lan1=document.getElementsByClassName('lang1')[0].value
    let lan2=document.getElementsByClassName('lang2')[0].value
    let dec=document.getElementsByClassName('dec')[0].value




    document.write('<body style="background-image: linear-gradient(#78C1F3, #9BE8D8,#78C1F3);"><div style="display:flex;gap:20%;"><img src='+'"'+prof+'"'+'style="width: 200px;height: 200px;border-radius: 50%;"'+'>'+'<div>'+'<h1>'+name+'</h1>'+'<h3>'+email+'</h3>'+'</div></div>')
    document.write('<h2 style="background-color:4A55A2;">OBJECTIVE</h2>')
    document.write('<p>'+obj+'</p>')
    document.write('<h2 style="background-color:4A55A2;">SKILLS</h2>')
    document.write('<p>1.'+skill1+'</p>')
    document.write('<p>2.'+skill2+'</p>')
    document.write('<p>3.'+skill3+'</p>')
    // document.write()
    document.write(
        '<h2 style="background-color:4A55A2;">EDUCATION</h2>'+
        '<table border="2">'+
            '<tr>'+
               '<th>course</th>'+
               '<th>institution</th>'+
               '<th>percentage</th>'+
           ' </tr>'+
            '<tr>'+
                
                '<td>SSLC</td>'+
               ' <td>'+sslcsch+'</td>'+
               ' <td>'+sslcmar+'</td>'+
            '</tr>'+
            '<tr>'+
                
                '<td>HIGHER STUDIES</td>'+
               ' <td>'+hrsch+'</td>'+
               ' <td>'+hrmar+'</td>'+
            '</tr>'+
            '<tr>'+
                '<td>'+clgpg+'</td>'+
                '<td>'+clg+'</td>'+
                '<td>'+clgp+'</td>'+
           ' </tr>'+
            
            
        '</table>'+
        '<h2 style="background-color:4A55A2;">LANGUAGE</h2>'+
        '<p>'+lan1 +'</p>'+
        '<p>'+lan2 +'</p>'+
        '<h2 style="background-color:4A55A2;">DECLARATION</h2>'+
        '<p>'+dec +'</p>'


        



    )
    





    
    




}
/* <img src="" alt="" style="width: 100px;height: 100px;border-radius: 50%;"></img> */
// +'style='+'"width: 100px;height: 100px;border-radius: 50%;"'