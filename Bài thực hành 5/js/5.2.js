// lấy thứ ngày tháng năm phút giây
var thongbao ='Bạn có chắc chắn muốn xem ngày giờ không..?';
alert(thongbao);
var today = new Date();
var date = today.getDate()+"-"+(today.getMonth()+1)+"-"+(today.getFullYear());
var time = today.getHours()+";"+today.getMinutes()+";"+today.getSeconds();
var thungaythang = today.getDay();
switch(thungaythang){
    case 0:
    thungaythang  = "Chủ nhật";
    break;
  case 1:
    thungaythang = "Thứ hai";
    break;
  case 2:
    thungaythang = "Thứ ba";
    break;
  case 3:
    thungaythang = "Thứ tư";
    break;
  case 4:
    thungaythang = "Thứ năm";
    break;
  case 5:
    thungaythang = "Thứ sáu";
    break;
  case  6:
    thungaythang = "Thử bảy"; 
    break;
}

var dateTime = thungaythang +" , "+ date +" "+time;
document.getElementById("ngaygio").innerHTML= dateTime;