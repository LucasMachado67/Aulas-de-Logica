using System;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aula11
{
    internal class Program
    {
        static void Exemplo1(string[] args)
        {
            while (true)
            {

                Console.WriteLine("1- Calcular Area do Quadrado");
                Console.WriteLine("2- Calcular Area do Circulo");
                Console.WriteLine("3- Calcular Area do Retangulo");
                Console.WriteLine("4- Sair");
                string menu = Console.ReadLine();

                if (menu == "1")
                {
                    CalcularAreaQuadrado();

                }
                else if (menu == "2")
                {
                    CalcularAreaCirculo();
                }
                else if (menu == "3")
                {
                    CalcularAreaRetangulo();
                }else if(menu == "4")
                {
                    Console.WriteLine("Saindo...");
                    break;
                }

            }
        }

        static void CalcularAreaQuadrado()
        {
            Console.WriteLine("Digite o lado do qudarado: ");
            int lado = int.Parse(Console.ReadLine());
            Console.WriteLine($"Area do quadrado {lado * lado}m²");
        }

        static void CalcularAreaCirculo()
        {
            Console.WriteLine("Digite o raio do circulo: ");
            double raio = double.Parse(Console.ReadLine());
            double area = raio * raio * Math.PI;
            Console.WriteLine($"Area do Circulo: {area}m²");
        }

        static void CalcularAreaRetangulo()
        {
            Console.WriteLine("Digite a base do retangulo: ");
            double b = double.Parse(Console.ReadLine());
            Console.WriteLine("Digite a altura do retangulo: ");
            double h = double.Parse(Console.ReadLine());

            double area = b * h;
            Console.WriteLine($"Area: {area}m²");
        }




    }
}
