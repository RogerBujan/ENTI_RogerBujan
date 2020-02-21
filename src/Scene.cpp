#include "Scene.h"

Scene::Scene() {

}

Scene::~Scene() {

}

void Scene::init() {
	mpMapWidth = 0;
	mpMapHeight = 0;
	mpOffsetX = 0;
	mpOffsetY = 0;

	mPlayer = new Pacman();
	mPlayer->setX(0);
	mPlayer->setY(0);
	mPlayer->setW(TILE_SIZE);
	mPlayer->setH(TILE_SIZE);
	mPlayer->setSpeed(2);
	
	initMap();

	for (size_t i = 0; i < foes.size(); i++)
	{
		foes[i]->setW(TILE_SIZE);
		foes[i]->setH(TILE_SIZE);
		foes[i]->setSpeed(1);
	}
}
void Scene::update() {
	mPlayer->update();
}
void Scene::render() {
	renderMap();
	mPlayer->render();
	for (size_t i = 0; i < foes.size(); i++)
	{
		foes[i]->render();
	}
}

void Scene::initMap() {
	std::fstream file;
	file.open("map.txt", std::ios::in); //Intentamos abrir mapa
	if (!file.is_open()) {				//Miramos si el fichero está abierto
		std::cout << "ERROR: Map not found. Couldn't be loaded" << std::endl;
		system("pause");
		exit(0);
	}
	//Leemos ancho y alto del mapa
	std::string numStr;
	std::getline(file, numStr);
	int width = atoi(numStr.c_str());
	std::getline(file, numStr);
	int height = atoi(numStr.c_str());
	//Redimensionamos el vector
	mpCollisionMap.resize(height);
	for (int i = 0; i < height; i++) {
		mpCollisionMap[i].resize(width, 0);
	}
	mpMapWidth = width;
	mpMapHeight = height;
	std::getline(file, numStr);
	int ghostsSize = atoi(numStr.c_str());
	foes.resize(ghostsSize);
	std::string line;
	int i = 0, j = 0, ghostCount = 0;
	while (!file.eof()) { //Segun la letra que leemos, cambiamos en el mapa
		std::getline(file, line);
		for (i = 0; i < width; i++) {
			char a_char = line[i];
			bool collision = false;
			switch (a_char) {
				case '#': //Wall
					collision = true;
					break;
				case 'P':
					mPlayer->setX(i*TILE_SIZE);
					mPlayer->setY(j*TILE_SIZE);
					break;
				case'F':
					foes[ghostCount] = new Ghost;
					foes[ghostCount]->setX(i*TILE_SIZE);
					foes[ghostCount]->setY(j*TILE_SIZE);

					ghostCount++;
				case '.': {
					Fruit* fruits = new Fruit(false);
					fruits->setX(i*TILE_SIZE);
					fruits->setY(j*TILE_SIZE);
				}
				case 'O':
					

				default:
					break;
			}
			mpCollisionMap[j][i] = collision;
		}
		j++;
	}
	file.close();
}

void Scene::renderMap() {
	ofSetColor(0, 0, 255);
	int sizeV = mpMapHeight;
	int sizeH = mpMapWidth;

	for (int j = 0; j < sizeV; j++) {
		for (int i = 0; i < sizeH; i++) {
			if (mpCollisionMap[j][i]) {
				ofDrawRectangle(i*TILE_SIZE, j*TILE_SIZE, 
								TILE_SIZE, TILE_SIZE);
			}
		}
	}
}