function filter(){

var search=document.getElementById('search').value;
var cards=document.getElementsByClassName('card')

for(i=0; i< cards.length;i++)
{
  let card=cards[i];
  let title= card.getElementsByTagName("h4");
if(title[0].innerHTML.indexOf(search)==-1)
{
console.log(title)

  card.style.display= "none";
}
else {
  card.style.display= "";
}
}

}

// =========

// function myFunction() {
//   var input, filter, ul, li, a, i, txtValue;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   ul = document.getElementById("myUL");
//   li = ul.getElementsByTagName("li");
//   for (i = 0; i < li.length; i++) {
//       a = li[i].getElementsByTagName("a")[0];
//       txtValue = a.textContent || a.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//           li[i].style.display = "";
//       } else {
//           li[i].style.display = "none";
//       }
//   }
// }