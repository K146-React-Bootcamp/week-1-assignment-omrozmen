//#region Cookie


//Create Cookie
// document.cookie = "name = omer faruk"
// document.cookie = "name= omer faruk; expires = 23 Sep 2022 12:00:00 UTC";
document.cookie = "name= omer faruk; expires=Cuma,23 Sep 2022 12:00:00 UTC; path=/;";

//Read Cookie
let cookie = document.cookie;                
document.cookie = "name='omerFaruk'; expires='Cuma,23 September 2023 12:00:00 UTC'; path=C:\\Masaustu";

var cookie_string = document.cookie;

var cerezler = document.cookie.split(";");
for (var i = 0; i < cerezler.length; i++) { 
	var cerez_degeri = cerezler[i].split("="); //'cerez_ismi=cerez_degeri' seklindeki verileri '=' ifadesine gore parcaliyoruz ve cerez_degeri degiskenine aktariyoruz
	if("cerez_ismi" == cookie_string[0].trim()) { //isminin 'cerez ismi' olup olmadigini kontrol ediyoruz. Esitse 
		alert(cookie_string[1]); //cerezin degerini ekrana yazdiriyoruz 
	} 
}



console.log(document.cookie)
console.log("document.cookie")

//#endregion
//#region Session
//Save Data
sessionStorage.setItem("key", "value");

//Read Data
let keyData = sessionStorage.getItem("key");
console.log(keyData);
//Remove Data 
sessionStorage.removeItem("key");
//Remove All SessionData
sessionStorage.clear();

console.log("session")
// //#region Session App



// const form = document.querySelector('form');
// const ul = document.querySelector('ul');
// const button = document.querySelector('button');
// const input = document.getElementById('item');
// let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// localStorage.setItem('items', JSON.stringify(itemsArray));
// const data = JSON.parse(localStorage.getItem('items'));

// const liMaker = (text) => {
//   const li = document.createElement('li');
//   li.textContent = text;
//   ul.appendChild(li);
// }

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   itemsArray.push(input.value);
//   localStorage.setItem('items', JSON.stringify(itemsArray));
//   liMaker(input.value);
//   input.value = "";
// });

// data.forEach(item => {
//   liMaker(item);
// });

// button.addEventListener('click', function () {
//   localStorage.clear();
//   while (ul.firstChild) {
//     ul.removeChild(ul.firstChild);
//   }
//   itemsArray = [];
// });
// //#endregion
//#endregion