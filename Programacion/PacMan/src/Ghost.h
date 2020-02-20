#ifndef GHOST
#define GHOST

#include "ofMain.h"
#include "includes.h"

class Ghost
{
public:
	Ghost();
	Ghost(float r, float g, float b);
	~Ghost();

	void update();
	void render();

	void setX(int x) { mRect.x = x; };
	void setY(int y) { mRect.y = y; };
	void setW(int w) { mRect.w = w; };
	void setH(int h) { mRect.h = h; };
	void setSpeed(int s) { speed = s; };

private:
	ofColor mColor;
	C_Rectangle mRect;
	int speed;
};

#endif // !GHOST

