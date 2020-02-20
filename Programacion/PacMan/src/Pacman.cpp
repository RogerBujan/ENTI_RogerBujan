#include "Pacman.h"

Pacman::Pacman() {
	mColor = { 255, 255, 0 };
}
Pacman::~Pacman() {

}

void Pacman::update() {
	if (key_down['W'] || key_down ['w'])
	{
		Move(0, -1);
	}
	else if (key_down ['S'] || key_down['s'])
	{
		Move(0, 1);
	}
	else if (key_down['D'] || key_down ['d'])
	{
		Move(1, 0);
	}
	else if (key_down['A'] || key_down['a'])
	{
		Move(-1, 0);
	}
}
void Pacman::render() {
	ofSetColor(mColor);
	ofDrawRectangle(mRect.x, mRect.y, mRect.w, mRect.h);
}

void Pacman::Move(int x, int y) {
	mRect.x += x * speed;
	mRect.y += y * speed;
}