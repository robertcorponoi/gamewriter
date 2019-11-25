'use strict'

const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.rect(0, 0, canvas.width, canvas.height);
ctx.stroke();