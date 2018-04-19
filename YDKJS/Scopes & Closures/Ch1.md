## What is Scope

### Compiler Theory

javaScript is a compiled language

Three Steps before is it executed:
1.  **Tokenizing/Lexing:** breaking up a string of characters into meaningful chunks, called tokens. 
2.  **Parsing:** taking a stream of tokens and turning it into a tree of nested elements which collectively represent the grammatical structure of the program. This tree is called an **AST (Abstract Syntax Tree)**
3. **Code Generation:** process of taking the AST and turning it into executable code

## RHS vs LHS

### Right-Hand-side Lookup
Looking up the value of a variable is called RHS lokup (right side of the '=')
Unfulfilled RHS lookup's result in a reference error
