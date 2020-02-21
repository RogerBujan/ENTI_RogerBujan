#include "Fruit.h"

Fruit::Fruit()
{
}

Fruit::Fruit(bool pow)
{
	power = pow;

	if (pow)
	{
		setW(TILE_SIZE/2);
		setH(TILE_SIZE/2);
	}
	else
	{
		setW(TILE_SIZE/4);
		setH(TILE_SIZE/4);
	}
}

Fruit::~Fruit()
{
}

void Fruit::render() {
	ofSetColor(255,255,255);
	ofDrawRectangle(mRect.x, mRect.y, mRect.w, mRect.h);
}

void Fruit::update() {

}
