document.cookie = "testset=alsdkjflksdjfl; domain=.iliwoy.com; path=/;";
var tt = new String("csd");
var cookieStr = document.cookie + "vvcccc";
console.log(cookieStr);
console.log("cookieStr taint: " + cookieStr.tainted);
