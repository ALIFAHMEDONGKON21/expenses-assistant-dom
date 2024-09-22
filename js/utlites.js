function getinputfiled(id)
{
      const inputvalue=document.getElementById(id).value
      const inputvaluenumber=parseFloat(inputvalue);
      return inputvaluenumber;
}


function getinputfromuser(id)
{
    const seevalue=document.getElementById(id).innerText;
    const seevaluenumber=parseFloat(seevalue);
    return seevaluenumber;
}