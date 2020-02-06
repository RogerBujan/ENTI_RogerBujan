#ifndef  OBJETO_H
#define OBJETO_H

#include <string>
#include <iostream>

class Objeto
{
public:
	Objeto();
	Objeto(int _id, std::string _desc, float _peso);
	~Objeto();

	int GetId() { return id; };
	std::string GetDesc() { return desc; };
	float GetPeso() { return peso; };

	friend std::ostream& operator<<(std::ostream& _os, Objeto& _item)
	{
		_os << _item.GetId << " - " << _item.GetDesc << " - " << _item.GetPeso;
	}

	//TODO sobrecarga <<

private:
	int id;
	std::string desc;
	float peso;
};



#endif // ! OBJETO_H

