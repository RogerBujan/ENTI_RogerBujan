#ifndef SCENE_H
#define SCENE_H

#include "includes.h"
#include "ofMain.h"
#include <fstream>
#include <string>
#include <iostream>

class Scene
{
public:
	Scene();
	~Scene();

	void init();
	void update();
	void render();

private:

	void initMap();
	void renderMap();
	std::vector<std::vector<bool>> mCollisionMap;
};

#endif // SCENE_H