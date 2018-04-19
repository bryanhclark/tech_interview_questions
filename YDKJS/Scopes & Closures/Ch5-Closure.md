## Closure

```
Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.
```


this works correctly
```js
for (var i=1; i<=5; i++) {
	(function(){
    var j = i
		setTimeout( function timer(){
			console.log( j );
		}, i*1000 );
	})();
}
```
or
```js
for(var i = 1; i <=5; i++){
  (function(j){
    setTimeout(function timer(){
      console.log(j)
    }, j*1000)
  })(i)
}
```

#### Using ```let```

```js
for (var i=1; i<=5; i++) {
	let j = i; // yay, block-scope for closure!
	setTimeout( function timer(){
		console.log( j );
	}, j*1000 );
}
```
or even better
```js
for (let i=1; i<=5; i++) {
	setTimeout( function timer(){
		console.log( i );
	}, i*1000 );
}
```

#### Modules
```js
function CoolModule() {
	var something = "cool";
	var another = [1, 2, 3];

	function doSomething() {
		console.log( something );
	}

	function doAnother() {
		console.log( another.join( " ! " ) );
	}

	return {
		doSomething: doSomething,
		doAnother: doAnother
	};
}

var foo = CoolModule();

foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3
```
CoolModule just returns an object with key's that point to functions within cool module, not the data values themselves.
This allows you to hide those data values within cool module

```js
var foo = (function CoolModule(id) {
	function change() {
		// modifying the public API
		publicAPI.identify = identify2;
	}

	function identify1() {
		console.log( id );
	}

	function identify2() {
		console.log( id.toUpperCase() );
	}

	var publicAPI = {
		change: change,
		identify: identify1
	};

	return publicAPI;
})( "foo module" );

foo.identify(); // foo module
foo.change();
foo.identify(); // FOO MODULE
```