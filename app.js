function convertTolowercase(){
   let input= "HELLO HOW ARE YOU"
let output = input.toLowerCase()
document.getElementById("outputvalue").innerHTML =  "Orignial text  <span style='color: green;'> " +input +  "</span>  And convert to Lowercase. <br>  Output is: "  + "<span class='text-primary'><q>" + output + "<span?";
}
function convertTouppercase(){
   let input= "hello how are you"
let output = input.toUpperCase()
document.getElementById("outputvalue").innerHTML =  "Orignial text  <span style='color: green;'>" +input +  "</span>  And convert to Uppercase. <br>  Output is: "  + "<span class='text-primary'><q>" + output + "<span?";
}
// function convertTocapitalize(){
//    let input= "hello how are you";
// let output = input.style.textTransform = "capitalize";
// document.getElementById("outputvalue").innerHTML =  "Orignial text  <span style='color: green;'>" +input +  "</span>  And convert to Uppercase. <br>  Output is: "  + "<span class='text-primary'>" + output + "<span?";
// }
let addCity;
let cities =["Faisalabad","Isalamabad",'Karachi',"Peshawar","Rawalpindi","Lahore","Multan"];
function printallCities(){
   for (let index = 0; index < cities.length; index++) {
      document.getElementById("outputvalue").innerHTML += index+1 +")"+ cities[index] +"<br>"   
   }
}
function addcityList(){
   let inputName =document.getElementById("inputvalue").value;
   if (!inputName){
       alert("Please enter your city")
   return;
   }
   cities.push(inputName)
   
   let output= "";
   for (let index = 0; index < cities.length; index++) {
       output += index+1 + ") " + cities[index] + "<br>";
   document.getElementById("outputvalue").innerHTML = output;
   }
}
function checkcity(){
   let inputName =document.getElementById("inputvalue").value;
   let output= "";
   if (!inputName){
      alert("Please enter your city")
  return;
  }
  for (let index = 0; index < cities.length; index++) {
       if(inputName == cities[index]){
   document.getElementById("outputvalue").innerHTML = "This city name is already in this <br> List <span class= 'text-success' >'" + inputName  + "' &#128525;  </span>";
   btn= true;
   return;
       
}
       else{
   document.getElementById("outputvalue").innerHTML = "Thank you add your city name <br>in List <span class= 'text-success' >'" + inputName  + "' &#128525;  </span>";

       
}
       
            }


}
function findThisWord(){
   let inputName =document.getElementById("inputvalue").value.toLowerCase();
   let originalText = document.getElementById("textOriginal").innerHTML.toLowerCase();
   let findword=  originalText.indexOf(inputName);
   // console.log(findword)
   
   document.getElementById("outputvalue").innerHTML = "This word at the indexOf <span class='text-success'> <q>" + findword +"</span>";

  
}
function replaceWord() {
   let inputWord = document.getElementById("inputvalue").value;
   let originalText = document.getElementById("textOriginal").innerHTML;
   let replacedText = originalText.replaceAll("love", inputWord);
   document.getElementById("outputvalue").innerHTML = replacedText;
}
 function clearoutpu(){
  document.getElementById("inputvalue").value = "";
document.getElementById("outputvalue").innerHTML = "";

 }





 
 