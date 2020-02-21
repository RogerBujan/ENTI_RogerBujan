#include "Ghost.h"

Ghost::Ghost()
{
	mColor = { 255, 0, 0 };
}

Ghost::Ghost(float r, float g, float b)
{
	mColor = { r,g,b };
}

Ghost::~Ghost()
{
}

void Ghost::render() {
	ofSetColor(mColor);
	ofDrawRectangle(mRect.x, mRect.y, mRect.w, mRect.h);
}

void Ghost::update() {

}
