#include "Paddle.h"

Paddle::Paddle() {

}

Paddle::~Paddle() {

}

void Paddle::setXY(int x, int y) {
	setX(x);
	setY(y);
}

void Paddle::render() {
	ofSetColor(255, 255, 255);
	ofRect(posX, posY, width, height);
}

void Paddle::moveUp(int units) {
	posY -= units;
}
void Paddle::moveDown(int units) {
	posY += units;
}