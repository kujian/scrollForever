scrollForever
=============

jQuery无缝滚动插件
- plugin name: scrollForever
- plugin author: caibaojian
- plugin url: https://qdkfweb.cn/scrollForever
- plugin demo: https://qdkfweb.cn/demo/scrollforever/
- license: MIT

## How it work

```html
<style type="text/css">
.a{height: 200px; width:800px; overflow: hidden; margin:10px auto;}
.a li{height: 198px; width: 198px; border:1px solid #ddd; line-height: 2.4; font-size: 30px; text-align: center; float: left;}
</style>

<div class="a" id="a1">
<ul>
<li>1</li>
<li>2</li>
<li>3</li>
<li>4</li>
<li>5</li>
<li>6</li>
<li>7</li>
<li>8</li>
<li>9</li>
<li>10</li>
<li>11</li>
<li>12</li>
</ul>
</div>

<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="scrollForever.js"></script>
<script type="text/javascript">
$(function(){
$("#a1").scrollForever();
})
</script>
```



## configs setting


| config name | default value | config description        |
|-------------|---------------|---------------------------|
| continuous  | true          | if scroll forever         |
| placeholder | 0             | the placeholder of scroll |
| dir         | 'left'        | scroll direction          |
| container   | 'ul'          | the container element     |
| innner      | 'li'          | the children element      |
| speed       | 1000          | speed                     |
| delayTime   | 0             | scroll delaytime          |
| num         | 1             | scroll num                |

中文用户请看本站介绍：https://qdkfweb.cn/scrollforever 

## 如果觉得有用的话，请下载的同时点一下Star和Fork，您的支持是我努力的动力。

v1.0

2014.10.27

增加了基本的设计和参数，支持两种连续和非连续无缝滚动。下一版本将会考虑增加分页和上一页和下一页导航。
