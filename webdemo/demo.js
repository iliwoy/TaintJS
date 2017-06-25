function log(data) {
    console.log(data);
}
TaintJS.Utils.log = log;
var data1 = document.cookie;
log('data1 is tainted: ' + data1.tainted);

var data2 = data1 + 'just';
log('data2 is tainted: ' + data2.tainted);

var data3 = data2;
data3 += 'test';
log('data3 is tainted: ' + data3.tainted);

var data4 = data3.toString();
log('data4 is tainted: ' + data4.tainted);

var data5 = data4.substring(0,5);
log('data5 is tainted: ' + data5.tainted);

var data6 = data5.substr(0,3);
log('data6 is tainted: ' + data6.tainted);

var data7 = document.cookie;
document.getElementById('content').innerHTML = data7;

var data8 = document.cookie;
document.getElementById('photo').setAttribute('src', data8);

var data9 = document.cookie;
document.write(data9);
