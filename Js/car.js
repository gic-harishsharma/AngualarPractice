function ClickCarName(a, carname) {
   debugger;

   var Car = document.getElementById("Car");
   var cars = document.getElementById("cars");
   var getclickcounthidden = document.getElementById(carname);
   var countr = document.getElementById("countr");
   var num= parseInt(getclickcounthidden.value);
   if (!cars.innerHTML.includes(carname)) {
       Car.innerText = carname.toUpperCase();
       cars.innerHTML = '<img src="Images/' + carname + '.jpg"   onclick="RaiseCount(\''+carname+'\')" >';
       countr.innerText=num;
       ResetList();
       a.setAttribute("class", "active");
   }
//    } else {
//        getclickcount.value =num+ 1;
//        countr.innerText = num + 1;
//    }

}
function RaiseCount(carname){
    debugger;
    var getclickcounthidden = document.getElementById(carname);
    var countr = document.getElementById("countr");
    var num= parseInt(getclickcounthidden.value);
    getclickcounthidden.value =num+ 1;
   countr.innerText = num + 1;
}
function ResetList() {
   debugger;
   for (var i = 0; i < document.getElementsByTagName("a").length; i++) {
       document.getElementsByTagName("a")[i].setAttribute("class", "")
   }
}
