//MÔ HÌNH 3 KHỐI
/**
 * - Đầu vào:
 * - Xử lý:
 * - Đầu ra:
 *    +In kết quả tổng
 */

 
// Bài 1
/**
 * - Đầu vào: Nhập lương 1 ngày và số ngày làm
 *  + Lương 1 ngày
 *  + Số ngày làm: 20
 * -Xử lý:
 * + Lương tổng = Lương 1 ngày * số ngày làm
 * -Xuất kết quả ra console
  */ 
 var luong1ngay = 100000;
 var soNgaylam = 20;

 var luongTong = luong1ngay*soNgaylam;
 var result = "Lương nhận được: " + luongTong;
 console.log(result);

 // Bài 2
/**
 * - Đầu vào: Nhập 5 số thực
 *  + Số thực thứ 1: 5
 *  + Số thực thứ 2: 6 
 *  + Số thực thứ 3: 7
 *  + Số thực thứ 4: 8
 *  + Số thực thứ 5: 9
 * -Xử lý:
 * + Trung bình = Số thực thứ 1 + Số thực thứ 2 + Số thực thứ 3 + Số thực thứ 4+ Số thực thứ 5
 * -Xuất kết quả ra console
  */ 
var soThuc1 = 5;
var soThuc2 = 6;
var soThuc3 = 7;
var soThuc4 = 8;
var soThuc5 = 9;
var trungBinh = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5)/5;
console.log("Giá trị trung bình là: " + trungBinh);

// Bài 3
/**
 * - Đầu vào: Nhập số tiền usd cần quy đổi
 *  + Nhập số usd: 5
 * -Xử lý:
 * + vietNam = Số usd * 23500
 * -Xuất kết quả ra console
  */ 
var usd = 5;
var vietNam = usd * 23500;
console.log("Tiền quy đổi là: " + vietNam);

// Bài 4
/**
 * - Đầu vào: Nhập 2 cạnh hình chữ nhật
 *  + chieuDai: 8
 *  + chieuRong: 4
 * -Xử lý:
 * + Diện tích = chieudai * chieuRong
 * -Xuất kết quả ra console
  */ 
var chieuDai = 8;
var chieuRong = 4;

var dienTich = chieuDai * chieuRong;
var chuVi = ( chieuDai + chieuRong ) * 2;
console.log("Diện tích là: " + dienTich);
console.log("Chu vi là: " + chuVi);

//Bài 5
/**
 * - Đầu vào: Nhập một số no có 2 chữ số
 *  + Nhập số: 23
 * -Xử lý:
 * + Tách số hàng chục: ten = Math.floor(n%10);
 * +Tách số hàng đơn vị: unit = n%10;
 * +Tổng 2 ký số vừa nhập: tong = ten + unit;
 * -Xuất kết quả ra console
  */ 
 var number = 23;

 var chuc = Math.floor(number/10);
 var donVi = number%10;
 
 var tong = chuc + donVi;
 console.log("Kết quả là: " +tong);
 