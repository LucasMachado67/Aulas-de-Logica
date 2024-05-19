using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aula11
{
    internal class Exemplo2
    {
        static void Main(string[] args)
        {
            int resultado = subtrair(8, 6);
            Console.WriteLine(resultado);


        }

        static void mostrarNumero(int num)
        {
            Console.WriteLine("Numero: " + num);
        }
        static void calcularDobro(int numero)
        {
            Console.WriteLine("Dobro: "+(numero * 2));
        }

        static void somar(int num1, int num2)
        {
            int soma = num1 + num2;
            Console.WriteLine("Soma: "+soma);
        }
        static int subtrair(int num1, int num2) {
            return num1 - num2;
        }
    }
}
