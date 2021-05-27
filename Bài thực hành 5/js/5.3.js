  
  function DangKy() {
            var hoten  =  document.getElementById("txt_hoten").value;
            if(hoten == "" || hoten.length > 50) {
                document.getElementById("err_hoten").innerHTML ="Có lỗi";
            }
        }   