#include "Objeto.h"

Objeto::Objeto()
{
}

Objeto::~Objeto()
{
}

Objeto::Objeto(int _id, std::string _desc, float _peso)
{
	id = _id;
	desc = _desc;
	peso = _peso;
};