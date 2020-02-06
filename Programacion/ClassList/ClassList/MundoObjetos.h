#ifndef MUNDO_OBJETO_H
#define MUNDO_OBJETO_H

#include <list>
#include "Objeto.h"

class MundoObjeto
{
public:
	MundoObjeto();
	~MundoObjeto();

private:

	std::list<Objeto> listaObjetos;

};



#endif // !MUNDO_OBJETO_H

