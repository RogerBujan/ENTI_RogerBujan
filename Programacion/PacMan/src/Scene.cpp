#include "Scene.h"

Scene::Scene() {

}

Scene::~Scene() {

}

void Scene::init() {

}

void Scene::update() {

}

void Scene::render() {

}

void Scene::initMap() {

	std::string line;
	int width = 0;
	int height = 0;
	int lineCount = 0;
	std::fstream file;
	file.open("map.txt", std::ios::in);

	std::getline(file, line);
	width = stoi(line);

	std::getline(file, line);
	height = stoi(line);



	while (!file.eof())
	{
		std::getline(file, line);


	}

	file.close();
}

void Scene::renderMap() {

}

