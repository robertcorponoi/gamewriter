'use strict'

import GameWriter from '../gamewriter.js';

let canvas;
let gamewriter;

beforeEach(() => {

  canvas = document.getElementById('canvas');

  gamewriter = new GameWriter(canvas);

});

afterEach(() => {

  //gamewriter.clear();

  canvas = null;

  gamewriter = null;

});

describe('initializing gamewriter', () => {

  it('should initialize gamewriter with the canvas dimensions', () => {

    const expected = {
      top: 0,
      left: 0,
      width: 700,
      height: 500
    };

    chai.expect(expected).to.deep.equal(gamewriter._canvasPosition);

  });

  it('should place an overlay over the canvas', () => {

    const overlay = document.getElementById('gamewriter-overlay');

    chai.expect(overlay.style.width).to.equal(`${canvas.width}px`) && chai.expect(overlay.style.height).to.equal(`${canvas.height}px`);

  });

});

describe('Adding text to the game', () => {

  it('should create a text node and add it to the game', () => {

    const hw = gamewriter.addText('Hello World!');

    chai.expect(hw.el.textContent).to.equal('Hello World!');

  });

  it('should create a text node at a specific position', () => {

    const hw = gamewriter.addText('Hello World!', 100, 150);

    chai.expect(hw.el.style.top).to.equal('150px') && chai.expect(hw.el.style.left).to.equal('100px');

  });

  it('should create a text node with a larger font', () => {

    const hw = gamewriter.addText('Hello World!', 150, 0, { size: 3 });

    chai.expect(hw.el.style.fontSize).to.equal('3rem');

  });

  it('should change the text of a text node', () => {

    const hw = gamewriter.addText('Hello World!', 50, 50);

    hw.text = 'Hello Universe!';

    chai.expect(hw.el.textContent).to.equal('Hello Universe!');

  });

  it('should change the position of a text node using the move method', () => {

    const hw = gamewriter.addText('Hello World!', 50, 50);

    hw.move(400, 350)

    chai.expect(hw.el.style.top).to.equal('350px') && chai.expect(hw.el.style.left).to.equal('400px');

  });

  it('should change the x position of a text node', () => {

    const hw = gamewriter.addText('Hello World!', 400, 350);

    hw.x = 550;

    chai.expect(hw.el.style.top).to.equal('350px') && chai.expect(hw.el.style.left).to.equal('550px');

  });

  it('should change the x position of a text node', () => {

    const hw = gamewriter.addText('Hello World!', 400, 350);

    hw.y = 450;

    chai.expect(hw.el.style.top).to.equal('450px') && chai.expect(hw.el.style.left).to.equal('400px');

  });

  it('should change the size of the text', () => {

    const hw = gamewriter.addText('Hello World!', 500, 50);

    hw.size = 2;

    chai.expect(hw.el.style.fontSize).to.equal('2rem');

  });

  it('should hide a text node', () => {

    const hw = gamewriter.addText('Hello World!', 200, 200);

    hw.hide();

    chai.expect(hw.el.style.visibility).to.equal('hidden');

  });

  it('should hide a text node and then show it', () => {

    const hw = gamewriter.addText('Hello World!', 200, 200);

    hw.hide();

    hw.show();

    chai.expect(hw.el.style.visibility).to.equal('visible');

  });

  it('should add classes to each text node added to the game', () => {

    gamewriter = new GameWriter(canvas, { classes: ['hello', 'world'] });

    const hw = gamewriter.addText('Hello World!', 0, 100);
    const hw2 = gamewriter.addText('Hello World Again!', 0, 125);

    chai.expect(hw.el.className).to.equal('hello world') && chai.expect(hw2.el.className).to.equal('hello world');

  });

  it('should add an id and two classes to a text node', () => {

    gamewriter = new GameWriter(canvas);

    const hw = gamewriter.addText('Hello World!', 0, 150, { id: 'blah', classes: ['still', 'blah'] });

    chai.expect(hw.el.className).to.equal('still blah') && chai.expect(hw.el.id).to.equal('blah');

  });


});

describe('Removing text from the game', () => {

  it('should remove a created text node', () => {

    const hw = gamewriter.addText('Hello World!');

    gamewriter.removeText(hw);

    chai.expect(gamewriter._nodes.length).to.equal(0) && chai.expect(gamewriter._overlay.children.length).to.equal(0);

  });

  it('should remove all created text nodes', () => {

    gamewriter.addText('Hello World!1');
    gamewriter.addText('Hello World!2');
    gamewriter.addText('Hello World!3');

    gamewriter.clear();

    chai.expect(gamewriter._nodes.length).to.equal(0) && chai.expect(gamewriter._overlay.children.length).to.equal(0);

  });

});

describe('Setting dynamic text', () => {

  it('should set the score to be dynamic and change it', () => {

    const score = gamewriter.addText('Score: 0', 150, 400);

    score.setDynamic('0');

    score.changeDynamic('5');

    chai.expect(score.text).to.equal('Score: 5');

  });

});