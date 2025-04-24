void setup() {
  // Window size and ellipse in center mode
  size(600, 400);
  ellipseMode(CENTER);
}

void draw() {
  // White background
  background(255);

  // Time variable based on the frame count
  float time = frameCount * 0.05;

  // Wavy horizontal movement
  float x = width / 2 + sin(time) * 100;
  float y = height / 2;

  // Rotation
  float angle = time * 0.5;

  // Cyclical scaling
  float scaleFactor = 1 + 0.75 * sin(time * 0.6);

  // Isolate transformations
  pushMatrix();

  // Apply transformations
  translate(x, y);
  rotate(angle);
  scale(scaleFactor);

  // Draw the ellipse
  fill(100, 200, 100);
  stroke(0);
  ellipse(0, 0, 80, 40);

  popMatrix();
}
