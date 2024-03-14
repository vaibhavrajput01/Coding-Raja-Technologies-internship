//alert("loading"); //
function addNewWEField(){
    // console.Log("Adding new field"); 

    let newNode=document.createElement("textarea")
    newNode.classList.add("form-control")
    newNode.classList.add("weField")
    newNode.classList.add("mt-2") 
    newNode.setAttribute("rows", 3) 
    newNode.setAttribute("placeholder","Enter here" )
let weOb=document.getElementById("we")
    let weAddButtonOb=document.getElementById("weAddButton") 

    weOb.insertBefore(newNode, weAddButtonOb)
} 


function addNewAQField(){
    // console.Log("Adding new field"); 

    let newNode=document.createElement("textarea") 
    newNode.classList.add("form-control")
    newNode.classList.add("aqField")
    newNode.classList.add("mt-2") 
    newNode.setAttribute("rows", 3) 
    newNode.setAttribute("placeholder", "Enter here")
let aqOb=document.getElementById("aq")
    let aqAddButtonOb=document.getElementById("aqAddButton") 
     aqOb.insertBefore(newNode, aqAddButtonOb)
}    


function addNewHBField(){
    // console.Log("Adding new field"); 

    let newNode=document.createElement("textarea") 
    newNode.classList.add("form-control")
    newNode.classList.add("hbField")
    newNode.classList.add("mt-2") 
    newNode.setAttribute("rows", 3) 
    newNode.setAttribute("placeholder", "Enter here") 
let hbOb=document.getElementById("hb")
    let hbAddButtonOb=document.getElementById("hbAddButton") 
     hbOb.insertBefore(newNode, hbAddButtonOb)
}    




//generating cv 
function generateCV(){
    //console.log("generating CV") 

    let nameField=document.getElementById("nameField").value 
      let nameT1=document.getElementById('nameT1') 
      nameT1.innerHTML=nameField 

      //direct 

      document.getElementById("nameT2").innerHTML=nameField 

      //contact 

      document.getElementById("contactT").innerHTML=document.getElementById("contactField").value 

      //address 

      document.getElementById("addressT").innerHTML=document.getElementById("addressField").value 
      
      //important links
      
      document.getElementById("fbT").innerHTML=document.getElementById("fbField").value 
      document.getElementById("linkedinT").innerHTML=document.getElementById("linkedinField").value 
      document.getElementById("instagramT").innerHTML=document.getElementById("instagramField").value  

      //hobbies 
      
      let  hbs=document.getElementsByClassName("hbField") 
      
      let str2=''
      
      for(let e of hbs) {
        str2+=`<li> ${e.value} </li>` 
      } 

      document.getElementById("hbT").innerHTML=str2 



      //objective 

      document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value 

      //work experience 

      let  wes=document.getElementsByClassName("weField") 
      
      let str=''
      
      for(let e of wes) {
        str=str+`<li> ${e.value} </li>` 
      } 

      document.getElementById("weT").innerHTML=str 

      //academic qualification  

      let  aqs=document.getElementsByClassName("aqField") 
      
      let str1=''
      
      for(let e of aqs) {
        str1+=`<li> ${e.value} </li>` 
      } 

      document.getElementById("aqT").innerHTML=str1 

      //code for setting image 

      let file=document.getElementById("imgField").files[0] 

      console.log(file) 

      let reader=new FileReader() 

      reader.readAsDataURL(file) 

      console.log(reader.result)  

      //set the image in the template 

        reader.onloadend=function(){

            document.getElementById("imgTemplate").src=reader.result 
        }


  document.getElementById("cv-form").style.display="none" 
  document.getElementById("cv-template").style.display="block" 

} 

//print cv 

function printCV() {
    window.print() 
}      

