// Copyright (c) 2020 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
BodyPix
=== */

let bodypix;
let video2;
let segmentation;

const options = {
  outputStride: 32, // 8, 16, or 32, default is 16
  segmentationThreshold: 0.5, // 0 - 1, defaults to 0.5
};

function preload() {
  bodypix = ml5.bodyPix(options);
}

function setup() {
  createCanvas(1200, 800);
  // load up your video
  video2 = createCapture(VIDEO, videoReady);
  video2.size(0, 0);

}

function videoReady() {
  bodypix.segment(video2, gotResults);
}

function draw() {
  background(0);

  if (segmentation) {
    image(segmentation.backgroundMask, 0, 0, width, height);
  }
}

function gotResults(error, result) {
  if (error) {
    console.log(error);
    return;
  }
  segmentation = result;
  bodypix.segment(video2, gotResults);
}