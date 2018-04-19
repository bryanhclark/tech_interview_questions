### Strict Mode

prvents the implicite auto-gloabl varibale declarion you get by forgetting the ```var``` keyword

```js
function foo() {
	"use strict";	// turn on strict mode
	a = 1;			// `var` missing, ReferenceError
}

foo();
```

## Closure

A way to 'remember' and continue to access a function's scope even once the function has finished running

### Modules

Modules let you define private implementation details (variables, functions) that are hidden from the outside world
```js
function User(){
	var username, password;

	function doLogin(user,pw) {
		username = user;
		password = pw;

		// do the rest of the login work
	}

	var publicAPI = {
		login: doLogin
	};

	return publicAPI;
}

// create a `User` module instance
var fred = User();

fred.login( "fred", "12Battery34!" );

```
We don't call ```new User()``` so when we can  ```User()``` on ```fred``` we get a new instsance of User that returns ```publicAPI``` which becomes the instance of ```fred```
```fred.login()``` is just a property on the instance of puplicAPI which has access to ```doLogin()``` through ```User``` scope

## ```this```

```js
function foo() {
	console.log( this.bar );
}

var bar = "global";

var obj1 = {
	bar: "obj1",
	foo: foo
};

var obj2 = {
	bar: "obj2"
};

// --------

foo();				// "global"
obj1.foo();			// "obj1"
foo.call( obj2 );		// "obj2"
new foo();			// undefined
```
1. ```foo()``` ends up setting this to the global object because we're not in strict mode. If in strict mode, ```this``` would be ```undefined``` and you'd get an error accessing ```this.bar```
4. ```new foo()``` sets ```this``` to a brand new empty object

## Polyfilling 
Refers to taking the definition of a newer JS feature and producing code that is the equivalent to the behavior of older versions of JS

## Transpiling
transforming and compiling
This is a better tool than polyfilling, as is converts newer code to older code