##About TaintJS
TaintJS

##Browser Support
- Firefox
- Chrome
- Safari
- Opera
- IE [9/10]

##Quick Start
```
<script src='taint.js' taint config='hookpage'></script>
```

##Usage
```
<script src='taint.js'
        taint 
        config='hookpage hooktype=api level=autofix'
        scanner='xsscookie persistentcookie'>
</script>
```
- `taint` [required]
- `config`
 - `hookpage`
 - `hooktype` [ api | syntactic ]
 - `level` [ autofix | warning | confirm | forbid ]
- `scanner`
 - `xsscookie`
 - `persistentcookie`

##Examples
###Tracking
```
var data1 = document.cookie;
console.log('data1 is tainted: ' + data1.tainted);

data1 is tainted: true
```

```
var data2 = data1 + 'just';
console.log('data2 is tainted: ' + data2.tainted);

data2 is tainted: true
```

```
var data3 = data2;
data3 += 'test';
console.log('data3 is tainted: ' + data3.tainted);

data3 is tainted: true
```

```
var data4 = data3.toString();
console.log('data4 is tainted: ' + data4.tainted);

data4 is tainted: true
```

```
var data5 = data4.substring(0,5);
console.log('data5 is tainted: ' + data5.tainted);

data5 is tainted: true
```

```
var data6 = data5.substr(0,3);
console.log('data6 is tainted: ' + data6.tainted);

data6 is tainted: true
```

###Detection
```
var data7 = document.cookie;
document.getElementById('content').innerHTML = data7;

DOM Element is tainted: by innerHTML; [ ID: content, Type: DIV ]
```

```
var data8 = document.cookie;
document.getElementById('photo').setAttribute('src', data8);

DOM Element is tainted: by setAttribute; [ ID: photo, Type: IMG, Detail: src ]
```

```
var data9 = document.cookie;
document.write(data9);

DOM Element is tainted: by write; [ Type: document ]
```

