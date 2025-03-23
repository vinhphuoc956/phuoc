// <!-- <button onclick="document.getElementById('ten').src='static/image/anh98.jpg'">bat den</button>
//   <img id="ten" src="static/image/anh98.jpg" style="width: 100px;">
//   <button onclick ="document.getElementById('ten').src='static/image/anh99.jpg'">tat den</button> -->



//   <!-- vidu3  thây đổi kiểu chữ-->
//    <!-- <p id="baitap">Nguyen ho vinh huoc</p>
//    <button type="button" onclick="document.getElementById('baitap').style.fontSize='100px'">link nhap!</button> 
//    </button> -->



//    <!--vidu4 ẩn font chữ-->
//     <!-- <p id="baitap">Nguyen ho vinh huoc</p>
//    <button type="button" onclick="document.getElementById('baitap').style.display='none'">link nhap!</button> 
//    </button> -->


//    <!--vudu5  tính bình phương-->
// <!-- <script type="text/javascript">
//   function Tinh() {
//     var number = document.getElementById("number").value;
//     alert( number * number);
//   }




// </script>
// <form>
//   nhập số:<input type="text" id="number" name="number"/><br>
//   <input type="button" value="phuoc" onclick="Tinh()"/></form>
//   </body>
// </html> -->
  



// <!-- <p id="demo"></p>// ****biến
// <script>
//   let y = 5;//giá trị này xẽ mất đi khi tính
//   x = 5;
//   x = x + x;
// alert(x);
// document.getElementById("demo").innerHTML=x;
// </script> -->
 




// <!-- <p id="demo"></p>

// <script>
// // Create an Array:
// const cars = ["Saab", "Volvo", "BMW"];

// // Change an element:
// cars[0] = "Toyota";// se thây đổi phần tử trên

// // Add an element:
// cars.push("Audi"); // thêm phần tử trên

// // Display the Array:
// document.getElementById("demo").innerHTML = cars; 
// </script>
//  -->


// <!-- <p id="demo"></p>
// <script>
// let numbers = [1, 2, 3, 4];
// numbers[0] =  // Gán giá trị mới cho phần tử đầu tiên
// console.log(numbers); // [10, 2, 3]
// </script> -->



// <!-- <p id = "demo"></p>
// <script>
//  let text1 ="5";
//  let text2 ="2";
//  let result = text1 < text2 ;
//  document.getElementById("demo").innerHTML=result;
//  </script>
//    -->


// // ép kiểu dữ liệu:
// //xuất thông báo cho người dùng nhập vào số a 
// let numbera= prompt( "mời bạn nhập vào : ");
// // check thử kiễu loại  biến numbera
// console.log ( typeof  numbera );
// // thuc hien tính toán ( nếu chua ép kiểu)
// let numberb= 5;
// console.log ( typeof numberb);
// // cộng a và b 
// let  kq = numbera + numberb;
// console.log(`tong hop  : ${kq}` );
// //
// let numberc = parseInt(prompt( "nhap vao:"));
// console.log(numberc);
// console.log(typeof numberc);



//toán tử logic
// let i = 7;
// //kiểm tra xem i > 0 và i<10 không?
// console.log(!( i > 0 || i < 10));


var t =3;
var u = 4;
{
    var t = 5;
    var u = 6;
    console.log(t,u);
}

console.log(t,u);