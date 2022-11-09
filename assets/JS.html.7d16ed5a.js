import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c,a as n,d as e,e as i,b as o,f as l,r as a}from"./app.eb0a2683.js";const r={},u=e("h2",{id:"数据类型",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#数据类型","aria-hidden":"true"},"#"),i(),e("strong",null,[e("code",null,"数据类型")])],-1),v=e("h3",{id:"js有哪些数据类型",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#js有哪些数据类型","aria-hidden":"true"},"#"),i(" Js有哪些数据类型？")],-1),m=e("p",null,"其中原始数据类型+引用数据类型",-1),b=e("ul",null,[e("li",null,[i("六种："),e("code",null,"undefined、null、number、boolean、string、symbol、bigint")])],-1),p=l("<ul><li>一种引用类型：Object</li></ul><p>原始数据类型和引用数据类型的主要区别在于**<code>存储位置不同</code>**：</p><p>原始数据类型存在于<code>栈</code>中的简单数据段，<code>大小固定、占据空间小</code>，适合被频繁使用的数据。</p><p>引用数据类型存在于<code>堆</code>中的对象，<code>占据空间大、大小不固定</code>，引用数据类型在栈中存放了地址指针，该指针指向该对象在堆中的引用值。</p><p>栈和堆的理解：</p><p>在<code>数据结构</code>层面，栈是先进后出的数据结构；而堆是一个优先队列，根据优先级来排序</p><p>在<code>操作系统</code>层面，内存会被分成栈区和堆区</p><ul><li>栈区内存有<code>编译器自动分配和释放</code>，存放函数的参数值、局部变量等</li></ul>",8),h=e("ul",null,[e("li",null,[i("堆内存"),e("code",null,"由开发者分配释放"),i("，如果不释放，程序结束可能会造成内存泄漏")])],-1),g=e("p",null,[i("ES6中新增的"),e("code",null,"symbol和bigint类"),i("型")],-1),f=e("ul",null,[e("li",null,[i("symbol类型，symbol类型是"),e("code",null,"为了解决全局对象命名冲突问题"),i("，symbol可以创建一个独一无二的键。")])],-1),x=l(`<ul><li>bigint是<code>为了解决大数问题</code>，存在-2^53 ~2^53(安全数)之外的数</li></ul><h3 id="检测数据类型的方法有哪些" tabindex="-1"><a class="header-anchor" href="#检测数据类型的方法有哪些" aria-hidden="true">#</a> <code>检测数据类型</code>的方法有哪些？</h3><ol><li><code>typeof</code> 只可以检测原始数据类型，对于引用数据类型并不适用</li></ol><p>typeof的返回值有<code>7种</code>结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>typeof undefined//undefined
typeof null//或[]、{} Object
typeof &#39;stri&#39;//string
typeof true//boolean
typeof 2//numner
typeof Symbol(&#39;2&#39;)//Symbol
typeof function(){}//function
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>为什么typeof null是&#39;object&#39; ，因为js将前三位为0的变量判定为引用数据类型，而null全部都是0</p></blockquote><ol start="2"><li><code>instanecof </code>只可以检测引用数据类型，对原始数据类型并不适用</li></ol><p><code>instanceof用于检测该对象的原型链上是否存在右边的类型(构造函数的prototype属性)</code></p><p>instanceof只能用于判断引用数据类型，而不能用于判断原始数据类型</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{} instanceof Object//true
[] instanceof Array//true
function(){} instanceof Function//true

false instanceof Boolean//false
2 instanceof Number//false
&#39;str&#39; instanceof String//false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>instanceof的实现原理</code>（手写）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function instancof_(L,R){
    if(typeof L !==&quot;object&quot;&amp;&amp; L==null){
        return false;
    }
    R = R.prototype;
    L = L.__proto__;//Object.getPrototypeOf(L);
    while(true){
        if(L == null) return false;
        if(L === R.prototype) return true;
        L = L.__proto__;//Object.getPrototypeOf(L);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><code>Object.prototype.toString.call() </code>可以判断所有数据类型</li></ol>`,13),_=e("ol",{start:"4"},[e("li",null,[e("code",null,"constructor "),i("实例可以通过constructor来访问构造函数")])],-1),y=e("h3",{id:"判断数组的方法有哪些",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#判断数组的方法有哪些","aria-hidden":"true"},"#"),i(),e("code",null,"判断数组"),i("的方法有哪些？")],-1),w=e("ol",null,[e("li",null,[e("code",null,"Object.prototype.toString.call(arr).silce(8,-1) === Array")])],-1),k=e("ol",{start:"2"},[e("li",null,[e("code",null,"Array.isArray(arr)")])],-1),j=e("ol",{start:"3"},[e("li",null,[e("code",null,"arr.__proto__ === Array.prototype")])],-1),O=l(`<ol start="4"><li><code>arr instanceof Array</code></li></ol><h3 id="undefined和null的区别" tabindex="-1"><a class="header-anchor" href="#undefined和null的区别" aria-hidden="true">#</a> <code>undefined和null</code>的区别</h3><p>字面意思：undefined是<code>未定义</code>，而null是<code>空对象</code>。undefined一般用于声明一个变量但未给它赋值，或者函数没有显示返回值时，而null则是人为的赋值为空对象。</p><h3 id="isnan和numer-isnan的区别" tabindex="-1"><a class="header-anchor" href="#isnan和numer-isnan的区别" aria-hidden="true">#</a> <code>isNaN和Numer.isNaN</code>的区别</h3><p>isNaN存在类型转换，而Number.isNaN不进行类型转换</p><p>比如</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>isNaN(&#39;s1&#39;)//先将里面的内容转成Number，如果结果是NaN, =&gt; true
Number.isNaN(&#39;s1&#39;)//先判断是不是Number，不是false,不存在类型转换
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_0-1-0-2-0-3-为什么" tabindex="-1"><a class="header-anchor" href="#_0-1-0-2-0-3-为什么" aria-hidden="true">#</a> <code>0.1 + 0.2 !==0.3</code>? 为什么？</h3><p><code>0.1转二进制小数</code>时：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0.1 * 2 = 0.2
0.2 * 2 = 0.4 // 注意这里
0.4 * 2 = 0.8
0.8 * 2 = 1.6
0.6 * 2 = 1.2
0.2 * 2 = 0.4 // 注意这里，循环开始
0.4 * 2 = 0.8
0.8 * 2 = 1.6
0.6 * 2 = 1.2
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有限十进制的<code>0.1</code>转化成了无限二进制小数的<code>0.00011001100...</code>,所以导致了转化发生精度丢失。所以十进制中一位小数<code>0.1~0.9除了0.5</code>之外其他值在转化二进制的过程中都丢失了精度。</p><p><code>精度解决方案</code></p><ol><li>大数使用bigInt</li></ol>`,13),E=l(`<ol start="2"><li>使用<code>toFixed </code>四舍五入</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>parseFloat((0.1 + 0.2).toFixed(10))//0.3
parseFloat((0.3 / 0.1).toFixed(10))//3
parseFloat((0.1 * 0.2).toFixed(10))//0.02
parseFloat((0.7 * 180).tpFixed(10))//126
parseFloat((1.0 - 0.9).toFixed(10))//0.1
parseFloat((9.7 * 100).toFixed(10))//970
parseFloat((2.22 + 0.1).toFixed(10))//2.32
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>小数加法</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function add(num1, num2) {
  const num1Digits = (num1.toString().split(&#39;.&#39;)[1] || &#39;&#39;).length;
  const num2Digits = (num2.toString().split(&#39;.&#39;)[1] || &#39;&#39;).length;
  const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));//取两个长度最大的
  return (num1 * baseNum + num2 * baseNum) / baseNum;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>确保一个数字的精确</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function strip(num,precision=12){
    return +parseFloat(num.toPrecision(precision));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="、-和object-is-的区别" tabindex="-1"><a class="header-anchor" href="#、-和object-is-的区别" aria-hidden="true">#</a> <code>==、===和Object.is()</code> 的区别</h3><p><strong><code>==</code>的隐式类型转换规则：</strong></p><ol><li>如果两边都是<code>布尔值</code>，则都转成<code>数值</code>，再进行比较</li></ol>`,9),N=e("ol",{start:"2"},[e("li",null,[i("如果一个是"),e("code",null,"字符串"),i("，一个是"),e("code",null,"数值"),i("，尝试将"),e("code",null,"字符串转成数值"),i("，再进行比较")])],-1),q=l(`<ol start="3"><li>如果一个是<code>对象</code>，而另一个不是，则先使用<code>valueOf</code>的方法取到原始值，再进行比较</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const str1 = &#39;abc&#39;;
const str2 = new String(&#39;abc&#39;);
str1 == str2 //true str2调用了valueOf取得原始值
str1 === str2 //false 类型不同
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>如果两个都是<code>对象</code>，则先判断两个对象是否属于<code>同一块内存地址</code>，是返回<code>true</code></li></ol>`,3),S=e("ol",{start:"5"},[e("li",null,[e("code",null,"undefined和null相等"),i("，不进行类型比较")])],-1),T=l(`<ol start="6"><li><code>NaN</code>跟<code>任何值</code>比较都是<code>false</code>,<code>NaN自身</code>比较也是<code>false</code></li></ol><p>比较~~<strong>坑的</strong>~~比较</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&#39;&#39; == &#39;0&#39; // false
0 == &#39;&#39; // true
0 == &#39;0&#39; // true false == &#39;false&#39; // false
false == &#39;0&#39; // true false == undefined // false
false == null // false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><strong><code>===</code></strong> 是全等的比较</strong></p><p><code>不进行类型转换</code>，如果类型不相等，直接返回false</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>undefined === null/false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><strong><code>Object.is(a,b)</code></strong> 的判断</strong></p><p>判断规则和<code>===</code>类似，但是对于<code>NaN</code>和<code>+0</code>和<code>-0</code>的判断规则有不同之处：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Object.is(NaN,NaN)//true
NaN === NaN//false

Object.is(+0,-0)//false
+0 === -0//true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="parseint和number-的显示类型转换规则" tabindex="-1"><a class="header-anchor" href="#parseint和number-的显示类型转换规则" aria-hidden="true">#</a> **<code>parseInt和Number</code>**的显示类型转换规则</h3><p><code>parseInt()</code></p><ul><li>boolean = &gt;NaN</li></ul>`,12),A=e("ul",null,[e("li",null,"null、undefined => NaN")],-1),F=e("ul",null,[e("li",null,"空字符串 => NaN")],-1),C=e("ul",null,[e("li",null,[i("数字开头的字符串："),e("code",null,"-12x"),i("=>"),e("code",null,"-12"),i("、非数字开头的=>NaN")])],-1),L=e("p",null,[e("code",null,"Number()")],-1),B=e("ul",null,[e("li",null,"boolean => 1/0")],-1),H=e("ul",null,[e("li",null,"null=>0 、undefined=>NaN")],-1),I=e("ul",null,[e("li",null,"空字符串 => 0")],-1),M=l(`<ul><li>含非数字的=&gt;NaN</li></ul><blockquote><p><code>[&#39;1&#39;, &#39;2&#39;, &#39;3&#39;].map(parseInt) </code>的结果是什么？<code>1 NaN NaN</code></p></blockquote><p><code>Array.prototype.parseInt((curVal,index,arr),this)</code> , <code>[&#39;1&#39;, &#39;2&#39;, &#39;3&#39;].map(parseInt)</code>被分解之后就是parseInt(&#39;1&#39;,0) 、 parseInt(&#39;2&#39;,1) 、 parseInt(&#39;3&#39;,2)</p><ul><li>parseInt第二个参数表示进制</li><li><ul><li><code>parseInt(&#39;1&#39;,0)</code>参数为0，默认10进制</li><li><code>parseInt(&#39;2&#39;,1) </code>参数为1，不符合<code>NaN</code></li><li><code>parseInt(&#39;3&#39;,2)</code> 二进制没有3，返回<code>NaN</code></li></ul></li></ul><h3 id="boolean-显示类型转换" tabindex="-1"><a class="header-anchor" href="#boolean-显示类型转换" aria-hidden="true">#</a> <code>Boolean()</code>显示类型转换</h3><p>将任意类型的值转为布尔值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Boolean(undefined)//false
Boolean(null)//false
Boolean(NaN)//false
Boolean(&#39;&#39;)//false
Boolean({})//true
Boolean([])//true
Boolean(new Boolean(false))//true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="赋值、深浅拷贝" tabindex="-1"><a class="header-anchor" href="#赋值、深浅拷贝" aria-hidden="true">#</a> <strong>赋值、深浅拷贝</strong></h2><p>深浅拷贝是对于Object或Array这样的引用类型而言</p><ul><li><code>赋值</code>是将该对象在栈中的<code>地址</code>赋值给另一个对象，而不是堆中的数据，两个对象指向的是同一个存储空间，哪个对象改变都会改变存储空间中的内容，对象联动。</li></ul>`,10),R=e("ul",null,[e("li",null,[e("code",null,"浅拷贝"),i("是"),e("code",null,"按位拷贝对象"),i("，它会创建一个新对象，这个对象有着"),e("code",null,"原始对象属性值的一份精确拷贝"),i("。如果属性是"),e("code",null,"基本类型"),i("，拷贝的就是基本类型的值；如果属性是内存地址(引用类型)，拷贝的就是内存地址，所以其中一个对象改变了这个地址，就会影响到另一个对象。")])],-1),J=l(`<ul><li><code>深拷贝</code>是开辟一个内存空间，复制一个一模一样的对象</li></ul><table><thead><tr><th></th><th>和原数据是否指向同一对象</th><th>第一层是原始值类型</th><th>原数据含子对象</th></tr></thead><tbody><tr><td>赋值</td><td>是</td><td>改变会一同改变</td><td>改变会使数据一同改变</td></tr><tr><td>浅拷贝</td><td>否</td><td>改变不会使原数据一同发生改变</td><td>改变会使原数据发生改变</td></tr><tr><td>深拷贝</td><td>否</td><td>改变不会使原数据一同发生改变</td><td>改变不会使原数据一同发生改变</td></tr></tbody></table><p><strong>浅拷贝</strong></p><ol><li><code>Object.assign() </code>第一层不联动，第二层开始联动</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var obj = {name:&#39;2&#39;,a:{b:&quot;code&quot;,c:&quot;code2&quot;}}
var obj2 = Object.assign({},obj)
obj2.name = &#39;3&#39;;
obj2.a.b = &#39;wode&#39;
console.log(obj.name)//&#39;2&#39; 拷贝了对象属性的引用，而不是本身，所以第一层原始数据不变
console.log(obj.a.b)//&#39;wode&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><code>Array.prototype.concat() &amp;&amp; Array.prototype.slice()</code></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr = [1,3,{username:&#39;cobe&#39;}]
let arr2 = arr.slice()
arr2[2].username = &#39;wode&#39;//第二层开始联动
console.log(arr[2].username)//wode
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>扩展运算符 <code>...[1,2,3]</code></li></ol><p><strong>深拷贝</strong></p><ol><li>使用<code>JSON.parse()</code>和<code>JSON.stringify()</code></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr = [1,3,{username:&#39;cobe&#39;}]
let arr2 = JSON.parse(JSON.stringkify(arr))
arr2[2].username = &#39;wobe&#39;
console.log(arr[2].username)//code 还是原值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>这种方法虽然可以实现对象或数组的深拷贝，但是不能处理函数、Date和Regexp内置对象</p></blockquote><ol start="2"><li>手写递归</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function deepClone(obj,hash = new WeakMap()){
    if(obj === null) return obj;
    if(obj instanceof Date) return new Date(obj);
    if(obj instanceof RegExp) return new RegExp(obj);
    //可能是对象或普通值 如果是函数的话是不需要深拷贝
    if(typeof obj !==&quot;object&quot;) return obj;
    //是对象的话进行深拷贝
    if(hash.get(obj)) return hash.get(obj)
    let cloneObj = new obj.constructor();
    //原型上的constructor指向当前类本身
    hash.set(obj,cloneObj);
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            cloneObj[key] = deepClone(obj[key],hash)
        }
    }
    return cloneObj
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组的常用方法" tabindex="-1"><a class="header-anchor" href="#数组的常用方法" aria-hidden="true">#</a> 数组的常用方法</h2><ol><li>可以改变数组的方法:<code> pop()、push()、shift()、unshift()、splice(index, num,value)、sort()、reverse()</code></li></ol>`,16),D=e("ol",{start:"2"},[e("li",null,"不能改变数组的方法：slice()、 concat()")],-1),P=e("ol",{start:"3"},[e("li",null,[i("查找数组方法"),e("code",null,"find "),i("返回查找的对象 "),e("code",null,"findIndex"),i("返回查找对象的下标")])],-1),z=l(`<ol start="4"><li><p>数组的遍历方法</p><ol><li>forEach(cb(val,index,arr),this) 遍历操作每个成员，没有返回值</li><li>map(cb(val,index,arr),this) 遍历操作每个成员，返回值构成数组</li><li>some(cb(val,index,arr),this) 全部成员执行回调，一个满足就返回true</li><li>every(cb(val,index,arr),this) 全部成员执行回调并都返回true, 结果才返回true</li><li>filter(cb(val,index,arr),this) 过滤得到满足条件的数组</li><li>reduce(cb(val,index,arr),this) 累积</li><li>reduceRight(cb(val,index,arr),this)从右到左累积</li></ol></li></ol><p><strong><code>难</code></strong></p><h3 id="手写foreach方法" tabindex="-1"><a class="header-anchor" href="#手写foreach方法" aria-hidden="true">#</a> 手写forEach方法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> Array.prototype.forEach = function(callback,thisArgs){
     if(this === null){
         throw new Error(&#39;this is null or not defined &#39;)
     }
     if(typeof callback!== &#39;function&#39;){
         throw new Error(&#39;callback is not a function&#39;)
     }
     const O = Object(this);
     const len = O.length &gt;&gt;&gt; 0;
     while(k &lt; len){
         if(k in O){
             callback.call(thisArgs,O[k],k,O);
         }
         k++;
     }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手写map方法" tabindex="-1"><a class="header-anchor" href="#手写map方法" aria-hidden="true">#</a> 手写map方法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array.prototype.map = function(callback,thisArgs){
    if(this === null){
         throw new Error(&#39;this is null or not defined &#39;)
     }
     if(typeof callback!== &#39;function&#39;){
         throw new Error(&#39;callback is not a function&#39;)
     }
     const result = []
     const O = Object(this);
     const len = O.length &gt;&gt;&gt; 0
     while(k &lt; len){
         if(k in O){
             result[k].push(callback.call(thisArgs,O[k],k,O))
         }
         k++;
     }
     return result;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手写some方法" tabindex="-1"><a class="header-anchor" href="#手写some方法" aria-hidden="true">#</a> 手写some方法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array.prototype.map = function(callback,thisArgs){
    if(this === null){
         throw new Error(&#39;this is null or not defined &#39;)
     }
     if(typeof callback!== &#39;function&#39;){
         throw new Error(&#39;callback is not a function&#39;)
     }
     let k=0,res = false;
     let O = Object(this);
     let len = O.length;
     while(k &lt; len){
         if(k in O){
             if(callback.call(thisArgs,O[k],k,O)){
                 return true;
             }
         }
     }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手写every方法" tabindex="-1"><a class="header-anchor" href="#手写every方法" aria-hidden="true">#</a> 手写every方法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array.prototype.every = function(){
    if(this === null){
         throw new Error(&#39;this is null or not defined &#39;)
     }
     if(typeof callback!== &#39;function&#39;){
         throw new Error(&#39;callback is not a function&#39;)
     }
     let k=0;res = false;
     let O = Object(this);
     let len = O.length
     while(k &lt; len){
         if(k in len){
             if(!callback.call(thisArgs,O[k],k,O)){
                 return false
             }
             if(k == len){
                 return true;
             }
         }
         k++;
     }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手写filter方法" tabindex="-1"><a class="header-anchor" href="#手写filter方法" aria-hidden="true">#</a> 手写filter方法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array.prototype.every = function(){
    if(this === null){
         throw new Error(&#39;this is null or not defined &#39;)
     }
     if(typeof callback!== &#39;function&#39;){
         throw new Error(&#39;callback is not a function&#39;)
     }
     let k=0;res = [];
     let O = Object(this);
     let len = O.length
     while(k &lt; len){
         if(k in len){
             if(callback.call(thisArgs,O[k],k,O)){
                 res.push(O[k])
             }
         }
         k++;
     }
     return res;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>手写reduce方法 简易版</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array.prototype.reduce = function(reducer,initialValue){
    const hasInitial = arguments.length &gt; 1;
    let res = hasgInitial?initialValue:this[0];//判断是否指定初始值
    for(let i=hasInitial?0:1;i&lt;this.length;i++){
        ret = reducer.call(undefined,ret,this[i],i,this)
    }
    return ret;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符串常用的方法" tabindex="-1"><a class="header-anchor" href="#字符串常用的方法" aria-hidden="true">#</a> 字符串常用的方法</h2><p>增：str.concat()</p><p>删：str.slice()、str.substr()、str.substring()</p><p>改: trim()、trimLeft()、trimRight()、repeat() 、replace(&#39;a&#39;,&#39;b&#39;)、padStart(len,&#39;fill&#39;)、padEnd(len,&#39;0&#39;) 、toLowerCase()、toUpperCase()、search(Regexc)</p><p>查: chatAt(index)、indexOf(val)、startWith(&#39;dd&#39;)、includes(str)</p><p>分割：split(&#39;+&#39;) 分割成数组</p><h2 id="作用域和作用域链" tabindex="-1"><a class="header-anchor" href="#作用域和作用域链" aria-hidden="true">#</a> 作用域和作用域链</h2><p><code>作用域</code>是<code>在代码运行时某些变量、函数和对象的可访问性</code>。作用域可以隔离变量，不同的作用域可以有相同的变量名，不会发生冲突。</p><p>作用域有：</p><ul><li>全局作用域： 可以在整个js脚本任意位置访问，一般生命在函数和花括号之外的地方</li></ul>`,24),V=e("ul",null,[e("li",null,"函数作用域：在函数内部声明的，只能在函数内部访问，在函数以外访问会报错。")],-1),X=l(`<ul><li>块级作用域：ES6中新增<code>let</code>和<code>const</code>声明的变量，在花括号内声明的，只能在花括号内使用。</li></ul><blockquote><p>词法作用域，又称静态作用域，即变量的作用域访问在其创建的时候已经确定，而非在运行时确定，js遵循的就是词法作用。</p></blockquote><p><code>作用域链</code>：当js中访问一个自由变量时，js引擎尝试在当前作用域在查找该变量，如果没找到，再到它的上一层级去寻找，以此类推直到查找全局作用域，如果全局作用域都没有，抛出错误。</p><h3 id="闭包-的理解及使用场景" tabindex="-1"><a class="header-anchor" href="#闭包-的理解及使用场景" aria-hidden="true">#</a> **<code>闭包</code>**的理解及使用场景：</h3><p>闭包(closure)是一个函数以及其捆绑的周边环境状态(lexical environment，词法环境)的<code>引用的组合</code>。即闭包可以让开发者从内部函数访问外部函数的作用域。再JavaScript中，闭包随函数的创建同时被同时创建。</p><p>使用场景：</p><ul><li>创建私有变量</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(function(){
var private Counter = 0;//私有变量
function changeBy(val){//私有函数(公共函数)
    privateCounter += val;
}
return :{//闭包使用私有变量
    increment:function(){
        changeBy(1);
    }
    decrement:function(){
        changeBy(-1)
    }
    value:function(){
        return privateCounter;
    }
}
})();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>延长变量的生命周期</li></ul><blockquote><p>一般函数的词法环境<code>在函数执行完成后被销毁</code>，但是闭<code>包会保存对创建时所在词法环境的引用</code>，即便创建时所在的执行上下文被销毁，但创建词法环境依然存在，达到延长生命周期的目的。</p></blockquote><p>比如柯里化函数、延迟调用函数、计时器</p><p>注意：处理一些特定情况下下需要使用到闭包，在其他函数中创建函数(闭包)是不明智的，因为闭包在处理速度和内存消耗方面对脚本性能有负面影响。</p><h2 id="执行上下文和执行栈" tabindex="-1"><a class="header-anchor" href="#执行上下文和执行栈" aria-hidden="true">#</a> 执行上下文和执行栈</h2><p>执行上下文是一种对JavaScript代码<code>执行环境的抽象概念</code>，也就是说js代码运行一定是在执行上下文中。</p><p>执行上下文分为：</p><ol><li>全局执行上下文：只有一个，全局对象this</li></ol>`,16),G=e("ol",{start:"2"},[e("li",null,"函数执行上下文：函数在执行前会创建新的执行上下文")],-1),Y=e("ol",{start:"3"},[e("li",null,"Eval函数执行上下文：运行在eval函数中的代码")],-1),W=e("p",null,"生命周期：创建阶段 => 执行阶段 =>回收阶段",-1),U=e("p",null,[e("strong",null,[e("code",null,"创建阶段")]),i("：在函数被调用，但执行之前")],-1),K=e("ul",null,[e("li",null,[i("确定this的值，即"),e("code",null,"This Binding")])],-1),Z=e("ul",null,[e("li",null,[e("code",null,"LexicalEnviroment(词法环境)"),i("组件被创建")])],-1),$=e("ul",null,[e("li",null,[i("词法环境有两个组成部分:"),e("code",null,"环境记录器[EnvironmentRecord]"),i("和"),e("code",null,"外部引用[outer]")]),e("li",null,[e("ul",null,[e("li",null,"环境记录器存储变量和函数声明的实际位置"),e("li",null,"外部环境引用意味着可以访问全局执行上下文")])])],-1),Q=l(`<ul><li><code>VariableEnvironment(变量环境)</code>组件被创建</li></ul><p>变量环境同样有两部分组成：环境记录器和外部引用</p><p>在ES6中，词法环境和变量环境的区别在于前者用于存储函数声明和变量(<code>let</code>和<code>const</code>)绑定，后者用于存储变量<code>var</code>绑定</p><p>比如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let a = 20;
const b = 30;
var c;
function multiply(e,f){
    var g = 20;
    return e * f *g
}
c = multiply(20,30)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行上下文</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GlobalExectionContext = {//全局执行上下文
    ThisBinding:&lt;Global Object&gt;,
    LexicalEnvironment:{ //词法环境
        EnvironmentRecord:{//环境记录器
            Type:&quot;Object&quot;,
            a:&lt; uninitialized&gt;,
            b:&lt; uninitialized&gt;,
            multiply:&lt;func&gt;
        }
        outer:&lt;null&gt;//外部指针
    }
    VariableEnvironment: {// 变量环境
        EnvironmentRecord: {//环境记录器
          Type: &quot;Object&quot;,  
          // 标识符(变量名)绑定在这里  
          c: undefined,  
        }  
        outer: &lt;null&gt; //外部指针
      }  
}
FunctionExectionContext = {//函数执行上下文
  ThisBinding: &lt;Global Object&gt;,

  LexicalEnvironment: {//词法环境
    EnvironmentRecord: {  
      Type: &quot;Declarative&quot;,  
      // 标识符绑定在这里  
      Arguments: {0: 20, 1: 30, length: 2},//arguments
    },  
    outer: &lt;GlobalLexicalEnvironment&gt;//外部指针指向全局词法环境
  },

  VariableEnvironment: {  
    EnvironmentRecord: {  
      Type: &quot;Declarative&quot;,  
      // 标识符绑定在这里  
      g: undefined  
    },  
    outer: &lt;GlobalLexicalEnvironment&gt;  
  }  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以<code>let</code>和<code>const</code>在执行上下文创建阶段并没有被赋值，而是<code>&lt; uninitialized&gt;</code>,但是<code>var</code>声明的变量在创建时已经被赋值为<code>undefined</code>, 所以<code>var</code>声明的变量存在变量提升，而<code>let</code>和<code>const</code>没有变量提升。</p><p><strong><code>执行阶段</code></strong></p><p>执行变量赋值、代码执行，如果引擎找不到变量的实际值，分配<code>undefined</code></p><p><strong><code>回收阶段</code></strong></p><p>虚拟机回收执行上下文</p><h3 id="执行栈" tabindex="-1"><a class="header-anchor" href="#执行栈" aria-hidden="true">#</a> 执行栈</h3><p>执行栈，也称为<code>调用栈</code>，具有<code>后进先出</code>结构，用于存储在代码执行阶段创建的所有上下文。</p><p>过程描述：js引擎执行js脚本时，会<code>创建一个全局上下文</code>，并将它压进执行栈，每当引擎碰到一个函数，它就会创建一个<code>函数执行上下文</code>并压入执行栈；引擎会先执行栈顶的上下文， 当该函数执行完后，对应的执行上下文就会被弹出，然后再执行下一个函数，以此类推。</p><h3 id="this关键字" tabindex="-1"><a class="header-anchor" href="#this关键字" aria-hidden="true">#</a> this关键字</h3><p>是<code>函数运行时自动生成的一个内部对象</code>，只能在函数内部使用，总是指向调用它的对象。</p><ul><li>函数全局调用：指向全局对象</li></ul>`,18),ee=e("ul",null,[e("li",null,"函数实例调用：指向对象")],-1),ne=e("ul",null,[e("li",null,"new构造函数调用：指向新创建的实例对象")],-1),ie=l('<ul><li>箭头函数：this是编译时确定，总是指向自己的上一层作用中的this</li></ul><h3 id="显式绑定this-apply-call-bind" tabindex="-1"><a class="header-anchor" href="#显式绑定this-apply-call-bind" aria-hidden="true">#</a> 显式绑定this： <strong><code>apply, call, bind</code></strong></h3><p>相同点：都可以用来显示改变运行时函数this的指向</p><p>不同点：</p><ul><li>apply接受两个参数，第一参数是<code>this</code>的指向，第二个参数是函数接受的参数，以<code>数组</code>方式传入。当第一个参数是<code>null</code>或<code>undefined</code>，默认指向<code>window</code></li></ul>',5),le=e("ul",null,[e("li",null,[i("call第一个参数也是"),e("code",null,"this"),i("的指向，后面传入的是一个参数列表")])],-1),de=l(`<ul><li>bind方法和call方法相似，但是bind方法在改变<code>this</code>指向之后不会立即执行，而是返回一个绑定好<code>this</code>指向的<code>函数</code>，而call和apply是立即执行。</li></ul><p><strong><code>难</code></strong></p><p>手写call 多个参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Function.prototype.Call = function(thisArgs,...args){
    // this是undefined和null的情况
     const context = thisArgs?Object(thisArgs):window;
     let result;
     const symbol = Symbol();
     context[symbol] = this;//fn
     let arr = args?args:[];
     let symbols = Object.getOwnPropertySymbols(context);
     for(let key of symbols){
         result = context[key](...arr);//执行函数
         delete context[key]
     }
     return result;
}
let o = {name:&#39;lisi&#39;}
function b(){
    console.log(this.name)
}
b.Call(o,&#39;1&#39;,&#39;2&#39;)//lisi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>手写apply 一个数组</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Function.prototype.Apply = function(thisArgs,args){
    const context = thisArgs?Object(thisArgs):window;
    let result;
    const symbol = Symbol();
    context[symbol] = this;
    let arr = args?args:[];
    const symbols = Object.getOwnPropertySymbols(context);
    for(let key of symbols){
        result = context[key](...arr);
        delete context[key];
    }
    return result;
}

let o = {name:&#39;lisi&#39;}
function b(){
    console.log(this.name)
}
b.Apply(o,[&#39;1&#39;,&#39;2&#39;])//lisi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>手写bind 返回一个函数，传参类似call</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Function.prototype.Bind = function(thisArgs,...args){
    const context = thisArgs?Object(thisArgs):window;
    const symbol = Symbol();
    context[symbol] = this;
    let arr = args?args:[];
    return function(...args1){
        let symbols = Object.getOwnPropertySymbols(context);
        let result;
        for(let key of symbols){
          console.log(key)
           result = context[key](...arr,...args1)
           delete context[key]
        }
        return result;
    }
}
let o = {name:&#39;lisi&#39;}
function b(){
    console.log(this.name)
}
b.Bind(o,&#39;1&#39;,&#39;2&#39;)()//lisi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原型和原型链" tabindex="-1"><a class="header-anchor" href="#原型和原型链" aria-hidden="true">#</a> <strong><code>原型和原型链</code></strong></h2><p>原型：规范定义，是给其他对象提供共享属性和方法的对象。 理解：Js是基于原型的语言，而不像Java是基于类的。JavaScript中的每个对象都有一个原型属性<code>__proto__</code>，这个原型属性指向它的构造函数的原型对象<code>prototype</code>。</p><p>原型链：每个实例对象都有一个私有的<code>__proto__</code>属性指向它构造函数的原型对象<code>prototype</code>。该原型对象也有一个自己的原型属性<code>__proto__</code>，层层向上直到一个对象的原型属性为<code>null</code>，即原型链的最顶层null, 没有原型。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let f = new Function();
f.__proto__ == Function.prototype//true
f.constructor  === Function//true 每个实例都有一个construtor属性，指向它的构造函数
Function.prototype.__proto__ == Object.prototype;//true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>一切对象都继承自<code>Object</code>对象,<code>Object</code>对象直接继承根源对象<code>null</code> <strong><code>Object.prototype.__proto__ === null //true</code></strong></li></ul>`,13),se=l("<ul><li>对象有普通对象和函数对象。 一切函数对象(含Object对象)，都继承自<code>Function</code>对象</li></ul><p><strong><code>Object.__proto__ == Function.prototype</code></strong></p><ul><li><code>Function</code>对象的<code>__proto__</code>会指向自己的原型对象，最终还是继承自<code>Object</code>对象· <strong><code>Function.prototype === Function.__proto__</code></strong></li></ul>",3),te=l(`<ul><li>每个对象都有<code>__proto__</code>属性，但只要函数对象才有<code>prototype</code>属性</li><li>每个<code>prototype</code>对象都有一个<code>constructor</code>属性指向自身构造函数。</li></ul><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> <strong><code>继承</code></strong></h3><p>继承可以使得<code>子类具有父类的各种属性和方法</code>，不需要再次编写相同的代码，子类可以重写父类方法和属性，可以定义定的方法和属性。</p><ol><li><code>原型链继承</code></li></ol><p>特点：继承父类方法和属性，多个子类实例共用一个原型，无法实现多继承</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function F(){
    this.color = &#39;yellow&#39;
}
function C(){
    this.type = &#39;child&#39;
}
Child.prototype = new Father();
console.log(new Child())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/223ebbfde4cc48f78f55a5e543acc0bc~tplv-k3u1fbpfcp-zoom-1.image" alt="" loading="lazy"></p><blockquote><p>原型式继承<code>Object.create()</code>方法</p></blockquote><ol start="2"><li><code>构造函数继承</code></li></ol><p>特点：继承父类构造函数上的属性和方法，无法继承父类原型上属性和方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function F(){
    this.color = &#39;yellow&#39;
}
F.prototype.say = function(){
    console.log(this.color)
}
function C(){
    F.call(this);
    this.type = &#39;child&#39;
}
Child.prototype = new F();
console.log(new C())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f1dadc4dde6243b3bce2723c969d8386~tplv-k3u1fbpfcp-zoom-1.image" alt="" loading="lazy"></p><ol start="3"><li><code>组合继承</code></li></ol><p>特点：可以继承父类原型和构造函数的属性和方法，但是需要消耗两次父类，原型上生成了多个属性和方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function F(){
    this.color = &#39;yellow&#39;
}
F.prototype.say = function(){
    console.log(this.color)
}
function C(){
    F.call(this);
    this.type = &#39;child&#39;
}
C.prototype = new F();
Child.prototype = new F();
console.log(new C())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/adfcfd9643db49288b385a4c00a7f191~tplv-k3u1fbpfcp-zoom-1.image" alt="" loading="lazy"></p><ol start="4"><li><code>寄生组合继承</code></li></ol><p>特点：利用原型式继承方法解决<code>new</code>操作符消耗一次父类函数问题。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function F(){
    this.color = &#39;yellow&#39;
}
F.prototype.say = function(){
    console.log(this.color)
}
function C(){
    F.call(this);
    this.type = &#39;child&#39;
}
function inheritClone(C,F){
    let prototype = Object.create(F.prototype);
    prototype .constructor = C.constructor;
    Child.prototype = prototype;
}
inheritClone(C,F)
Child.prototype = new F();
console.log(new C())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fdb64d6c79f347a1860ae66cfcc97ca3~tplv-k3u1fbpfcp-zoom-1.image" alt="" loading="lazy"></p><p>原型式继承<code>Object.create()</code>原理</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function create(o){
      function F(){}
      F.prototype = o.prototype;
      return new F();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="new操作符" tabindex="-1"><a class="header-anchor" href="#new操作符" aria-hidden="true">#</a> <strong><code>new操作符</code></strong></h3><p>new操作符用于创建一个<code>给定构造函数的实例对象</code>。</p><p>过程：</p><ol><li>创建一个空对象</li></ol>`,26),ce=e("ol",{start:"2"},[e("li",null,[i("将这个空对象的原型属性"),e("code",null,"_proto__"),i("指向构造函数的原型对象"),e("code",null,"prototype")])],-1),oe=e("ol",{start:"3"},[e("li",null,[i("将构造函数的"),e("code",null,"this"),i("指向该对象")])],-1),ae=l(`<ol start="4"><li>执行构造函数，根据构造函数返回类型判断，如果是原始值则被忽略，如果是返回对象，需要正常处理。</li></ol><p>手写new</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function _new(){
    //类数组转成数组
    const args = [].slice.call(arguments);
    //获得构造函数
    const constructor = args.shift();
    //创建一个空对象，将构造函数的prototype指向空对象的__proto__
    const context = Object.create(constructor.prototype)
    //执行构造函数
    const result = constructor.apply(content,args);
    //判断构造函数返回类型
    return (typeof result ===&#39;object&#39; &amp;&amp; result !==null)?result:context;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件模型-有哪些" tabindex="-1"><a class="header-anchor" href="#事件模型-有哪些" aria-hidden="true">#</a> **<code>事件模型</code>**有哪些？</h2><p>js中的事件可以理解是在HTML文档或浏览器中发生的一种交互操作，使得网页具备互动性，常见事件有鼠标事件、点击事件、拖拽事件等。</p><p>DOM是一个树结构，如果父子节点绑定事件时，当触发子节点时，就存在一个执行顺序问题，这就涉及事件流。</p><p>事件流一般经历三个阶段：</p><ul><li><code>事件捕获(capture)</code>: 从上往下的传播方式，由点击父节点向子节点逐层触发事件</li></ul>`,8),re=e("ul",null,[e("li",null,[e("code",null,"目标阶段(target)")])],-1),ue=l(`<ul><li><code>冒泡阶段(bubbling)</code>: 从下往上的传播方式，由点击的子节点向父节点逐层冒泡</li></ul><p>事件模型：</p><ul><li><p><code>原始事件模型</code></p><ul><li>HTML中直接绑定</li><li><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;input type=&quot;button&quot; onclick=&quot;fun()&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>JS代码绑定</li><li><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var btn = document.getElementById(&#39;.btn&#39;);
btn.onclick = fun;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><blockquote><p>特点：</p><ol><li>绑定速度快：太快以至于页面有可能未加载出来</li></ol><!----><ol start="2"><li>只支持冒泡，不支持捕获</li></ol><!----><ol start="3"><li>一个节点只能绑定一次，再次绑定会覆盖之前的绑定</li></ol></blockquote><ul><li><code>标准事件模型</code></li></ul><p>该模型中有三个阶段：事件捕获、事件处理、事件冒泡</p><p>绑定方式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var btn = document.getElementById(&#39;.btn&#39;);

btn.addEventListener(‘click’, showMessage, false);
btn.removeEventListener(‘click’, showMessage, false);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>特点：</p><ol><li>可以绑定多个事件，不会冲突</li></ol><!----><ol start="2"><li>第三个参数true表示捕获，false表示冒泡，默认false</li></ol></blockquote><ul><li><code>IE事件模型</code></li></ul><p>该模型有两个过程：事件处理、事件冒泡</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var btn = document.getElementById(&#39;.btn&#39;);
//绑定监听
btn.attachEvent(‘onclick’, showMessage);
//移除监听
btn.detachEvent(‘onclick’, showMessage);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>特点：</p><ol><li>该模型旨在IE浏览器有效，其他浏览器不兼容</li></ol></blockquote><p><strong><code>事件代理</code></strong>(事件委托)：<code>把一个或一组元素委托到它的父层或更外层元素上</code>。真正绑定事件的是外层元素，而不是目标元素。通过<code>事件冒泡机制</code>触发外层元素的绑定事件，然后在外层元素上执行函数。</p><p><code>应用场景：</code></p><p>如果我们有一个列表，列表之中有大量的列表项，我们需要在点击列表项的时候响应一个事件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;ul id=&quot;list&quot;&gt;
  &lt;li&gt;item 1&lt;/li&gt;
  &lt;li&gt;item 2&lt;/li&gt;
  &lt;li&gt;item 3&lt;/li&gt;
  ......
  &lt;li&gt;item n&lt;/li&gt;
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>遍历每个列表项，给列表项绑定一个函数，十分消耗内存，这时可以把绑定事件绑定在父级元素<code>ul</code>上，然后去匹配元素。适合事件委托的事件有：<code>click</code>、<code>mousedown</code>、<code>mouseup</code>、<code>keydown</code>、<code>keyup</code>、<code>keypress</code></p><p>优点：</p><ul><li>减少整个页面所需的内存，提升整体性能</li></ul>`,20),ve=e("ul",null,[e("li",null,"动态绑定，减少重复工作")],-1),me=e("p",null,"局限：",-1),be=e("ul",null,[e("li",null,[i("对于"),e("code",null,"focus"),i("、"),e("code",null,"blur"),i("这样的事件没有冒泡机制，无法进行委托")])],-1),pe=l('<ul><li><code>mousemove</code>、<code>mouseout</code>需要不断触发，对性能消耗极高，因此也不适合使用事件委托</li></ul><h2 id="ajax的原理及实现" tabindex="-1"><a class="header-anchor" href="#ajax的原理及实现" aria-hidden="true">#</a> <strong><code>AJAX的原理及实现</code></strong></h2><p>AJAX： 异步的JavaScript和XML，是一种<code>创建交互网页应用</code>的网页开发技术，可以<code>不加载整个网页</code>的情况下，与服务器交换数据，并且更新部分网页</p><p><code>原理</code>：通过<code>XMLHttpRequest</code>对象来向服务器发送异步请求，从服务器获得数据。然后用<code>JavaScript</code>来操作<code>DOM</code>而更新页面。</p><p><code>实现过程</code></p><ul><li>创建<code>XMLHttpRequest</code>对象</li></ul>',6),he=e("ul",null,[e("li",null,[i("通过"),e("code",null,"XMLHttpRequest"),i("对象的"),e("code",null,"open()"),i("方法与服务器建立连接")])],-1),ge=e("ul",null,[e("li",null,[i("构建请求需要的数据内容，并通过"),e("code",null,"send()"),i("发送给服务端")])],-1),fe=e("ul",null,[e("li",null,[i("通过"),e("code",null,"onreadystatechange"),i("事件监听服务器返回的结果")])],-1),xe=e("ul",null,[e("li",null,"接受并处理服务端的响应数据")],-1),_e=l(`<ul><li>使用JavaScript将结果更新到<code>HTML</code>中</li></ul><p>简单封装一个Ajax请求</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ajax({
    type:&#39;POST&#39;,
    dataType:&#39;json&#39;,
    data:{},
    url:&#39;https://xx.com&#39;,
    sucess:function(res){
        
    },
    fail:function(err){
    
     }
})

//此处封装
function ajax(options){
    const xhr = new XMLHttpRequest();
    //初始化参数
    options = options || {};
    //默认GET请求
    options.type = (options.type || &#39;GET&#39;).toUpperCase();
    options.dataType = options.dataType || &#39;json&#39;;
    const params = options.data;
    if(options.type === &#39;GET&#39;){
        xhr.open(&#39;GET&#39;,options.url + &#39;?&#39;+params,true)
        xhr.send(null)
    }else{
        xhr.open(&#39;POST&#39;,options.url,true)
        xhr.send(params)
    }
    
    xhr.onreadstatechange = function(){
        if(xhr.readyState === 4){
            let status = xhr.status;
            if(status&gt;= 200 &amp;&amp; statis &lt;300){
                options.success(xhr.responseText)
            }else{
                options.fail &amp;&amp; options.fail(status)
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="正则表达式-用来匹配字符串的工具-也是一个对象。两种方式创建" tabindex="-1"><a class="header-anchor" href="#正则表达式-用来匹配字符串的工具-也是一个对象。两种方式创建" aria-hidden="true">#</a> <strong><code>正则表达式</code></strong>：<code>用来匹配字符串的工具，也是一个对象</code>。两种方式创建</h2><ol><li>字面量创建，在两个斜杠之间</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const re = /\\d+/g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>条用<code>RegExp</code>对象的构造函数</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const re = new RegExp(&quot;\\d+&quot;,&quot;g&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>校验规则(部分)</p><table><thead><tr><th>规则</th><th>描述</th></tr></thead><tbody><tr><td><code>^</code></td><td>开始</td></tr><tr><td><code>$</code></td><td>结束</td></tr><tr><td><code>*</code></td><td>匹配前表达式0次或多次</td></tr><tr><td><code>+</code></td><td>匹配前表达式1次或多次</td></tr><tr><td><code>?</code></td><td>匹配前表达式0次或一次</td></tr><tr><td><code>.</code></td><td>默认匹配除换行符之外的任何单个字符</td></tr><tr><td><code>\\d</code></td><td>匹配一个数字</td></tr><tr><td><code>\\D</code></td><td>匹配一个非数字</td></tr><tr><td><code>\\s</code></td><td>匹配空白字符，含空格、制表符、换页、换行符</td></tr><tr><td><code>\\w</code></td><td>匹配单个字符(字母、数字或下划线)</td></tr><tr><td>以下是标记</td><td></td></tr><tr><td><code>g</code></td><td>全局</td></tr><tr><td><code>i</code></td><td>忽略大小写</td></tr><tr><td><code>m</code></td><td>多行</td></tr><tr><td><code>s</code></td><td><code>.</code>可以匹配换行符</td></tr></tbody></table><p>字符串匹配方式：</p><ul><li>match 返回一个数组</li></ul>`,12),ye=e("ul",null,[e("li",null,"matchAll 返回一个迭代器")],-1),we=e("ul",null,[e("li",null,"search 返回匹配到的索引")],-1),ke=e("ul",null,[e("li",null,"replace匹配字符替换目标字符")],-1),je=e("ul",null,[e("li",null,"split按匹配字符替换指定内容")],-1),Oe=e("p",null,"正则对象方法：",-1),Ee=e("ul",null,[e("li",null,[e("code",null,"test"),i("匹配到，返回true/false")])],-1),Ne=l(`<ul><li><code>exec</code>匹配到，返回数组</li></ul><h2 id="常见的-dom操作方法" tabindex="-1"><a class="header-anchor" href="#常见的-dom操作方法" aria-hidden="true">#</a> 常见的**<code>DOM操作方法</code>**</h2><p>DOM，即文档对象模型，是<code>HTML</code>和<code>XML</code>文档的编程接口，它提供了对文档的<code>结构化描述</code>，并定义了一种方式可以使从程序中<code>对该结构进行访问</code>，从而改变文档的<code>结构、样式和内容</code>。节点类型有很多，下面是常用的三种：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div&gt;
    &lt;p title=&quot;title&quot;&gt;
        content
    &lt;/p &gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>div</code>、<code>p</code>都是元素节点；<code>title</code>是属性节点；<code>content</code>是文本节点</p><p><code>操作：</code></p><ul><li><p>创建节点</p><ul><li><code>createElement</code>，接受一个标签名的参数，创建一个新元素节点</li><li><code>createTextNode</code> 接受一个任意内容字符串，创建一个文本节点</li><li><code>createDocumentFragment</code> 创建文档碎片，一种轻量级文档，用来存储临时节点</li><li><code>createAttribute</code> 创建一个属性节点</li></ul></li></ul>`,7),qe=l("<ul><li><p>获取节点</p><ul><li><code>querySelector</code> 传入一个<code>css</code>选择器，返回一个元素节点</li><li><code>querySelectorAll </code>传入一个<code>css</code>选择器，返回一个节点列表</li><li>getElementById</li><li>getElementsByName</li><li>getElementsByTagName</li><li>getElementsByClassName</li></ul></li></ul>",1),Se=l("<ul><li><p>更新节点</p><ul><li><code>innerHTML </code>可以解析文本节点，也可以解析<code>HTML</code>判断</li><li><code>innerText、textContent html</code>元素会进行编码，不能解析<code>HTML</code>。两者主要区别在于读取属性时，innerText不返回隐藏的文本，而textContent返回所有文本。</li><li>style 可以获取设置属性所有<code>css</code> <code>document.style.fontSize = &#39;20px&#39;</code></li></ul></li></ul>",1),Te=e("ul",null,[e("li",null,[e("p",null,"添加节点"),e("ul",null,[e("li",null,"innerHTML"),e("li",null,[e("code",null,"appendChild"),i(" 将一个子节点添加到父节点的最后一个子节点")]),e("li",null,[i("i"),e("code",null,"nsertBefore(newEle,referEle)"),i("将新节点添加到referEle之前")]),e("li",null,"setAttributer('class','white')添加一个属性节点")])])],-1),Ae=l('<ul><li><p>删除节点</p><ul><li><code>removeChild</code> 删除子节点</li></ul></li></ul><h2 id="bom的理解及常见的bom对象" tabindex="-1"><a class="header-anchor" href="#bom的理解及常见的bom对象" aria-hidden="true">#</a> <code>BOM</code>的理解及常见的BOM对象</h2><p>BOM，即浏览器对象模型，<code>提供独立于内容与浏览器窗口进行交互的对象</code>，比如页面后退、刷新、前进、窗口变化、滚动、屏幕分辨率等。</p><p>顶级对象是<code>window</code>，window即是浏览器窗口的一个接口、又是全局对象。</p><p><code>window</code>属性方法</p>',5),Fe={href:"http://window.name",target:"_blank",rel:"noopener noreferrer"},Ce=e("code",null,"name",-1),Le=e("ul",null,[e("li",null,"window.moveTo(x,y) 浏览器窗口相对于屏幕移动像素(px)")],-1),Be=e("ul",null,[e("li",null,"window.resizeTo(w,h) 窗体宽度调整")],-1),He=e("ul",null,[e("li",null,"window.scrollTo(x,y) 滑动到x,y的位置")],-1),Ie=e("p",null,[e("code",null,"location")],-1),Me=e("ul",null,[e("li",null,[e("code",null,"hash"),i(" url中"),e("code",null,"#"),i("后面字符")])],-1),Re=e("ul",null,[e("li",null,[e("code",null,"host"),i("域名+端口")])],-1),Je=e("ul",null,[e("li",null,[e("code",null,"hostname"),i(" 域名，没带端口")])],-1),De=e("ul",null,[e("li",null,[e("code",null,"href"),i(" 完整url")])],-1),Pe=e("ul",null,[e("li",null,[e("code",null,"pathname"),i(" 路径")])],-1),ze=e("ul",null,[e("li",null,[e("code",null,"port"),i(" 端口")])],-1),Ve=e("ul",null,[e("li",null,[e("code",null,"protocol"),i(" 协议")])],-1),Xe=e("ul",null,[e("li",null,[e("code",null,"search"),i(),e("code",null,"?"),i("后面的内容")])],-1),Ge=e("p",null,[e("code",null,"navigator"),i(" 对象用来获取浏览器的属性的，区分浏览器类型，属性较多，不一一列举")],-1),Ye=e("p",null,[e("code",null,"screen"),i(" 客户端显示器的一些信息")],-1),We=e("ul",null,[e("li",null,"screen.height 屏幕像素高度")],-1),Ue=e("ul",null,[e("li",null,"screen.witdth 屏幕像素高度")],-1),Ke=l(`<ul><li>screen.colorDepth 屏幕颜色位数</li></ul><p><code>history</code>主要用来操作浏览器<code>URL</code>的历史记录，可以通过参数向前、向后，或者向指定<code>URL</code>跳转</p><ul><li><code>history.go()</code> 接受整数或者字符串参数</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>history.go(&#39;maixaofei.com&#39;)
history.go(3) //向前跳转三个记录
history.go(-1) //向后跳转一个记录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>history.forward()</code>：向前跳转一个页面</li></ul>`,5),Ze=e("ul",null,[e("li",null,[e("code",null,"history.back()"),i(": 向后跳转一个页面")])],-1),$e=l('<ul><li><code>history.length</code>: 获取历史记录数</li></ul><h2 id="本地-存储方式-有哪些-应用场景" tabindex="-1"><a class="header-anchor" href="#本地-存储方式-有哪些-应用场景" aria-hidden="true">#</a> 本地**<code>存储方式</code>**有哪些？应用场景</h2><ul><li>cookie</li></ul><p>Cookie是为了解决<code>HTTP</code>无状态的问题，用于在客户端保存在服务端验证用户身份的数据。</p><p>一般大小不超过4KB的小型文本数据。</p><ul><li>localStorage</li></ul><p>H5新增，IE8以上的浏览器都兼容</p><ul><li>特点：</li><li><ul><li><code>生命周期</code>：持久化的本地存储，永久有效，除非手动删除</li><li><code>存在跨域限制</code>，但存储的信息可以在同一个域中是共享的</li><li><code>大小5M </code>, (浏览厂商)</li><li>localStorage本质是对字符串的读取，存储的内容越多，消耗内存越多，页面变卡</li></ul></li></ul>',8),Qe=l("<ul><li>sessionStorage</li></ul><p>sessionStorage和localStorage使用方法基本一致，唯一不同的是生命周期，一旦页面(会话)关闭，<code>sessionStorage</code>就会删除数据</p><ul><li><p>indexedDB：用于客户端存储大量结构化数据(文件等)</p><ul><li>存储大小没有上限</li><li>所有操作是异步的，向localStoage同步操作性能更高</li><li>原生支持<code>JS</code>对象</li></ul></li></ul><p>应用场景：</p><ul><li>标记用户或跟踪用户行为，使用<code>cooke</code></li></ul>",5),en=e("ul",null,[e("li",null,[i("适合长期保存在本地的数据(token) 使用"),e("code",null,"localStorage")])],-1),nn=e("ul",null,[e("li",null,[i("敏感账号一次性登录,使用"),e("code",null,"sessionStorage")])],-1),ln=e("ul",null,[e("li",null,[i("存储大量数据，在线文档保存编辑历史，使用"),e("code",null,"indexDB")])],-1),dn=e("p",null,[i("**"),e("code",null,"Cookie、localStorage和sessionStorage"),i("**的区别")],-1),sn=e("ul",null,[e("li",null,[e("code",null,"存储大小"),i("：cookie数据大小不超过4k , 而localStorage存储的数据大小可达5MB")])],-1),tn=e("ul",null,[e("li",null,[e("code",null,"生命周期"),i("：cookie可以设置到期事件，到期前一直有效；sessionStorage数据在当前浏览器窗口关闭后自动删除；localStorage永久有效，除非主动删除数据")])],-1),cn=l('<ul><li><code>与服务器之间的交互方式</code>：<code>cookie</code>会被自动上传到服务器，服务器可以通过<code>Set-Cookie</code>改变cookie; sessionStorage和localStorage不会把数据发送给服务器，仅在本地保存。</li></ul><h2 id="事件循环" tabindex="-1"><a class="header-anchor" href="#事件循环" aria-hidden="true">#</a> <strong><code>事件循环</code></strong></h2><p>为什么要设计？JavaScript设计之初是单线程的，就是程序运行时，只有一个线程存在，同一时间只能做一件事，为了防止一些请求或高精度计算任务阻塞程序运行，于是有了<code>事件循环</code>。</p><p>JavaScript在运行时，所有任务可分为</p><ul><li><code>同步任务</code>：同步任务是立即执行的，一般直接在主线程中执行</li></ul>',5),on=l("<ul><li><code>异步任务</code>：异步任务，比如ajax请求, setTimeout计时器任务，是会被放到任务队列中，等待主线程任务执行完毕，才从任务队列中拿出异步任务放到主线程中执行。</li></ul><p>而<code>这个主线程执行完同步任务，不断轮询任务队列的过程</code>，就称为事件循环。</p><p>异步任务一般分为宏任务和微任务：</p><p><code>宏任务</code>的执行事件粒度比较大，执行的时间不能精确控制</p><p>常见的宏任务有：script(外层同步代码)、<code>setTimeout/setInterval</code>、<code>postMessage</code>、<code>requestFrameAnimation</code>、setImmediate、I/O</p><p><code>微任务</code>执行时机是主线程同步代码执行之后，宏任务执行之前。</p><p>常见的微任务有：<code>Promise.then</code>、<code>async/await、MutationObserver</code>、<code>process.nextTick(Nodejs)</code></p><p><code>执行机制</code></p><ul><li>主线先执行同步代码，如果遇到微任务将它放到微任务队列，遇到宏任务放到宏任务队列</li></ul>",9),an=l(`<ul><li>当主线程执行完同步代码。会查看微任务队列，然后将队列中的微任务依次执行完成，然后查看宏任务队列，依次执行完成。</li></ul><p>**<code>async/await</code>**提供了一种异步解决方案，可以通过它实现同步编程代码，异步请求的的代码风格，<code>await</code>等待的是异步方法执行。</p><h2 id="尾递归" tabindex="-1"><a class="header-anchor" href="#尾递归" aria-hidden="true">#</a> <strong><code>尾递归</code></strong></h2><p>尾调用是函数在最后调用另一个函数</p><p>函数在<code>函数尾位置调用自身</code>(或一个尾调用本身的其他函数等)；尾递归优化：执行栈可以无需保留当前函数执行上下文，所以永远不会发生栈溢出的情况.</p><p><code>尾递归优化</code>: 函数在内部调用一个函数会形成一个调用记录,保存了调用位置和内部变量等信息.如果函数在内部调用函数B,那么A的调用记录上方会形成一个对B的调用.以此类推,形成一个调用栈.</p><p>尾递归是函数在最后一步调用自身,无需保留外层函数的调用记录,因为调用位置和内部变量信息都不会再用到,只要直接使用内层函数的调用记录,取代外层函数的调用记录就可以了</p><p>应用场景:</p><p>数组求和</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function sum(arr,total=0){
    if(arr.length === 0) return total;
    return sum(arr,total + arr.pop())
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>斐波那契数列求和</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function factorial(n,start=1,total){
    if(n &lt;=1 ) return total;
    return factorial(n-1,total,total + start)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数组扁平化</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function flat(arr=[],result=[]){
    arr.forEach(v=&gt;{
        if(Array.isArray(v)){
            result = result.concat(flat(v,[]))
        }else{
            result.push(v)
        }
    })
    return result;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对象格式化</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let obj = {
    a: &#39;1&#39;,
    b: {
        c: &#39;2&#39;,
        D: {
            E: &#39;3&#39;
        }
    }
}
// 转化为如下：
let obj = {
    a: &#39;1&#39;,
    b: {
        c: &#39;2&#39;,
        d: {
            e: &#39;3&#39;
        }
    }
}
//代码实现
function keysLower(obj){
    let reg = new RegExp(&quot;([A-Z]+)&quot;,&quot;g&quot;)
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            let temp = obj[key];
            //有大写字母
            if(reg.test(key.toString())){
                //替换
                temp = obj[key.replace(reg,function(result){
                    return result.toLowerCase();
                })] = obj[key];
                delete obj[key];
            }
            if(typeof temp === &#39;object&#39; || Array.isArray(temp)){
                keysLower(temp)
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="object-defiinepropery-obj-name-descriptor" tabindex="-1"><a class="header-anchor" href="#object-defiinepropery-obj-name-descriptor" aria-hidden="true">#</a> Object.defiinePropery(obj,name,descriptor)</h2><p>用来添加修改一个对象属性的方法</p><p>描述性对象含有两种描述符: 数据描述符和存储描述符</p><p>数据描述符:</p><ul><li>value 设置对象属性的值</li></ul>`,21),rn=e("ul",null,[e("li",null,"writable 设置对象属性是否可以重新赋值")],-1),un=e("ul",null,[e("li",null,"Enumerable 属性是否可枚举,是否可以使用Object.keys或for..in遍历")],-1),vn=e("ul",null,[e("li",null,"configurable是否可以删除目标函数或者修改属性特性.")],-1),mn=e("p",null,"存取描述符",-1),bn=e("ul",null,[e("li",null,"get getter")],-1),pn=l(`<ul><li>set settter</li></ul><h2 id="内存泄漏与垃圾回收" tabindex="-1"><a class="header-anchor" href="#内存泄漏与垃圾回收" aria-hidden="true">#</a> <strong><code>内存泄漏与垃圾回收</code></strong></h2><p>内存泄露是指由于开发者疏忽造成程序未能释放已经不再使用的内存</p><p>垃圾回收机制: js具有自动垃圾回收机制(Garbage Collection),即执行环境会负责管理代码执行过程中的内存.</p><p>原理:垃圾收集器会<code>定期(周期性</code>)找出那些不再继续使用的变量,然后释放其内存</p><h3 id="两种垃圾回收方式" tabindex="-1"><a class="header-anchor" href="#两种垃圾回收方式" aria-hidden="true">#</a> 两种垃圾回收方式</h3><ul><li><code>标记清除</code></li></ul><p>当变量进入执行环境时,就标记这个变量为&quot;进入环境<code>&quot;进入环境</code>的变量所占用的内存不能被释放掉,当变量离开缓存时,则将其标记<code>&quot;离开环境&quot;</code>,垃圾回收机制会将其再上下文中的引用变量删除, 回收内存.</p><ul><li><code>引用计数</code></li></ul><p>js用一张&quot;引用表&quot;<code>保存所有变量的引用次数,</code> 如果这个值得<code>引用次数是0,</code> 那垃圾回收机制可以回收该变量占用得内存里. 但有可能存在循环引用 , 造成内存泄露 .</p><h3 id="常见的内存泄漏" tabindex="-1"><a class="header-anchor" href="#常见的内存泄漏" aria-hidden="true">#</a> 常见的内存泄漏</h3><ol><li><code>全局变量</code></li></ol><p>使用严格模式,可以避免意外得全局变量</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function foo(arg) {
    bar = &quot;foot&quot;;
}
//或
function foo() {
    this.variable = &quot;this&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><code>定时器</code></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var someResource = getData();
setInterval(function() {
    var node = document.getElementById(&#39;Node&#39;);
    if(node) {
        // 处理 node 和 someResource
        node.innerHTML = JSON.stringify(someResource));
    }
}, 1000);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定时器依旧存在,而且回调函数中包含对<code>someResource</code>引用, 内存不会被释放</p><ol start="3"><li><code>闭包</code></li></ol><p>维持函数内局部变量</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function bindEvent() {
  var obj = document.createElement(&#39;XXX&#39;);
  var unused = function () {
    console.log(obj, &#39;闭包内引用obj obj不会被释放&#39;);
  };
  obj = null; // 解决方法
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><code>事件监听</code></li></ol><p>比如使用<code>addEventListener</code>监听时,在不监听的情况下使用<code>removeEventListener</code>取消对事件监听,否则会造成内存泄漏.</p><h2 id="函数式编程-理解及优缺点" tabindex="-1"><a class="header-anchor" href="#函数式编程-理解及优缺点" aria-hidden="true">#</a> **<code>函数式编程</code>**理解及优缺点</h2><p>函数式编程是一种<code>编程范式</code>, 一种编写程序的方法论。</p><p>主要的编程范式有三种: 命令式编程、声明式编程、函数式编程</p><p>函数式编程强调程序执行的结果而非执行过程, 倡导使用若干简单的执行单元让计算结果不断渐进,逐层推到复杂的运算, 而非设计一个复杂的执行过程.</p><p>特点:<code> 把过程逻辑写成一个函数,定义好输入参数,只关心它输出结果.</code></p><p>核心概念：</p><p><code>数据不可变</code>：强调数据是不变的，这意味着如果你想修改一个对象，你必须创建一个新的对象修改它。</p><p><code>无状态</code>：表示给定一个函数，无论何时运行，它都和第一次运行一样，给定相同的输入，给出相同的输出，完全不依赖外部状态的变化。</p><p><strong>思想应用</strong></p><ol><li><code>纯函数</code>:对给定的输入返回相同的输出的函数, 并要求你所有的数据都是不可逆的, 即<code>纯函数 = 无状态 + 数据不可变</code></li></ol>`,32),hn=e("ol",{start:"2"},[e("li",null,[e("code",null,"高阶函数"),i(":以函数作为输入或输出的函数称为高阶函数 (传入一个函数,返回一个被增强后的函数)")])],-1),gn=e("ol",{start:"3"},[e("li",null,[e("code",null,"柯里化函数"),i(":把一个参数函数转化成一个嵌套的一元函数的过程(松散解耦)")])],-1),fn=e("ol",{start:"4"},[e("li",null,[e("code",null,"组合与管道"),i(": 将多个函数组合成一个函数. compose执行是从右到左的.而管道函数执行顺序从左到右的")])],-1),xn=e("p",null,"优点：",-1),_n=e("ul",null,[e("li",null,"复用代码，没有其他外部变量影响，无副作用")],-1),yn=e("ul",null,[e("li",null,"更好的状态管理：无状态，更少的状态，能最大化的减少这些未知、优化代码、减少出错情况")],-1),wn=e("p",null,"缺点：",-1),kn=e("ul",null,[e("li",null,"函数式编程相对于命令式编程的性能开销更大")],-1),jn=e("ul",null,[e("li",null,"资源占用")],-1),On=e("ul",null,[e("li",null,"递归陷阱：在函数式编程中，为了迭代，通常会采用递归操作")],-1),En=e("h2",{id:"函数缓存",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#函数缓存","aria-hidden":"true"},"#"),i(),e("strong",null,[e("code",null,"函数缓存")])],-1),Nn=e("p",null,"就是使用函数缓存过的结果进行缓存，就是用空间(缓存存储)换事件(计算过程) 实际上就是使用闭包实现的",-1),qn=e("ul",null,[e("li",null,[e("code",null,"闭包")])],-1),Sn=e("ul",null,[e("li",null,[e("code",null,"柯里化"),i("：将"),e("code",null,"接受多个参数的函数"),i("换成接受一个"),e("code",null,"单一参数的函数")])],-1),Tn=e("ul",null,[e("li",null,[e("code",null,"高阶函数")])],-1),An=e("p",null,"适合使用缓存",-1),Fn=e("ul",null,[e("li",null,"对于昂贵的函数调用，执行复杂计算的函数")],-1),Cn=e("ul",null,[e("li",null,"对于具有有限且高度重复输入范围的函数")],-1),Ln=e("ul",null,[e("li",null,"对于具有重复输入值的递归函数")],-1),Bn=l(`<ul><li>对于纯函数，即每次使用特定输入调用时返回相同输出的函数</li></ul><h2 id="防抖和节流" tabindex="-1"><a class="header-anchor" href="#防抖和节流" aria-hidden="true">#</a> <strong><code>防抖和节流</code></strong></h2><p>浏览器的<code>resize</code>、<code>scroll</code>、<code>keypress</code>、<code>mousemove</code>等事件在触发时，会不断地触发回调函数，极大浪费资源，消耗性能。</p><p><code>防抖</code>：n秒后在执行该事件，若在n秒内被重复触发，则重新计时(最后一次触发生效)</p><p><code>节流</code>：n秒内只运行一次，若在n秒内重复触发，只有一次生效</p><p>节流：高频触发事件，<code>只在一段时间内执行一次</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function throttled(fn,delay=500){
    let timer= null;
    return function(...args){
        if(!timer){
            timer = setTimeout(()=&gt;{
                fn.apply(this,args)
                timer =null;
            },delay);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>防抖：一定时间内连续触发的事件，<code>只是在最后一次执行</code>，而函数节流一段事件内只执行一次</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function debounce(fn,delay){
    let timer = null;
    return function(...args){
        if(time) clearTimeout(timer)
        time = setTimeout(()=&gt;{
            fn.apply(this,args);
            timer = null;
        },delay)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>防抖：在连续事件，只需触发一次回调</p><ul><li><code>搜索框输入</code>，用户最后一次输入完成，才发送请求</li></ul>`,11),Hn=e("ul",null,[e("li",null,"手机号、邮箱验证")],-1),In=e("ul",null,[e("li",null,[i("窗口大小"),e("code",null,"resize"),i("。当窗口调整完成后，再计算窗口大小")])],-1),Mn=e("p",null,"节流：在间隔一段事件执行一次回调的场景",-1),Rn=e("ul",null,[e("li",null,[i("滚动加载，"),e("code",null,"加载更多或滚到底部监听")])],-1),Jn=l(`<ul><li>搜索框，搜索联想功能</li></ul><h2 id="如何判断一个元素出现在可视域内-图片懒加载" tabindex="-1"><a class="header-anchor" href="#如何判断一个元素出现在可视域内-图片懒加载" aria-hidden="true">#</a> 如何判断一个元素出现在可视域内？（<strong><code>图片懒加载</code></strong>）</h2><ol><li><code>offsetTop、scrollTop</code></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function isInView(el){
    const viewPortHeight = window.innerHeight ||
        document.documentElement.clientHeight|| 
        document.body.clientHeight;
    const offsetTop = el.offsetTop;//当前元素距离最上面的元素
    const scrollTop = document.documentElement.scrollTop;
    return top &lt;= viewPortHeight;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><code>getBoundingClientRect</code></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function isInView(el){
    const viewWidth = window.innerWidth || document.documentElement.clientWidth;
    const viewHeight = window.innerHeight || document.documentElement.clientHeight;
    const {
        top,
        left,
        bottom,
        right
    } = el.getBoundingClientRect();
    return (
        top&gt;=0 &amp;&amp; 
        left&gt;=0&amp;&amp;
        right &lt;=viewWidth&amp;&amp;
        bottom &lt;= viewHeight
    )
}
const el = document.querySelect(&#39;p&#39;)
window.addEvemtListener(&#39;scroll&#39;,function(e){
    if(isInView(el)){
        ...
    }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><code>Intersection Observer</code> 判断两个元素是否重叠，性能比<code>getBoundingClientRect</code></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const observer = new IntersectionObserver(function(changes){
   changes.forEah(function(ele,index){
       if(ele.intersectionRation &gt; 0 &amp;&amp; ele.intersectionRatio &lt;=0){
           ele.target.src = ele.target.dataset.src;
       }
   }) 
});

(function addObserver(){
    var listItems = document.querySelectorAll(&#39;[data-src]&#39;);
    listItems.forEach(function(item){
        observer.observe(item);//观察该节点
    })
})()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>应用</code>：</p><ul><li><code>图片懒加载</code></li></ul>`,10),Dn=e("ul",null,[e("li",null,[e("code",null,"列表的无线滚动")])],-1),Pn=e("ul",null,[e("li",null,"计算广告元素的曝光情况")],-1),zn=l(`<ul><li>可点击链接的预加载</li></ul><h2 id="下拉刷新和上拉加载" tabindex="-1"><a class="header-anchor" href="#下拉刷新和上拉加载" aria-hidden="true">#</a> 下拉刷新和上拉加载</h2><p>上拉加载</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a4ebfd9ae3244d92884ad7c33a54f737~tplv-k3u1fbpfcp-zoom-1.image" alt="" loading="lazy"></p><p>触底时，满足<code>scrollTop + clientHeight &gt;= scrollHeight</code>，clientHeight是定值，变得是scrollTop；而scrollHeight表示body所有元素的长度。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//浏览器高度
let clientHeight = document.documentElement.clientHeight;
//body所有元素的长度
let scrollHeight = document.body.scrollHeight;
//body顶部距离window顶部的长度
let scrollTop = document.documentElement.scrollTop;
let distance = 50;//距离视窗50时，开始触发

if((scrollTop + clientHeight) &gt;= (scrollHeight - distance)){
    console.log(&#39;开始加载数据&#39;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\\</p><p>下拉刷新： 页面本身置于顶部，用户下拉时触发动作</p><p>实现步骤：</p><ul><li>监听原生<code>touchStart</code>事件，记录其初始位置的值<code>e.touches[0].pageY</code></li></ul>`,10),Vn=e("ul",null,[e("li",null,[i("监听"),e("code",null,"touchmove"),i("事件，记录并计算当前滑动的位置值与初始位置的差值，大于"),e("code",null,"0"),i("表示下拉动作，同时设置一个允许滑动的最大值")])],-1),Xn=l(`<ul><li>监听<code>touchend</code>事件，若此时元素达到最大值，则触发<code>callback</code>，同时将<code>translateY</code>重设为<code>0</code>，元素回到初始位置</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;main&gt;
    &lt;p class=&quot;refreshText&quot;&gt;&lt;/p&gt;
    &lt;ul id=&quot;refreshContainer&quot;&gt;
        &lt;li&gt;111&lt;/li&gt;
        &lt;li&gt;222&lt;/li&gt;
        &lt;li&gt;333&lt;/li&gt;
        &lt;li&gt;444&lt;/li&gt;
        &lt;li&gt;555&lt;/li&gt;
        ...
    &lt;/ul&gt;
&lt;/main&gt;
&lt;script&gt;
    var _element = document.getElementById(&#39;refreshContainer&#39;),
        _refreshText = document.querySelector(&#39;.refreshText&#39;),
        _startPos = 0,//初始位置
        _transitionHeight = 0;//移动的距离
    _element.addEventListener(&#39;touchstart&#39;, function (e) {
        //记录初始位置
        _startPos = e.touches[0].pageY;
        _element.style.position = &#39;relative&#39;;
        _element.style.transition = &#39;transform 0s&#39;;//元素开始移动
    }, false)
    _element.addEventListener(&#39;touchmove&#39;, function (e) {
        //e.touches[0].pageY 当前滑动到的位置
        _transitionHeight = e.touches[0].pageY - _startPos //记录当前滑动距离
        if (_transitionHeight &gt; 0 &amp;&amp; _transitionHeight &lt; 60) {
            _refreshText.innerText = &#39;下拉刷新&#39;;
            //元素跟着偏移
            _element.style.transform = &#39;translateY(&#39; + _transitionHeight + &#39;px)&#39;;
            if (_transitionHeight &gt; 55) {
                _refreshText.innerText = &#39;释放更新&#39;
            }
        }
    }, false)
    _element.addEventListener(&#39;touchend&#39;, function (e) {
        _element.style.transition = &#39;transform 0.5s ease 1s&#39;;
        _element.style.transform = &#39;translateY(0px)&#39;;
        _refreshText.innerText = &#39;更新中...&#39;
    })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用第三方库<code>better-Scroll</code>实现，具体看官网。</p>`,3);function Gn(Yn,Wn){const d=a("ExternalLinkIcon");return t(),c("div",null,[u,v,m,b,n(""),p,n(""),h,g,f,n(""),x,n(""),_,y,w,n(""),k,n(""),j,n(""),O,n(""),E,n(""),N,n(""),q,n(""),S,n(""),T,n(""),A,n(""),F,n(""),C,L,B,n(""),H,n(""),I,n(""),M,n(""),R,n(""),J,n(""),D,n(""),P,n(""),z,n(""),V,n(""),X,n(""),G,n(""),Y,W,U,K,n(""),Z,n(""),$,n(""),Q,n(""),ee,n(""),ne,n(""),ie,n(""),le,n(""),de,n(""),se,n(""),te,n(""),ce,n(""),oe,n(""),ae,n(""),re,n(""),ue,n(""),ve,me,be,n(""),pe,n(""),he,n(""),ge,n(""),fe,n(""),xe,n(""),_e,n(""),ye,n(""),we,n(""),ke,n(""),je,Oe,Ee,n(""),Ne,n(""),qe,n(""),Se,n(""),Te,n(""),Ae,e("ul",null,[e("li",null,[e("a",Fe,[i("window.name"),o(d)]),i(" 全局对象属性"),Ce])]),n(""),Le,n(""),Be,n(""),He,Ie,Me,n(""),Re,n(""),Je,n(""),De,n(""),Pe,n(""),ze,n(""),Ve,n(""),Xe,Ge,Ye,We,n(""),Ue,n(""),Ke,n(""),Ze,n(""),$e,n(""),Qe,n(""),en,n(""),nn,n(""),ln,dn,sn,n(""),tn,n(""),cn,n(""),on,n(""),an,n(""),rn,n(""),un,n(""),vn,mn,bn,n(""),pn,n(""),hn,n(""),gn,n(""),fn,xn,_n,n(""),yn,wn,kn,n(""),jn,n(""),On,En,Nn,qn,n(""),Sn,n(""),Tn,An,Fn,n(""),Cn,n(""),Ln,n(""),Bn,n(""),Hn,n(""),In,Mn,Rn,n(""),Jn,n(""),Dn,n(""),Pn,n(""),zn,n(""),Vn,n(""),Xn])}const Zn=s(r,[["render",Gn],["__file","JS.html.vue"]]);export{Zn as default};
