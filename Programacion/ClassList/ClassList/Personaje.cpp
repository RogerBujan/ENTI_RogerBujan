#include "Personaje.h"


Personaje::Personaje()
{
}

Personaje::Personaje(int _identificador, std::string _nombre, int _pesoMaximo)
{
	identificador = _identificador;
	nombre = _nombre;
	pesoMaximo = _pesoMaximo;
}

Personaje::~Personaje()
{
}

void Personaje::MostrarInventario()
{
	std::list<Objeto>::iterator it;

	for (it = inventario.begin(); it != inventario.end(); ++it)
	{
		std::cout << *it << '\n';
	}
}

void Personaje::AnadirObjeto(int _id)
{
	std::list<Objeto>::iterator it;
	it = inventario.begin();

	for (int i = 0; it != inventario.end() || i > _id; ++i)
	{
		++it;

		inventario.insert(it, new Objeto());
	}
}

void Personaje::EliminarObjeto(int _id)
{
	std::list<Objeto>::iterator it;

	for (it = inventario.begin(); it != inventario.end(); ++it)
	{
		if ((*it).GetId() == _id)
		{
			inventario.erase(it);
			break;
		}
	}
}