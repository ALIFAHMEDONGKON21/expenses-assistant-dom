document.getElementById('calculate')
.addEventListener('click', function()
{
    console.log('click here')
    
    let totalincome=getinputfiled('income');
    let softwarecost=getinputfiled('software');
    let coursescost=getinputfiled('courses');
    let internetcost=getinputfiled('internet');


    let totalcost=softwarecost+coursescost+internetcost;
    console.log(totalcost)
    
    let totolincomewithoutcost=totalincome-totalcost;
    console.log(totolincomewithoutcost)

    document.getElementById('total-expenses').innerText=totalcost.toFixed(2);

    document.getElementById('balance').innerText=totolincomewithoutcost.toFixed(2);
    document.getElementById('results').classList.remove('hidden')

    const historitem=document.createElement('div')
    historitem.className=' bg-white p-3 rounded-md  border-l-2 border-indigo-500'

    historitem.innerHTML=`
    <p>${new Date().toLocaleDateString()}</p>
    <p> income :${totalcost}</p>
    <p> blance with out cost${totolincomewithoutcost}</p>
     <p> blance with out cost${totalcost}</p>
    `
    const hestorcontainer=document.getElementById('history-list')
    hestorcontainer.insertBefore(historitem,hestorcontainer.firstChild);    

})

document.getElementById('calculate-savings').addEventListener('click' ,function(){
    let totalincome=getinputfiled('income');
    let softwarecost=getinputfiled('software');
    let coursescost=getinputfiled('courses');
    let internetcost=getinputfiled('internet');


    let totalcost=softwarecost+coursescost+internetcost;
    
    let totolincomewithoutcost=totalincome-totalcost;
    let savingspar=getinputfiled('savings');
    let savingscost=totolincomewithoutcost*savingspar/100;
    document.getElementById('savings-amount').innerText=savingscost.toFixed(2);

    const remblance=totolincomewithoutcost-savingscost;

    document.getElementById('remaining-balance').innerText=remblance;
    console.log(savingscost);
    
})

document.getElementById('history-tab').addEventListener('click' ,function()
{
    
    document.getElementById('results').classList.remove('hidden')
    document.getElementById('expense-form').classList.add('hidden');


    document.getElementById('history-tab').classList.add('text-white','font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
    document.getElementById('assistant-tab').classList.remove('text-white','font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')

    document.getElementById("history-section").classList.remove('hidden')
})

document.getElementById('assistant-tab').addEventListener('click', function()
{   

    console.log("ok click")
    document.getElementById('expense-form').classList.remove('hidden');
    document.getElementById('results').classList.add('hidden')
    document.getElementById("history-section").classList.add('hidden')

    document.getElementById('history-tab').classList.remove('text-white','font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
    document.getElementById('assistant-tab').classList.add('text-white','font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
})
