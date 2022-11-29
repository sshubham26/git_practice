let prime="Yes"
    
    for(let i=2;i<num;i++)
    {
        if(num%i==0)
{        prime="No"
        break;}
    }
    
    console.log(prime)



let bag="";

  for(let i=str.length-1;i>=0;i--){
         bag=bag+str[i];
      }
         if(str===bag){
        console.log("Yes");
      }else{
         console.log("No");
      }
     }
