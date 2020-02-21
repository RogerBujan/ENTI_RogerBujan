#ifndef FRUIT_H
#define FRUIT_H

#include "ofMain.h"
#include "includes.h"

class Fruit
{
public:
	Fruit();
	Fruit(bool pow);
	~Fruit();

	void render();
	void update();

	void setX(int x) { mRect.x = x; };
	void setY(int y) { mRect.y = y; };
	void setW(int w) { mRect.w = w; };
	void setH(int h) { mRect.h = h; };

	C_Rectangle getRect() { return mRect; };

private:
	C_Rectangle mRect;
	bool power;
};

#endif // !FRUIT_H

