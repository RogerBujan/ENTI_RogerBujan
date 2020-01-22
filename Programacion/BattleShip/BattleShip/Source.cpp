#include <stdlib.h>
#include <time.h>
#include <fstream>
#include <iostream>
#include <string>

#define N  8

enum class TipoCasilla
{
	VACIO, BARCO_SIN_TOCAR, BARCO_TOCADO
};

void GetSeed(unsigned int &seed)
{
	seed = time(NULL);
}

void GenerarBarco(TipoCasilla _tablero[N][N])
{
	int xPos = 0;
	int yPos = 0;
	do
	{
		xPos = rand() % (N - 1);
		yPos = rand() % (N - 1);
	} while (_tablero [xPos][yPos] != TipoCasilla::VACIO);

	_tablero[xPos][yPos] = TipoCasilla::BARCO_SIN_TOCAR;

	if (rand () % 5 <= 2)
	{
		_tablero[xPos + 1][yPos] = TipoCasilla::BARCO_SIN_TOCAR;
	}
	else
	{
		_tablero[xPos][yPos + 1] = TipoCasilla::BARCO_SIN_TOCAR;
	}
}

void IniciarTablero(TipoCasilla _tablero[N][N])
{
	for (size_t i = 0; i < N; i++)
	{
		for (size_t j = 0; j < N; j++)
		{
			_tablero[i][j] = TipoCasilla::VACIO;
		}
	}

	for (size_t i = rand() % 3; i < 4; i++)
	{
		GenerarBarco(_tablero);
	}	
}

void PrintTablero ( TipoCasilla _tablero[N][N])
{
	for (size_t i = 0; i < N; i++)
	{
		for (size_t j = 0; j < N; j++)
		{
			switch (_tablero[i][j])
			{
			case TipoCasilla::VACIO:
				std::cout << ",";
				break;
			case TipoCasilla::BARCO_SIN_TOCAR:
				std::cout << "#";
				break;
			case TipoCasilla::BARCO_TOCADO:
				break;
			default:
				break;
			}
		}
		std::cout << "\n";
	}
}

void GuardarTableroBinario(unsigned int _seed, std::string _fileName)
{
	std::fstream file;
	file.open(_fileName, std::ios::out | std::ios::binary | std::ios::trunc);

	file.write((char*)&_seed, sizeof(int));

	file.close();
}

void GuardarTableroTxt(unsigned int _seed, std::string _fileName)
{
	std::fstream file;

	file.open(_fileName, std::ios::out | std::ios::trunc);
	file << std::to_string(_seed);
	file << "\0";

	file.close();
}

int main()
{
	TipoCasilla tablero1[N][N];
	TipoCasilla tablero2[N][N];
	unsigned int seed = 0;

	GetSeed(seed);
	srand(seed);

	IniciarTablero(tablero1);
	IniciarTablero(tablero2);

	PrintTablero(tablero1);
	std::cout << " ----------------------------- \n";
	PrintTablero(tablero2);

	GuardarTableroBinario(seed, "tablerosBin");

	GuardarTableroTxt(seed, "tablerosTxt");

	system("pause");

	return 0;
}
