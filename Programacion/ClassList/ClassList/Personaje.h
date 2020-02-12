#ifndef PERSONAJE_H
#define PERSONAJE_H

#include <list>
#include "Objeto.h"

class Personaje
{
public:
	Personaje();
	Personaje(int _identificador, std::string _nombre, int _pesoMaximo);
	~Personaje();

	void MostrarInventario();
	void AnadirObjeto(int _id);
	void EliminarObjeto(int id);

private:

	int identificador;
	std::string nombre;
	int pesoMaximo;
	int pesoActual = 0;
	std::list<Objeto> inventario;
};


#endif // !PERSONAJE_H
