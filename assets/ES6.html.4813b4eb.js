import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as r,a as n,d as e,e as i,b as a,f as l,r as c}from"./app.eb0a2683.js";const u={},v=l('<h2 id="var、let和const区别" tabindex="-1"><a class="header-anchor" href="#var、let和const区别" aria-hidden="true">#</a> var、let和const区别</h2><p>var是<code>es6之前</code>用来声明变量的关键字，let和const是<strong>es6新增</strong>的声明变量的关键字。</p><p>var声明的变量属于<code>函数作用域</code>，而let和const声明的变量属于<code>块级作用域</code>。</p><p>var存在<code>变量提升</code>，而<code>let和const不存在</code>，变量提升就是可以在声明前访问它。</p><p>var在全局作用域下声明的变量会<code>被挂载到window对象</code>上，而let和const不会。</p><p>var可以<code>重复声明</code>，而let <code>重复声明会报错</code>。</p><p>var和let声明时可以不赋值，但是const声明的是一个常量，必须赋值，且初始值不可以改变。</p><blockquote><p>const如果初始值是一个引用类型，那边非第一层级的属性值依旧可以改变，因为const强调得是指针地址的引用，所以它只能保证当前引用的变量不变。如果想定义一个完全不可更改得对象，可以使用Object.freeze()递归遍历对象属性。</p></blockquote><h2 id="对象新增扩展" tabindex="-1"><a class="header-anchor" href="#对象新增扩展" aria-hidden="true">#</a> <code>对象</code>新增扩展：</h2><ol><li>属性简写，当对象键名和对应值名相等时，可以进行简写</li></ol>',10),o=e("ol",{start:"2"},[e("li",null,"扩展运算符=>解构赋值")],-1),m=e("ol",{start:"3"},[e("li",null,[e("p",null,"属性遍历"),e("ol",null,[e("li",null,"for...in遍历对象自身和原型上可枚举的属性"),e("li",null,"Object.keys(obj) 遍历对象自身的可枚举属性"),e("li",null,"Object.getOwnPropertyNames(obj) 遍历对象自身属性(含可枚举、不含Symbol)"),e("li",null,"Object.getOwnPropertyNames(obj)对象自身所有Symbol属性的键名"),e("li",null,"Reflect.ownKeys(obj)遍历对象自身所有属性(含可枚举、Symbol)")])])],-1),b={start:"4"},h=e("p",null,"新增的方法",-1),p={href:"http://Object.is",target:"_blank",rel:"noopener noreferrer"},g=e("li",null,"Object.assign()",-1),f=e("li",null,"Object.getOwnPropertyDescriptors()返回对象自身所有自身属性(非继承)的描述对象",-1),_=e("li",null,"Object.setPrototypeOf()设置对象原型对象、Object.getPrototypeOf()获取对象原型对象",-1),x=e("li",null,"Object.keys()、Object.values()、Object.entries()",-1),y=e("h2",{id:"数组-新增扩展",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#数组-新增扩展","aria-hidden":"true"},"#"),i(" **"),e("code",null,"数组"),i("**新增扩展：")],-1),j=e("ol",null,[e("li",null,"扩展运算符")],-1),k=e("ol",{start:"2"},[e("li",null,"构造函数Array.from 和 Array.of")],-1),P=l('<ol start="3"><li><p>实例新增方法</p><ol><li>copyWithin(target,start,end) [1,2,3,4,5].copyWithin(0,3)=&gt;[4,5,3,4,5]将index=3位置到结束复制到index=0,覆盖原来得1,2</li><li>find(cb(v,i,arr))返回第一个满足条件的数组成员</li><li>findIndex(cb(v,i,arr))返回第一个满足条件的数组成员下标</li><li>fill(v,start,end)填充数组，不提供第二、三参数，填充整个数组</li><li>entries()、keys()、values()</li><li>includes(v)</li><li>flat()</li><li>flatMap(cb)对原数组的每个成员执行回调函数，相当于<code>Array.prototype.map()</code>，再对数组进行<code>flat()</code>，返回新数组</li></ol></li></ol><h2 id="函数-新增扩展" tabindex="-1"><a class="header-anchor" href="#函数-新增扩展" aria-hidden="true">#</a> **<code>函数</code>**新增扩展：</h2><ol><li>参数：es6允许为函数的参数<code>设置默认值</code>，注意：函数的形参不能使用let和const再次声明，否则报错</li></ol>',3),S=l(`<ol start="2"><li><p>属性</p><ol><li>length属性：<code>(function(a,b,c=2){}).length</code>，结果2，返回没有指定默认值的参数个数(必须是尾参数,比如<code>(function(a=2,b,c){}).length</code>),结果0</li><li>name属性</li><li><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var f = funtion(){}
f.name//&quot;f&quot;

var f = function n(){}
f.name//&quot;n&quot;

(new Function()).name//&#39;anonymous&#39;

(function x(){}).bind({}).name//&quot;bound x&quot; bind都加上&quot;bound前缀&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li></ol>`,1),E=l(`<ol start="3"><li>函数设置默认值时出现暂时作作用域</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let x = 1;
function f(y=x){
    //等同于let y = x;
    let x = 3;
    console.log(y)//1
}
f()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>开启严格模式, 函数使用了默认值解构赋值\\或者扩展运算符,都会报错</li></ol>`,3),O=l(`<ol start="5"><li><p>箭头函数(箭头函数和普通函数的区别)</p><ol><li><code>this指向上一层级的作用域</code>, 在声明时作用域已经确定</li><li><code>不能使用new操作符,</code>即不能做构造函数</li><li>函数内<code>没有arguments参数</code></li><li><code>不能使用yield命令,不能作为Generator函数</code></li></ol></li></ol><h2 id="set-map-两种数据结构如何理解" tabindex="-1"><a class="header-anchor" href="#set-map-两种数据结构如何理解" aria-hidden="true">#</a> **<code>Set Map</code>**两种数据结构如何理解?</h2><p>Set是es6新增的数据结构, <code>类似于数组,</code>是一种<code>集合</code>的数据结构,但是<code>set中的成员必须是唯一的</code>,无序无关联的</p><p>Set本身是一个构造函数,实例方法有: add() delete() has() clear() 遍历器keys() values() entries() forEach()</p><p>应用: 求交集 并集和差集</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let a = new Set([1,2,3])
let b = new Set([4,3,2])

//并集
let union = new Set([...a,...b])
//交集
let intersect = new Set([...a].filter(v=&gt;b.has(v)));
//差集
let difference = new Set([...a].filter(v=&gt;!b.has(v)));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Map是键值对的有序列表, <code>类似于对象</code>,是一种字典的数据结构,其<code>键值可以是任意类型</code></p><p>Map本身是构造方法, 实例方法有: size set() get() has() delete() clear() 遍历器 keys() values() entries() forEach()</p><blockquote><p>Map和Object的区别: Map的<code>key可以是任意类型</code>,而Object的key只能是<code>字符串类型或Symbol类型</code></p></blockquote><p>WeakSet和WeakMap相对于Set Map的区别:</p><p>WeakSet:</p><ul><li>WeakSet中的成员<code>必须是一个具有Iterable接口的对象</code>,即只能是引用类型,不能是其他类型</li></ul>`,12),q=e("ul",null,[e("li",null,[i("WeakSet中对对象的引用"),e("code",null,"是弱引用"),i(",也就是当其他对象不再有对该对象的引用,垃圾回收机制就会销毁并会后该对象占有的内存 , 不会考虑它在WeakMap中的引用.")])],-1),w=e("ul",null,[e("li",null,"所以WeakMap没有遍历操作的API,也没有size属性")],-1),R=e("p",null,"WeakMap:",-1),N=e("ul",null,[e("li",null,[i("WeakMap中的"),e("code",null,"键必须是对象,不能是其他类型")])],-1),F=e("ul",null,[e("li",null,"WeackMap中对对象的引用是弱引用")],-1),L=l(`<ul><li>没有遍历操作,也没有clear操作方法</li></ul><p><strong><code>难</code></strong></p><p>手写Set</p><p>方法: has clear add delete values</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Set{
    constructor(){
        this.list = {}
        this.size = 0;
    }
    has(value){
        return value in this.list
    }
    add(value){
        if(!this.has(value)){
            this.list[value] = value;
            this.size++;
        }
        return this;
    }
    delete(value){
        if(this.has(value)){
            delete this.list[value];
            this.size--;
        }
        return this;
    }
    clear(){
        this.list = {};
        this.size = 0;
    }
    values(){
        let result = []
        for(let key in this.list){
           if(this.list.hasOwnProperty(key)){
                result.push(key);
           }
        }
       return result;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>手写map</p><p>set() get() delete() clear() keys() values()</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function defaultToString(key){//对key的类型处理
    if(key === null){
        return &#39;NULL&#39;
    }else if(key === undefined){
        return &#39;UNDEFINED&#39;
    }else if(Object.prototype.toString.call(key) === &#39;[object Object]&#39; || Object.prototype.toString.call(key)===&#39;[object Array]&#39;)
    {
        return JSON.stringify(key);
    }
    return key.toString()
}

class Map(){
    constructor(){
        this.list = {};
        this.size = 0;
    }
    has(key){
        return this.list[defaultToString(key)] !=== undefined;
    }
    
    set(key,value){
        if(!this.has(key)){
            this.list[defaultToString(key)] = value;
            this.size++;
        }
        return this;
    }
    get(key){
        return this.list[defaultToString(key)]
    }
    detele(key){
        if(this.has(key)){
            delete this.list[defaultToString(key)];
        }
        return this;
    }
   clear(){
       this.list = {};
       this.size();
   }
   keys(){
       let result = [];
       for(let key in this.list){
           if(this.has(key)){
               result.push(key)
           }
       }
       return result;
   }
   values(){
       let result = [];
       for(let key in this.list){
           if(this.has(key)){
               result.push(this.list[key])
           }
       }
       return result;
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promise-理解与应用场景" tabindex="-1"><a class="header-anchor" href="#promise-理解与应用场景" aria-hidden="true">#</a> **<code>Promise</code>**理解与应用场景</h2><p>Promise译为&quot;承诺&quot;,是异步编程的一种解决方案, 它的提出是<code>为了解决传统请求存在的&quot;回调地狱&quot;问题</code>, Promise通过链式调用降低了代码的层级编写(难度),代码的可读性更高.</p><p>Promise有三种状态:</p><ul><li><code>pending(进行中)</code></li></ul>`,12),M=e("ul",null,[e("li",null,[e("code",null,"fullfilled(已成功)")])],-1),D=e("ul",null,[e("li",null,[e("code",null,"rejected(已失败)")])],-1),C=e("p",null,"特点:",-1),I=e("ul",null,[e("li",null,[e("code",null,"对象状态不受外界的影响"),i(", 只有异步操作的结果,可以决定当前是哪种状态")])],-1),z=l("<ul><li>一旦状态改变(<code>penging</code>变成<code>fullfilled</code>和<code>pending</code>变成<code>rejected</code>), 就不会发生改变</li></ul><p><code>实例方法</code></p><ul><li><code>then(resolved=&gt;{},rejected=&gt;{})</code></li></ul>",3),W=e("ul",null,[e("li",null,'catch发生错误返回 , Promise的错误具有"冒泡"性质,一直向后传递,知道被捕获为止')],-1),G=e("ul",null,[e("li",null,"finnally 不管Promise对象最后状态如何,都会执行的操作.")],-1),T=e("p",null,[e("code",null,"构造函数")],-1),J=e("ul",null,[e("li",null,[e("code",null,"all()"),i(" 传入一个由promise请求构成的数组, "),e("code",null,"当所有的promise都resolve才返回最终结果"),i(", 如果其中任何一个promise发生了rejected,那么就返回的结果就直接rejected")])],-1),K=e("ul",null,[e("li",null,[e("code",null,"race()"),i("传入一个由promise请求构成的数组,将"),e("code",null,"第一个返回值作为返回值"),i(", 其他的promise依旧会进行,没有被打断")])],-1),A=e("ul",null,[e("li",null,[e("code",null,"allSettled()"),i(" 传入一个由promise请求构成的数组, 只有等到所有promise参数实例都返回结果, 不管是rejected还是fullfilled, 才会返回对应的结果数组")])],-1),U=e("ul",null,[e("li",null,[e("code",null,"resolve()"),i("将传入的参数封装成Promise对象返回,状态为 rejected")])],-1),V=l(`<ul><li><code>reject()</code>将传入的参数封装成Promise对象返回,状态为fullfilled</li></ul><p><strong><code>难</code></strong></p><p>手写一个简易的Promise</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const PENDING = &quot;pending&quot;;
const REJECTED = &quot;rejected&quot;;
const FULLFILLED =&quot;fullfilled&quot;;
class MyPromise{//https://zhuanlan.zhihu.com/p/183801144
    constructor(executor){
        this.status = PENDING;
        this.value = null;
        this.reason = null;
        this.resolvedCallbacks = [];
        this.rejectedCallbacks = [];
        let resolve = (value)=&gt;{
            if(this.status === PENDING){
                this.status = FULLFILLED;
                this.value = value;
                this.resolvedCallbacks.forEach(fn=&gt;fn())
            }
        }
       let reject = (reason)=&gt;{
           if(this.status == PENDING){
               this.status = REJECTED;
               this.reason = reason;
               this.rejectedCallbacks.forEach(fn=&gt;fn())
           }
       }
    }
    try{
        executor(resolve,reject)//封装执行器
    }catch(err){
        reject(err)
    }
    then(onFullfilled,onRejected){
       onFullfilled = typeof onFullfilled === &quot;function&quot;
       ?onFullfilled:function(value){
           return value
       };
       onRejected = typeof onRejected === &quot;function&quot;?
       onRejected:function(error)[
           throw error;
       }
       if(this.status === PENDING){
           this.resolvedCallbacks.push(onFullfilled)
           this.rejectedCallbacks.push(onRejected);
       }
       if(this.status === FULLFILLED ){
           onFullfilled(this.value)
       }
       if(this.status === REJECTED){
           onRejected(this.value);
       }
    }
}

let p = new MyPromise((resolve,reject)=&gt;{//未实现链式调用值穿透
    resolve(2)//reject(3)
}).then(res=&gt;{

},err=&gt;{

})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>手写Promise.all()</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Promise.all = function(promises){
    return new Promise((resolve,reject)=&gt;{
        let count = 0;
        let len = promises.length;
        let result = [];
        if(len === 0) resolve([])
        promises.forEach((p,i)=&gt;{
            Promise.resolve(p).then(res=&gt;{
                count +=1;
                result[i] = res;
                if(count === len) resolve(result)
            }).catch(err=&gt;{
                reject(err)
            })
        }) 
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>手写Promise.race()</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Promise.race = function(promises){
    return new Promise((resolve,reject)=&gt;{
        promises.forEach(p=&gt;{
            Promise.resolve(p).then(resolve).catch(reject)
        })
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>手写allSettled()</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Promise.allSettled = function(promises){
    return new Promise((resolve,reject)=&gt;{
        let result = [];
        let count = 0;
        let len = promises.length;
        if(len === 0) resolve([])
        promises.forEach((p,i)=&gt;{
            Promise.resolve(p).then(res=&gt;{
              count +=1;
              result[i] = {
                  value:res,
                  status:&quot;fullfilled&quot;
              };
              if(count === len ) resolve(result)
            }).catch(err){
                result[i] = {
                    value:err,
                    status:&quot;rejected&quot;
                };
                if(count === len ) resolve(result)
            }
        })
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>手写Promise.resolve()</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Promise.resolve = function(value){
    if(value instanceOf Promise){
        return value;
    }
    return new Promise((resolve,_)=&gt;resolve)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>手写Promise.reject()</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Promise.reject = function(value){
    return new Promise((_,reject)=&gt;reject)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="proxy-理解-使用场景有哪些" tabindex="-1"><a class="header-anchor" href="#proxy-理解-使用场景有哪些" aria-hidden="true">#</a> **<code>Proxy</code>**理解,使用场景有哪些?</h2><p>Proxy用于<code>创建一个对象的代理</code>,从而实现基本操作的<code>拦截和定义</code>(如属性查找\\赋值\\枚举\\函数调用)</p><p>Proxy本身为构造函数,<code>new Proxy(target,handler)</code></p><p>target: 所有拦截的目标对象</p><p>handler: 通常以函数作为属性的对象, 执行代理行为</p><p>handler对象的属性:</p><ul><li>get(target,propKey,receiver)</li></ul>`,21),B=e("ul",null,[e("li",null,"set(target,propKey,value,receiver)")],-1),$=e("ul",null,[e("li",null,[i("has(target,propKey)拦截"),e("code",null,"propKey in proxy")])],-1),H=e("ul",null,[e("li",null,"deleteProperty(target,propKey)")],-1),Q=e("ul",null,[e("li",null,"ownKeys(target)")],-1),X=e("ul",null,[e("li",null,"defineProperty(target,propKey,propDesc)")],-1),Y=e("ul",null,[e("li",null,"getPrototypeOf(target)")],-1),Z=e("ul",null,[e("li",null,"setPrototypeOf(target,proto)")],-1),ee=e("ul",null,[e("li",null,"apply(target,Object,args)")],-1),ne=e("ul",null,[e("li",null,"construct(target,args)")],-1),ie=e("h2",{id:"reflect-需要在内部调用对象的默认行为-建议使用reflect",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#reflect-需要在内部调用对象的默认行为-建议使用reflect","aria-hidden":"true"},"#"),i(),e("code",null,"Reflect"),i(" 需要在内部调用对象的默认行为, 建议使用Reflect")],-1),le=e("p",null,"特点:",-1),se=e("ul",null,[e("li",null,[i("Proxy对象具有的代理方法,"),e("code",null,"Reflect"),i("全部具有,以静态方法的形式存在")])],-1),de=e("ul",null,[e("li",null,[i("修改某些"),e("code",null,"Object"),i("方法的返回结果, 让其变得合理")])],-1),te=e("ul",null,[e("li",null,[i("让"),e("code",null,"Object"),i("操作都变成函数行为")])],-1),re=e("p",null,"作用",-1),ae=e("ul",null,[e("li",null,"Object中一些明显的语言内部行为, 比如Object.defineProperty(),放到Reflect对象上,未来一些方法也只会部署到Reflect对象上")],-1),ce=e("ul",null,[e("li",null,"Object上存在的一些命令式操作可以使用Reflect修改成函数操作,比如name in obj 或delete obj[name] 分别替换成Reflect.delete(obj,name) Reflect.has(obj,name)")],-1),ue=e("ul",null,[e("li",null,"修改Object中一些函数的返回结果,使它更加合理,比如Object.definePropety无法定义对象的属性时,抛出一个错误, 使用Reflect返回false")],-1),ve=e("ul",null,[e("li",null,"Reflect对象上的方法与Proxy上的一一对象,可以为Proxy提供修改对象的默认行为")],-1),oe=e("p",null,"使用场景",-1),me=e("ul",null,[e("li",null,"拦截和监视外部对对象得访问")],-1),be=e("ul",null,[e("li",null,"降低函数或类的复杂度")],-1),he=l(`<ul><li>在复杂操作前对操作进行校验或对所需资源进行管理</li></ul><p><code>使用Proxy保障数据类型的准确性</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let target = {count:0,amount:1234}
let proxy = new Proxy(target,{
    set(target,key,value,proxy){
        if(typeof value !== &#39;number&#39;){
            throw Error(&#39;属性只能是number&#39;)
        }
        return Reflect.set(target,key,value)
    }
})

target.count =&#39;foo&#39;//Error:&#39;属性只能是number&#39;
target.count =23
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用Proxy实现<code>观察者模式</code></p><p>观察者模式是指函数自动观察数据对象,一旦对象有变化,函数就会自动执行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
function set(target,key,value,receiver){
    const result = Reflect.set(target,key,value,receiver);
    queueObservers.forEach(observer =&gt; observer())//set触发执行observe的print
    return result;
}
const queueObservers = new Set();
const observe = fn=&gt;queueObservers.add(fn);
const observable = obj =&gt; new Proxy(obj,{set})

const person = observable({
    name:&#39;远方&#39;,
    age:18
})
function print(){
    console.log(\`\${person.name},\${person.age}\`)
}
observe(print)
person.name = &#39;星星&#39;//触发print自动执行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="generator函数-和其使用场景" tabindex="-1"><a class="header-anchor" href="#generator函数-和其使用场景" aria-hidden="true">#</a> **<code>Generator函数</code>**和其使用场景</h2><p>Generator函数为异步编程提供了一种方案, 其特点是</p><ul><li><code>function</code>关键字与函数名之间有一个星号</li></ul>`,9),pe=l(`<ul><li>函数体内部使用<code>yield</code>表达式,定义不同的内部状态</li></ul><p>Generator函数返回一个遍历器对象, 即具有Symbol.iterator属性, <code>{value:23,done:true/false}</code>结构 . 通过<code>yield</code>关键字可以暂停generator函数返回的遍历器状态</p><p>使用场景:</p><p>async/await实际上是Generator函数实现异步编程的语法糖</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function* gen(){
    const res1 = yield fn(1);
    const res2 = yield fn(res1);
    const res3 = yield fn(res1);
    return res3
}

function generatorAuto(generatorFn){
    return function(){
        return new Promise((resolve,reject)=&gt;{
            const gen = generatorFn();
            const next1 = gen.next();//返回值next1:{Promise:{},done:false}
            next1.value.then(res1=&gt;{
                const next2 = gen.next(res1);//传入结果res1
                next2.value.then(res2=&gt;{
                    const next3 = gen.next();//传入结果res2
                    next3.value.then(res3=&gt;{
                        resolve(g.next(res3).value)
                    })
                })
            })
        })
    }
}
const asyncFn = generatorAuto(gen)
asyncFn().then(res=&gt;console.log(res))//3秒后输出8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="module模块化" tabindex="-1"><a class="header-anchor" href="#module模块化" aria-hidden="true">#</a> <strong><code>module模块化</code></strong></h2><p>commonJS与ES6模块化的区别:</p><ol><li>CommonJS模块输出的是一个<code>值得拷贝</code>,而ES6模块输出的是一个<code>值的引用</code>. 一个值的拷贝:也就是说一旦输出一个值,模块内部的变化不会引起整个值的变化. 而ES6模块在js引擎对脚本进行静态分析时,遇到import命令, 会生成一个只读引用,等到脚本真正执行时,才会根据值得引用去加载模块中的取值</li></ol>`,8),ge=e("ol",{start:"2"},[e("li",null,[i("CommJS"),e("code",null,"是同步加载"),i(",而ES6"),e("code",null,"是编译时加载.")])],-1),fe=e("p",null,"引入CommonJS加载是一个对象(module.exports属性), 该对象只有在脚本运行完才会生成; 而ES6模块不是对象,它的对外接口是export xx的静态定义,在代码静态解析阶段就会生成.",-1);function _e(xe,ye){const s=c("ExternalLinkIcon");return t(),r("div",null,[v,n(""),o,n(""),m,n(""),e("ol",b,[e("li",null,[h,e("ol",null,[e("li",null,[e("a",p,[i("Object.is"),a(s)]),i("()")]),g,f,_,x])])]),y,j,n(""),k,n(""),P,n(""),S,n(""),E,n(""),O,n(""),q,n(""),w,R,N,n(""),F,n(""),L,n(""),M,n(""),D,C,I,n(""),z,n(""),W,n(""),G,T,J,n(""),K,n(""),A,n(""),U,n(""),V,n(""),B,n(""),$,n(""),H,n(""),Q,n(""),X,n(""),Y,n(""),Z,n(""),ee,n(""),ne,ie,le,se,n(""),de,n(""),te,re,ae,n(""),ce,n(""),ue,n(""),ve,oe,me,n(""),be,n(""),he,n(""),pe,n(""),ge,fe])}const Pe=d(u,[["render",_e],["__file","ES6.html.vue"]]);export{Pe as default};
