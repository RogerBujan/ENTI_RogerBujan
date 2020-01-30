#include<iostream>
#include<queue>

//struct IP
//{
//	unsigned int aIP[4];
//	unsigned int IP;
//};

union IP
{
	unsigned char aIP[4];
	unsigned int IP;
};

typedef unsigned short PORT;

struct Jugador
{
private:
	int id;
	IP directionIP;
	PORT puerto;
public:

};

struct ColaJugadores
{
private:
	std::queue<Jugador> cola;
public:

};

//std::ostream& operator<<(std::ostream& _os, Jugador& _jugador)
//{
//	_os <<
//	return _os;
//}