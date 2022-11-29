let prime="Yes"
    
    for(let i=2;i<num;i++)
    {
        if(num%i==0)
{        prime="No"
        break;}
    }
    
    console.log(prime)