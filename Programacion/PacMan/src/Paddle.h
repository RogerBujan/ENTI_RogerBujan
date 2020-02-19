#ifndef PADDLE_H
#define PADDLE_H

#include "ofMain.h"

class Paddle {
	public:
		Paddle();
		~Paddle();

		void render();

		void setXY(int x, int y);
		void setX(int x) { posX = x; };
		void setY(int y) { posY = y; };
		void setW(int w) { width = w; };
		void setH(int h) { height = h; };

		void moveUp(int units);
		void moveDown(int units);

	private:
		int posX;
		int posY;
		int width;
		int height;
};

#endif