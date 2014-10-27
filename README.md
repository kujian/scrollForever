scrollForever
=============

jQuery scrollForever plugin


- plugin name: scrollForever
- plugin author: caibaojian
- plugin url: http://caibaojian.com/scrollForever
- plugin demo: http://caibaojian.com/demo/scrollForever/
- license: MIT

##How it work


<pre><code style="color: inherit;">&lt;script type="text/javascript" src="js/jquery.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="scrollForever.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript"&gt;
$(function(){
$("#a1").scrollForever();
})
&lt;/script&gt;</code></pre>
HTML代码为：
<pre><code>&lt;div class="a" id="a1"&gt;
&lt;ul&gt;
&lt;li&gt;1&lt;/li&gt;
&lt;li&gt;2&lt;/li&gt;
&lt;li&gt;3&lt;/li&gt;
&lt;li&gt;4&lt;/li&gt;
&lt;li&gt;5&lt;/li&gt;
&lt;li&gt;6&lt;/li&gt;
&lt;li&gt;7&lt;/li&gt;
&lt;li&gt;8&lt;/li&gt;
&lt;li&gt;9&lt;/li&gt;
&lt;li&gt;10&lt;/li&gt;
&lt;li&gt;11&lt;/li&gt;
&lt;li&gt;12&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;</code></pre>
CSS代码
<pre><code>.a{height: 200px; width:800px; overflow: hidden; margin:10px auto;}
.a li{height: 198px; width: 198px; border:1px solid #ddd; line-height: 2.4; font-size: 30px; text-align: center; float: left;}</code></pre>

##configs setting


| config name | default value | config description        |
|-------------|---------------|---------------------------|
| continuous  | true          | if scroll forever         |
| placeholder | 0             | the placeholder of scroll |
| dir         | 'left'        | scroll direction          |
| container   | 'ul'          | the container element     |
| innner      | 'li'          | the children element      |
| speed       | 1000          | speed                     |
| delayTime   | 0             | scroll delaytime          |
| num         | 1             |                           |

中文用户请看本站介绍：http://caibaojian.com/scrollforever 

####如果觉得有用的话，请下载的同时点一下Star和Fork，您的支持是我努力的动力。

v1.0

2014.10.27

增加了基本的设计和参数，支持两种连续和非连续无缝滚动。下一版本将会考虑增加分页和上一页和下一页导航。