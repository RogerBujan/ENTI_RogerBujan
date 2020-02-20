#ifndef PACMAN_H
#define PACMAN_H

#include "ofMain.h"
#include "includes.h"

class Pacman {
	public:
		Pacman();
		~Pacman();

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
		void Move(int x, int y);
};

#endif