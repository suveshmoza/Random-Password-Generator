function randomPassword(){
    const masterString="C2VEZAHp3n2J3ONrfY3HjkUpn7Jk15YPqNF51X3AK5g6c06nzejf1H9nEXbvMwKzEXUmgigKbHbwxrfJEaP7PQ15Pak7WIV52jrpBh01Gcy9pDVM6cS7y4vP";
console.log(masterString.length);
let pswdString="";

for(let i=0;i<8;i++){
    let c=Math.floor(Math.random()*masterString.length+1); 
    pswdString+= masterString.charAt(c);
}
 return pswdString;
}
 function random(){
     document.getElementById('password').value=randomPassword();
 }

