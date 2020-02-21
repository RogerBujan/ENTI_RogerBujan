#include "Pacman.h"

Pacman::Pacman() {
	mColor = { 255, 255, 0 };
	mMoving = false;
}
Pacman::~Pacman() {

}

void Pacman::update() {

	if (!mMoving)
	{
		if (key_down['W'] || key_down['w'])
		{
			direct = DIRECTION::UP;
			togoY = mRect.y - TILE_SIZE;
			mMoving = true;
		}
		else if (key_down['S'] || key_down['s'])
		{
			direct = DIRECTION::DOWN;
			togoY = mRect.y + TILE_SIZE;
			mMoving = true;
		}
		else if (key_down['D'] || key_down['d'])
		{
			direct = DIRECTION::RIGHT;
			togoX = mRect.x + TILE_SIZE;
			mMoving = true;
		}
		else if (key_down['A'] || key_down['a'])
		{
			direct = DIRECTION::LEFT;
			togoX = mRect.x - TILE_SIZE;
			mMoving = true;
		}

	}
	else
	{
		prevX = mRect.x;
		prevY = mRect.y;

		switch (direct)
		{
		case UP:
			Move(0, -1);
			break;
		case DOWN:
			Move(0, 1);
			break;
		case RIGHT:
			Move(1, 0);
			break;
		case LEFT:
			Move(-1, 0);
			break;
		default:
			break;
		}
	}

	if (prevX < togoX && mRect.x > togoX || prevX > togoX && mRect.x < togoX)
	{
		mRect.x = togoX;
		mMoving = false;
	}
	if (prevX < togoX && mRect.x > togoX && prevY < togoY && mRect.y > togoY)
	{

	}
}
void Pacman::render() {
	ofSetColor(mColor);
	ofDrawRectangle(mRect.x, mRect.y, mRect.w, mRect.h);
}

void Pacman::Move(int x, int y) {
	mRect.x += x * speed * global_delta_time/2;
	mRect.y += y * speed * global_delta_time/2;

	togoX = mRect.x + TILE_SIZE;
}