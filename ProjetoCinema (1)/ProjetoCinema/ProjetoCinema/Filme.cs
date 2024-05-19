using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjetoCinema
{
    internal class Filme
    {
        public string Titulo { get; set; }
        public string Genero { get; set; }
        public int AnoLancamento { get; set; }


        public void Cadastrar()
        {
            Console.WriteLine("---------- NOVO FILME ----------\n");

            Console.Write("Titulo: ");
            this.Titulo = Console.ReadLine();

            Console.Write("Genero: ");
            this.Genero = Console.ReadLine();

            Console.Write("Ano Lançamento: ");
            this.AnoLancamento = int.Parse(Console.ReadLine());
            
            Console.Clear();
            Console.WriteLine("Filme cadastrado com sucesso!!!\nPressione qualquer tecla para continuar!");
            Console.ReadKey();
        }

        public void MostarDados()
        {
            Console.WriteLine($"Titulo: {this.Titulo}");
            Console.WriteLine($"Genero: {this.Genero}");
            Console.WriteLine($"Ano Lançamento: {this.AnoLancamento}");
            //Console.ReadKey();
            //Console.Clear();
        }

    }
}
