change=document.getElementById('change')

change.addEventListener('click', change_all)

function change_all(){
  if(document.getElementsByTagName('div')[2].innerHTML==="Васильева")
{
    document.getElementsByTagName('div')[2].innerHTML="Vasileva"
    document.getElementsByTagName('div')[3].innerHTML="Valeria"
    document.getElementsByTagName('div')[4].innerHTML="Dmitrievna"
    document.getElementsByTagName('div')[5].innerHTML="Fem&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 25.10.2007"
    document.getElementsByTagName('div')[6].innerHTML="Saint-Petersburg"
    document.body.style.backgroundImage = "url('passport/eng_pas.jpg')" 
    document.body.style.backgroundSize = "445px 620px";
}
else
    if (document.getElementsByTagName('div')[2].innerHTML==="Vasileva")
    {
    document.getElementsByTagName('div')[2].innerHTML="Васильева"
    document.getElementsByTagName('div')[3].innerHTML="Валерия"
    document.getElementsByTagName('div')[4].innerHTML="Дмитриевна"
    document.getElementsByTagName('div')[5].innerHTML="Жен&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 25.10.2007"
    document.getElementsByTagName('div')[6].innerHTML="Санкт-Петербург"
    document.body.style.backgroundImage = "url('passport/passpotr_shablon.png')";
    document.body.style.backgroundSize = "445px 620px";
    
}
}