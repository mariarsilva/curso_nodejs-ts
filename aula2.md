# Introdução a Sintaxe

## Referências

### Javascript
	- [en](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
	- [pt-BR](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Introduction)
	- [Padrões](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/JavaScript)

### Node.JS
	- API: https://nodejs.org/api/
	- Node Green: https://node.green/
	- Guides: https://nodejs.org/en/docs/guides/
	- Tudo em inglês. 😥

### Typescript
	- DOCS
		- [en](https://www.typescriptlang.org/docs/)
		- [pt](https://www.typescriptlang.org/pt/docs/)
			Tradução incompleta, mas já ajuda.
		- Destaque para o Handbook que é meu guia para o conteúdo dessas duas primeiras semanas. [link](https://www.typescriptlang.org/docs/handbook/intro.html)

## Hello World

```javascript
console.log("Hello World!");
```

### tsc vs ts-node

O `tsc` é só um compilador e ainda precisará de um segundo comando para executar o código.

O `ts-node` é um interpretador e pode ser usado como um REPL (read, eval, print, loop), muito útil em desenvolvimento e pequenos testes de sintaxe.
**Não use em produção.**

OBS: O `node` também é um interpretador e pode ser usado como um `REPL`.

#### __COMO TRANSFORMAR O HELLO WORLD EM NÃO JAVASCRIPT?__

__RESPOSTA__

```javascript
const message: string = "Hello World!"
console.log(message);
```

```javascript
const emptyValue: number;
const message: string = "Olá Mundo!";
const booleanValue = true; // funciona, mas evite.

[const|let|var] [nomeVariavel] (= [valorInicial]);
````

### tsconfig.json

Define as configurações básicas do compilador como qual a padrão de Javascript será o código gerado, caminho para código fonte, destino do código de "build", qual tipo de modulos será utilizado e etc.

```json tsconfig.json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "build",
    "baseUrl": ".",
    "paths": {
      "*": [
        "node_modules/*",
        "src/types/*"
      ]
    },

    "target": "es6",
    "module": "commonjs",
    "rootDir": "./",
    "noImplicitAny": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
  },
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

## Variáveis e Tipos Básicos:

### Como declarar variáveis

`[const|let|var] [nomeVariavel] (= [valorInicial]);`

`const`: Use para criar constantes.
`let`: Uso mais comum, pode-se alterar o valor e o escopo será por bloco de código, normalmente é delimitado pelas `{}`. Cuidado com as "shadowed variables".
`var`: Uso mais "arcaico", o escopo é determinado pela função onde foi declarada.

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_Types#vari%C3%A1veis

### Tipos Básicos

`boolean`,
`number`,
`string`,
`object`,
`function`,

Em fato em javascript tudo é um Objeto:
	`{}` é `"object"` e
	`[]` também é `"object"`.

Quanto as funções, pode ser algo estranho para alguns, mas as funções podem ser armazenadas em variáveis e serem passaradas como parametros ou serem retornos de métodos.

```javascript
function foo() { console.log("bar"); }
const foo = function () { console.log("bar"); }
```

Em suma as contruções acima são identicas.

Não temos `char` nem `byte`. Lembrem  que a origem da linguagem era executar no navegador.

Já passaram pela fase em que queria usar double para tudo quanto é número na vida? Aqui isso é uma verdade. Não tem diferença entre `float` e `int`, embora [eles possam existir internamente](https://stackoverflow.com/questions/5179836/difference-between-floats-and-ints-in-javascript).

#### Valores e Tipos Especiais

`undefined` => variáveis não inicializadas,
`null` 		=> comumente utilizado para retornos vazios,

`void`		=> normalmente indicado para falar que um função não retorna nenhum valor.
`any`		=> typo mais abrangente possível.

O `any` é igual advogado: você evita ao máximo, mas pode ser necessário e útil.

## Operadores

```javascript
(+)     // Addition
(=)     // Assignment
(&=)    // Bitwise AND assignment
(&)     // Bitwise AND
(~)     // Bitwise NOT
(|=)    // Bitwise OR assignment
(|)     // Bitwise OR
(^=)    // Bitwise XOR assignment
(^)     // Bitwise XOR
(,)     // Comma operator
(?:)    // Ternary Conditional
(--)    // Decrement
(/=)    // Division assignment
(/)     // Division
(==)    // Equality
(**=)   // Exponentiation assignment
(**)    // Exponentiation
(>=)    // Greater than or equal
(>)     // Greater than
( )     // Grouping operator
(++)    // Increment
(!=)    // Inequality
(<<=)   // Left shift assignment
(<<)    // Left shift
(<=)    // Less than or equal
(<)     // Less than
(&&=)   // Logical AND assignment
(&&)    // Logical AND
(!)     // Logical NOT
(??=)   // Logical nullish assignment
(||=)   // Logical OR assignment
(||)    // Logical OR
(*=)    // Multiplication assignment
(*)     // Multiplication
(??)    // Nullish coalescing operator
(?.)    // Optional chaining
(%=)    // Remainder assignment
(%)     // Remainder
(>>=)   // Right shift assignment
(>>)    // Right shift
(...)   // Spread syntax
(===)   // Strict equality
(!==)   // Strict inequality
(-=)    // Subtraction assignment
(-)     // Subtraction
(-)     // Unary negation
(+)     // Unary plus
(>>>=)  // Unsigned right shift assignment
(>>>)   // Unsigned right shift

````

## Condicionais

```javascript
if (conditionExpression) {
  doStuff();
} else {
  doOtherStuff();
}

switch (comparedValue) {
  case referenceValueA:
    doStuffA();
    break;
  case referenceValueB:
    doStuffB();
    break;
  default:
    doOtherStuff();
    break;
}

conditionExpression ? doStuff() : doOtherStuff(); //⚠️ WARNING ⚠️
```

## Estruturas de Repetição

As mesmas do Javascript.

```javascript
while (conditionExpression) {
	doStuff();
}

do {
	doStuff();
} while (conditionExpression);

// loop convencional
for (let i = 0; i < 10; i++) {
	doStuff(i);
}

// loop nas chaves
for (let index in iterable) {
	const value = iterable[index];
	doStuff(index, value);
}

// loop nos valores
for (let value of iterable) {
	doStuff(value)
}

break;
continue;
```

## Funções:

```typescript
function do(param1: Type1, param2: Type2): RetType {
	// Implementation
}

(paramValue: ParamType): ReturnType => expression
(paramValue: ParamType): ReturnType => {
	// Implementation
}
```

exemplo

```typescript
function square(n: number): number {
	return n*n;
}

const square = (n: number): number => n*n;


// const squareFnType = (number) => number

```

## PRATICA => FINALMENTE

Bora implementar um `leftPad`.

```typescript
function leftPad(base: string, size: number, complemento: string) {
	return "";
}

console.log(leftPad("1234", 8, "0") === "00001234");
```
