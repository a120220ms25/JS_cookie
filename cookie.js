function adclose() {
  document.getElementById("myFull").style.display = "none";
}
function adgoto() {
  window.open("https://www.zoo.gov.taipei/", "blank");
}


/*select*/
console.log(document.cookie); //可以看到目前有哪些cookie
/*insert*/
document.cookie="watchedAd=no"; //寫入 cookie某變數 watchAd=yes
/*update*/
document.cookie="watchedAd=yes"; //再一次覆蓋就好
/*delete*/
//指定 N 秒無效的時間 UTC，所以先利用 date()->變數 d->跑出一個無效時間，再轉 UTC 表示法

// var dd = new Date();
// lifeSec = 5; //N=5
// dd.setTime(dd.getTime()+(lifeSec * 1000)); //d 取得 (get) 更新回存 (set) 到 d

//dd.toUTCString() <=> "Wed, 24 Jul 2019 09:14:41 GMT"
// document.cookie="watchedAd=yes;expires="+dd.toUTCString();

// function findCook1(name) {
//   let ckary = document.cookie.split("; "); //割除分開為array
//   let getck = ckary.find(function (e) {
//     return (name + "=" === e.substr(0, name.length + 1)); //比對每個開頭名字且下符號為等於，並且長度一致時，第一個就回傳設定為getck
//   });

//   if (getck != undefined) {
//     return getck.split("=")[1]
//   }else{
//      return false;
//   }
// }
//   // var value = getck.split("="); //將=拿掉分為陣列，第[1]格就是我們的值
//   // return value[1];
 


// //指定cookie時間
// //開始指定 cookie，有同時有效時間為午夜前
// var eatCook=findCook1("watchedAd");
// if(!eatCook){//還沒有設定
//   var end = new Date(); //先取得現在，再修改成午夜前的時間（以 UTC 時區+0 為值）
//   end.setHours(20),end.setMinutes(27),end.setSeconds(00);
//   document.cookie = "watchedAd=yes;expires=" + end.toUTCString();
// }else{
//   document.getElementById("myFull").remove(); //移除該廣告 div
// } 