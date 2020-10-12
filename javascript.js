/* let arr=[];
arr=[1,2,3,4,5];
for(let i=0;i<5;i++)
{
    console.log(arr[i]);
}
console.log(arr.push(6));
console.log(arr.shift());
console.log(arr);
arr.unshift(1);
console.log(arr);


 */
/* let var1='Muttakin';
let var2=' Ahmed';
console.log(var1.concat(var2));
console.log(var1);
let n=6;
let f=fact(n);
function fact(n)
{
    let f=1;
    for(let i=1;i<=n;i++)
    {
        f=f*i;
    }
    return f;
}
console.log(f);
  */
/*  let info={
     name:'Muttakin',
     id:1019,
     semester:'3rd',
     subject:['DBMS','Algorithm']
 };
 console.log(info.subject[0]);
 info.subject.push('Digital');
 console.log(info.subject); */
 function ShowTime()
 {
     let date= new date();
     let h=date.getHours();
     let m=date.getMinutes();
     let s=date.getSeconds();
     let session='AM';
     if(h>12){h=h-12; session='PM';}
     if(h==0){h=12;}
     h=(h<10)? "0" +h: h;
     m=(m<10)? "0" +m: m;
     s=(s<10)? "0" +s: s;
     let time=h+":"+m+":"+s+" "+session;
     document.getElementById("MyClock").textContent=time;
     setTimeout(ShowTime, 1000);
 }
 ShowTime();