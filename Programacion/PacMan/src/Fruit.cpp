#include "Fruit.h"

Fruit::Fruit()
{
}

Fruit::Fruit(bool pow)
{
	power = pow;
}

Fruit::~Fruit()
{
}

void Fruit::render() {
	ofSetColor(255,255,255);
	ofDrawRectangle(mRect.x, mRect.y, mRect.w, mRect.h);
}
