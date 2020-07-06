## Hoisting

> 호이스팅 개념
> hoisting은 코드에 선언된 변수 및 함수를 코드 상단으로 끌어올리는 것을 말하며
> 이는 변수의 범위가 전역 범위인지 함수 범위인지에 따라 다르게 수행될 수 있다.
> 함수 내에서 선언한 함수 범위(function scope)의 변수는 해당 함수의 최상위로,
> 함수 밖에서 선언한 전역 범위(global scope)의 전역 변수는 스크립트 단위의 최상위로 끌어올려진다.
> * let 과 const변수는 호이스팅은 수행하나 에러 발생
<br/>
<br/>

## Event Handler, Event Listener
> Event Handler와 Event Listener는 같은 말이며
> Event를 처리하는 2가지 방식이 있음
> ex) button (id는 btn1) 클릭 이벤트 처리하기
> 1. btn1.onclick = f (){};  // 이때 onclick은 이벤트 속성, 우측에 f함수는 이벤트 핸들러, 리스너
> 2. btn1.addEventListener("click", f)
<br/>
<br/>

###실제 코드에서 활용한 부분

<br/>

```
btn4.onclick = function(){	 // btn4 는 객체, 객체는 속성과 행위가 있다. onclick 이벤트 속성
	// Event Handler
	var person = {name:"한지윤", subject:"소프트웨어전공"};
	person.grade = 4;
	person.study = function(s){ // 동작을 쓰는건 무조건 함수, 이름이 필요없어서 안쓰는 익명함수, 원래는 function aa(){}
	here.innerHTML += s+ "열공";
};
```

<br/>

```
btn1.onclick = function(){
			obj.name = "한지윤"	// 수정
			obj.score = 100		// 추가
			console.log(`이름은 ${obj.name}`);
			console.log(`나이는 ${obj["age"]}`);
			here.innerHTML = `이름은 ${obj.name}
			나이는 ${obj["age"]}
			점수는${obj.score}
			`;
		};
```

<br/>
<br/>

## 리터럴 함수
> 리터럴은 코드상에서 데이터를 표현하는 방식이다.
> 일반적으로 객체 중심 혹은 객체 지향 언어에서는 객체의 리터럴 표기법을 지원한다.
> 리터럴 표기법이란, 변수를 선언함과 동시에 그 값을 지정해주는 표기법을 말한다.
> ex) var no = 3;
> ex) var obj = {name:'jenny', age: 27};

<br/>

```
		var call = function(a, b, c){
			return a+b+c;
		};
```
