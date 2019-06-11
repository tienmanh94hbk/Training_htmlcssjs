var eBieuThuc;
var bieuThuc='';
var phepToan = '';
var ePhepTinh;
var ketQua = 0;
var eKetQua;
var a=0;
document.addEventListener("DOMContentLoaded", function () {
    ePhepTinh = document.getElementById("pheptinh");
    eKetQua = document.getElementById("result");
});
function hienThiResult() {
     eKetQua.innerText = ketQua;
}
function hienThiBieuThuc() {
    ePhepTinh.innerText = phepToan;

}
function clickKyTuSo(value) {
    if(ketQua === 0){
        if(phepToan!==''){
            ketQua = value;
            phepToan =bieuThuc;
            hienThiResult();
            hienThiBieuThuc();
        }else {
            ketQua = value;
            hienThiResult();
        }
    }else{
        if(value==="." && ketQua.indexOf(".")<0) {
            ketQua = ketQua + value;
            hienThiResult();
        }else if(value==="." && ketQua.indexOf(".")>0){
            return;
        }else {
            ketQua = ketQua + value;
            hienThiResult();
        }


    }
}
function clickPhepTinh(value) {
    if(ketQua===0){
        phepToan= 0+" "+value;
        bieuThuc = phepToan;
        hienThiBieuThuc();
        ketQua=0;
        hienThiResult();
    }else {
        if(phepToan===''){
            phepToan = ketQua +" "+ value;
            bieuThuc = phepToan;
            hienThiBieuThuc();
            ketQua=0;
            hienThiResult();
        }else {
            phepToan = bieuThuc+" "+ketQua+value;
            bieuThuc= phepToan;
            hienThiBieuThuc();
            a =phepToan.slice(0,phepToan.length-1);
            ketQua= eval(a);
            hienThiResult();
            ketQua=0;
        }
    }
}
function clickPhepToanBang() {
    if(phepToan===''){
        return;
    }else {
        ketQua= eval((phepToan+ketQua))
        hienThiResult();
        phepToan='';
        hienThiBieuThuc();
    }
}
function clickDauXoa() {
        if(ketQua===0){
            return;
        }else {
            if(ketQua.length>1) {
                ketQua = ketQua.substring(0, ketQua.length - 1);
                hienThiResult();
            }else {
                ketQua = 0;
                hienThiResult();
            }
        }
}
function clickC() {
    ketQua=0;
    phepToan='';
    a='';
    hienThiResult();
    hienThiBieuThuc();
}
function clickCE() {
    ketQua=0;
    hienThiResult();
}
function clickDauCongTru() {
        if(ketQua===0){
            return;
        }else {
            if(ketQua.indexOf("-")<0){
            ketQua = '-'+ketQua;
            hienThiResult();
        } else {
            ketQua= ketQua.slice(1,ketQua.length);
            hienThiResult();
            }
        }
}
function tinhPhanTram() {
    if(ketQua!==0){
        if(phepToan!==''){
        ketQua= ketQua/100;
        hienThiResult();
        }else {
            return;
        }
    }else{
        phepToan=0;
        hienThiBieuThuc();
    }
}
function tinhCanHai() {
    if(ketQua!==0){
        ketQua = Math.sqrt(ketQua);
        hienThiResult();
    }else {
        return;
    }
}
function tinhBinhPhuong() {
    if(ketQua!==0){
        ketQua= ketQua*ketQua;
        hienThiResult();
    }else {
        return;
    }
}
function tinhNghichDao() {
    if(ketQua!==0){
        ketQua=1/ketQua;
        hienThiResult();
    }else {
        return;
    }
}
