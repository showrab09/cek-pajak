
//Json Data
var jsonData = [
  {
    "link": "http://36.67.59.193:8484/infopkb/",
    "code": "A"
  },
  {
    "link": "https://website.bapenda.jatengprov.go.id/page/new_sakpole",
    "code": "AA"
  },
  {
    "link": "https://samsatsleman.jogjaprov.go.id/cek/pajak",
    "code": "AB"
  },
  {
    "link": "https://website.bapenda.jatengprov.go.id/page/new_sakpole",
    "code": "AD"
  },
  {
    "link": "https://info.dipendajatim.go.id/esamsat/",
    "code": "AE"
  },
  {
    "link": "https://info.dipendajatim.go.id/esamsat/",
    "code": "AG"
  },
  {
    "link": "https://samsat-pkb2.jakarta.go.id/",
    "code": "B"
  },
  {
    "link": "https://dpkd.sumbarprov.go.id/info-pkb.html",
    "code": "BA"
  },
  {
    "link": "https://bpprd.sumutprov.go.id/e-samsat/pages/index.php?temp=menu14",
    "code": "BB"
  },
  {
    "link": "http://pkb.bapenda.lampungprov.go.id/pkb/",
    "code": "BE"
  },
  {
    "link": "https://bapenda.sumselprov.go.id/cek_pajak/teliti_ulang",
    "code": "BG"
  },
  {
    "link": "http://jambisamsat.net/infopkb.html",
    "code": "BH"
  },
  {
    "link": "https://bpprd.sumutprov.go.id/e-samsat/pages/index.php?temp=menu3",
    "code": "BK"
  },
  {
    "link": "https://bpprd.sumutprov.go.id/e-samsat/pages/index.php?temp=menu9",
    "code": "BK"
  },
  {
    "link": "https://esamsat.acehprov.go.id/",
    "code": "BL"
  },
  {
    "link": "https://badanpendapatan.riau.go.id/infopajak/",
    "code": "BM"
  },
  {
    "link": "https://dispenda.kepriprov.go.id/#infopajak",
    "code": "BP"
  },
  {
    "link": "https://bapenda.jabarprov.go.id/infopkb",
    "code": "D"
  },
  {
    "link": "http://dispenda.sulutprov.go.id/index.php?page=cekpajak",
    "code": "DB"
  },
  {
    "link": "https://bapendasulsel.web.id/",
    "code": "DD"
  },
  {
    "link": "https://esamsat.malukuprov.go.id/kiosk/kiosk.aspx",
    "code": "DE"
  },
  {
    "link": "https://esamsat.malutprov.go.id/kiosk/kiosk.aspx",
    "code": "DG"
  },
  {
    "link": "https://portal.bpdbali.id/infosamsat/",
    "code": "DK"
  },
  {
    "link": "https://bapendasulsel.web.id/",
    "code": "DP"
  },
  {
    "link": "https://bappenda.ntbprov.go.id/infopkb",
    "code": "DR"
  },
  {
    "link": "http://bapenda.sultengprov.go.id/pkb",
    "code": "DT"
  },
  {
    "link": "https://bapendasulsel.web.id/",
    "code": "DW"
  },
  {
    "link": "https://bapenda.jabarprov.go.id/infopkb",
    "code": "E"
  },
  {
    "link": "https://bappenda.ntbprov.go.id/infopkb",
    "code": "EA"
  },
  {
    "link": "https://bapenda.jabarprov.go.id/infopkb",
    "code": "F"
  },
  {
    "link": "https://website.bapenda.jatengprov.go.id/page/new_sakpole",
    "code": "G"
  },
  {
    "link": "https://website.bapenda.jatengprov.go.id/page/new_sakpole",
    "code": "H"
  },
  {
    "link": "https://website.bapenda.jatengprov.go.id/page/new_sakpole",
    "code": "K"
  },
  {
    "link": "https://info.samsatkalteng.id/",
    "code": "KH"
  },
  {
    "link": "http://simpator.kaltimprov.go.id/cari.php",
    "code": "KT"
  },
  {
    "link": "http://simpator.kaltimprov.go.id/cari.php",
    "code": "KU"
  },
  {
    "link": "https://info.dipendajatim.go.id/esamsat/",
    "code": "L"
  },
  {
    "link": "https://info.dipendajatim.go.id/esamsat/",
    "code": "M"
  },
  {
    "link": "https://info.dipendajatim.go.id/esamsat/",
    "code": "N"
  },
  {
    "link": "https://info.dipendajatim.go.id/esamsat/",
    "code": "P"
  },
  {
    "link": "http://180.250.219.60:81/cekpajak/",
    "code": "PA"
  },
  {
    "link": "https://website.bapenda.jatengprov.go.id/page/new_sakpole",
    "code": "R"
  },
  {
    "link": "https://info.dipendajatim.go.id/esamsat/",
    "code": "S"
  },
  {
    "link": "https://bapenda.jabarprov.go.id/infopkb",
    "code": "T"
  },
  {
    "link": "https://info.dipendajatim.go.id/esamsat/",
    "code": "W"
  },
  {
    "link": "https://bapenda.jabarprov.go.id/infopkb",
    "code": "Z"
  }
 ];




 

var selectedOption;
function getInputValue() {
  var dropdownElement = document.getElementById("myDropdown");
  selectedOption = dropdownElement.value;
  console.log("Selected option:", selectedOption);
  for(var data of jsonData){
    if(data.code==selectedOption){
      window.location.href = data.link;
    }
  }
}

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}