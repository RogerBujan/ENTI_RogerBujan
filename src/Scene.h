#ifndef SCENE_H
#define SCENE_H

#include "ofMain.h"
#include "includes.h"
#include "Pacman.h"
#include "Ghost.h"
#include "Fruit.h"

class Scene {
	public:
		Scene();
		~Scene();

		void init();
		void update();
		void render();

	private:
		void initMap();
		void renderMap();

		int mpOffsetX;
		int mpOffsetY;
		int mpMapWidth;
		int mpMapHeight;
		std::vector<std::vector<bool>> mpCollisionMap;

		Pacman* mPlayer;

		std::vector<Ghost*> foes;

		std::vector<Fruit*> fruits;
};

#endif