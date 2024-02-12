function addNewWEField()
{
    let newNode1=document.createElement("input");
    newNode1.classList.add("form-control");
    newNode1.classList.add("weField");
    newNode1.setAttribute("placeholder","year");
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode1.classList.add('mt-2');
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder","Enter company and details")

    let weOb=document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode1, weAddButtonOb);
    weOb.insertBefore(newNode, weAddButtonOb);
    
}

function addNewAQField()
{
    let newNode1=document.createElement("input");
    newNode1.classList.add("form-control");
    newNode1.classList.add("aqField");
    newNode1.setAttribute("placeholder","Enter the major");
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode1.classList.add('mt-2');
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder","Enter the university and details")

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
    
    aqOb.insertBefore(newNode1, aqAddButtonOb);
    aqOb.insertBefore(newNode, aqAddButtonOb);
}


function addNewSSField()
{
    let newNode=document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("ssField");
    newNode.classList.add('mt-2');
    newNode.setAttribute("placeholder","Enter here")

    let ssOb=document.getElementById("ss");
    let ssAddButtonOb = document.getElementById("ssAddButton");
    
    ssOb.insertBefore(newNode, ssAddButtonOb);
    
}

function addNewLKField()
{
    let newNode=document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("lkField");
    newNode.classList.add('mt-2');
    newNode.setAttribute("placeholder","Enter here")

    let lkOb=document.getElementById("lk");
    let lkAddButtonOb = document.getElementById("lkAddButton");
    
    lkOb.insertBefore(newNode, lkAddButtonOb);
    
}

function generateresume()
{
    let nameField=document.getElementById("nameField").value;

    let nameT1=document.getElementById("nameT1");

    nameT1.innerHTML= nameField;


    document.getElementById("nameT1").innerHTML=nameField;

    document.getElementById("contactT").innerHTML= document.getElementById("contactField").value;

    document.getElementById("addressT").innerHTML= document.getElementById("addressField").value;

    document.getElementById("mailT").innerHTML= document.getElementById("mailField").value;

    // document.getElementById("ghT").innerHTML= document.getElementById("gitField").value;

    document.getElementById("linkedT").innerHTML= document.getElementById("linkedinField").value;

    document.getElementById("aboutmeT").innerHTML= document.getElementById("aboutmeField").value;

    document.getElementById("profT").innerHTML = document.getElementById("proField").value;
    
    // document.getElementById('aqT').innerHTML = document.getElementById("aqField").value;

    // document.getElementById("asT").innerHTML= document.getElementById("asField").value;

    let wes = document.getElementsByClassName("weField");
    
    let str = " ";

     for(let e of wes)
     {

        str = str +  `<li>${e.value}</li>`;
     }

    document.getElementById("weT").innerHTML = str;


    let aqs=document.getElementsByClassName('aqField')

    let str1=' ';
    for(let e of aqs)
    {
        str1=str1+`<li> ${e.value} </li>`;
    }
    document.getElementById('aqT').innerHTML=str1;

    let lks=document.getElementsByClassName('lkField')

    let str2=' ';
    for(let e of lks)
    {
        str2=str2+`<li> ${e.value} </li>`;
    }
    document.getElementById('langT').innerHTML=str2;

    let sss=document.getElementsByClassName('ssField')

    let str3=' ';
    for(let e of sss)
    {
        str3=str3+`<li> ${e.value} </li>`;
    }
    document.getElementById('ssT').innerHTML=str3;

    let file=document.getElementById("imgField").files[0];

    console.log(file);

    let reader =new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    reader.onloadend = function()
    {
      document.getElementById("imgTemplate").src  = reader.result;
    };

   document.getElementById('resume-form').style.display='none';
   document.getElementById('resume-template').style.display='block'; 
}


document.getElementById("edit").onclick= function()
{
    var x,y,z;
    x = Math.round(Math.random()*256);
    y = Math.round(Math.random()*256);
    z = Math.round(Math.random()*256);
    var color1 = 'rgb('+x+','+y+','+z+')';
    var color2= 'rgb('+x+','+y+','+z+')';
    for(var i=0;i<document.getElementsByClassName('background').length;i++) {
        document.getElementsByClassName('background')[i].style.backgroundColor = color1;
    }
    for(var i=0;i<document.getElementsByClassName('backgroundH').length;i++) {
        document.getElementsByClassName('backgroundH')[i].style.color = color2;
    }
}
window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("pdf");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'myResume.pdf',
                image: { type: 'jpeg', quality: 1 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
        })
}



