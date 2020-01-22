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

void CargarTableroBinario(unsigned int &_seed, std::string _fileName)
{
	std::fstream file;

	file.open("../BattleShip/" + _fileName, std::ios::in | std::ios::binary);

	file.read((char*)&_seed, sizeof(int));

	file.close();
}

void CargarTableroTexto(unsigned int &_seed, std::string _fileName)
{
	std::fstream file;
	std::string line;

	file.open("../BattleShip/" + _fileName, std::ios::in);

	std::getline(file, line);

	_seed = (unsigned int)std::stoi(line);

	file.close();
}

void GenerarBarco(TipoCasilla _tablero[N][N])
{
	int xPos = 0;
	int yPos = 0;
	do
	{
		xPos = rand() % (N - 1);
		yPos = rand() % (N - 1);
	} while (_tablero[xPos][yPos] != TipoCasilla::VACIO);

	_tablero[xPos][yPos] = TipoCasilla::BARCO_SIN_TOCAR;

	if (rand() % 5 <= 2)
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

void PrintTablero(TipoCasilla _tablero[N][N])
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

int main()
{
	TipoCasilla tablero1bin[N][N];
	TipoCasilla tablero2bin[N][N];
	TipoCasilla tablero1txt[N][N];
	TipoCasilla tablero2txt[N][N];
	unsigned int seed = 0;

	CargarTableroBinario(seed, "tablerosBin");

	srand(seed);

	IniciarTablero(tablero1bin);
	IniciarTablero(tablero2bin);

	CargarTableroTexto(seed, "tablerosTxt");

	srand(seed);

	IniciarTablero(tablero1txt);
	IniciarTablero(tablero2txt);

	PrintTablero(tablero1bin);
	std::cout << "-----------------------------\n";
	PrintTablero(tablero2bin);
	std::cout << "#############################\n";
	PrintTablero(tablero1txt);
	std::cout << "-----------------------------\n";
	PrintTablero(tablero2txt);

	system("pause");
	return 0;
}