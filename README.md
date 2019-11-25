<h1 align="center">GameWriter</h1>

<p align="center">GameWriter uses the document to write over a canavas for increased performance when using text in games.</p>

<div align="center">

  [![NPM version](https://img.shields.io/npm/v/gamewriter.svg?style=flat)](https://www.npmjs.com/package/gamewriter)
  [![Known Vulnerabilities](https://snyk.io/test/github/robertcorponoi/gamewriter/badge.svg)](https://snyk.io/test/github/robertcorponoi/gamewriter)
  ![npm](https://img.shields.io/npm/dt/gamewriter)
  [![NPM downloads](https://img.shields.io/npm/dm/gamewriter.svg?style=flat)](https://www.npmjs.com/package/gamewriter)
  <a href="https://badge.fury.io/js/gamewriter"><img src="https://img.shields.io/github/issues/robertcorponoi/gamewriter.svg" alt="issues" height="18"></a>
  <a href="https://badge.fury.io/js/gamewriter"><img src="https://img.shields.io/github/license/robertcorponoi/gamewriter.svg" alt="license" height="18"></a>
  [![Gitter](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/robertcorponoi)

</div>


## **Why**

A lot of JavaScript animation and game libraries like to offer ways to write text to the canvas graphically which is convenient but not always performant. GameWriter handles the ugly parts of writing on top of the canvas using the document so that you can have crisp, clean, and performant text on your game.

## **Fonts**

Before we start, a quick message about fonts. In order to keep the performance high and avoid unnecessary events and callbacks, all fonts that you want used in your game should be loaded before using GameWriter. This means that you should have the links to the fonts defined in the head of the document or in the CSS so that GameWriter can focus on writing and not loading.

**Table of Contents**

- [Installation](#installation)
- [Initialization](#initialization)
- [API](#api)
- [Text API](#text-api)

## **Installation**

To install GameWriter, you can do so through npm like so:

```bash
$ npm install gamewriter
```

and then in your project, import it like so:

```js
// Webpack
import GameWriter from 'gamewriter';

// Browser
import GameWriter from './path/to/gamewriter.js';
```

## **Initialization**

To initialize GameWriter, you must at the very least pass a reference to the canvas element being used:

```js
const canvas = document.getElementById('myCanvas');

const gamewriter = new GameWriter(canvas);
```

along with the canvas, the following options can be passed to GameWriter:

| param               	| type              	| description                                                                                                               	| default 	|
|---------------------	|-------------------	|---------------------------------------------------------------------------------------------------------------------------	|---------	|
| canvas              	| HTMLCanvasElement 	| The canvas to draw the text onto                                                                                          	|         	|
| options             	| Object            	|                                                                                                                           	|         	|
| options.autoDisplay 	| boolean           	| Indicates whether text nodes are displayed on the canvas after they are created or if they have to be displayed manually. 	| true    	|

## **API**

The following are the properties and methods available for use on an instance of gamewriter.

### **addText**

Adds a new piece of text to the game.

| param        | type   | description                        | default |
|--------------|--------|------------------------------------|---------|
| text         | string | The text to write onto the game    |         |
| x            | number | The x position of the text         |         |
| y            | number | The y position of the text         |         |
| options      | Object |                                    |         |
| options.size | number | The size of the text (1-10)        | 1       |

**example:**

```js
const title = gamewriter.addText('My Game', 100, 150, { size: 5 });
```

### **removeText**

Removes a piece of text from the game.

| param        | type   | description                                | default |
|--------------|--------|--------------------------------------------|---------|
| text         | Text   |A reference to the text object to remove    |         |

**example:**

```js
const title = gamewriter.addText('My Game', 100, 150);

gamewriter.removeText(title);
```

### **clear**

Removes all pieces of text from the game.

**example:**

```js
const title = gamewriter.addText('My Game', 100, 150);
const subTitle = gamewriter.addText('Its the best', 100, 200);

gamewriter.clear();
```

## **Text API**

The following are properties and methods available for every text object created through `addText`. Any of the properties that have a setter also have a getter.

### **x**

Sets a new x position for the text.

| param        | type   | description                          | default |
|--------------|--------|--------------------------------------|---------|
| newX         | number | The new x position of for the text   |         |

**example:**

```js
const title = gamewriter.addText('My Game', 100, 150);

title.x = 350;
```

### **y**

Sets a new y position for the text.

| param        | type   | description                          | default |
|--------------|--------|--------------------------------------|---------|
| newY         | number | The new y position of for the text   |         |

**example:**

```js
const title = gamewriter.addText('My Game', 100, 150);

title.y = 350;
```

### **move**

Moves the text to a specified (x, y) position.

| param        | type   | description                          | default |
|--------------|--------|--------------------------------------|---------|
| x            | number | The new x position of for the text   |         |
| y            | number | The new y position of for the text   |         |

**example:**

```js
const title = gamewriter.addText('My Game', 100, 150);

title.y = 350;
```

### **size**

Sets a new size for the text.

| param        | type   | description                          | default |
|--------------|--------|--------------------------------------|---------|
| newSize      | number | The new size of the text             |         |

**example:**

```js
const title = gamewriter.addText('My Game', 100, 150);

title.size = 3;
```

### **text**

Change the text displayed.

| param        | type   | description                          | default |
|--------------|--------|--------------------------------------|---------|
| text         | string | The new text to display              |         |

**example:**

```js
const title = gamewriter.addText('My Game', 100, 150);

title.text = 'My New Game';
```

### **hide**

Hides the text.

**example:**

```js
const title = gamewriter.addText('My Game', 100, 150);

title.hide();
```

### **show**

Shows the text.

**example:**

```js
const title = gamewriter.addText('My Game', 100, 150);

title.show();
```

## **Tests**

To run the tests available for GameWriter, use:

```bash
$ npm run test
```

## **License**

MIT