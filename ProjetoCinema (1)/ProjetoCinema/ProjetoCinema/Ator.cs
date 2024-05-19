using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjetoCinema
{
    internal class Ator
    {
        public string Nome { get; set; }
        public int Idade { get; set; }
        public string Nacionalidade { get; set; }


        public void Cadastrar()
        {
            Console.Write("Nome: ");
            this.Nome = Console.ReadLine();

            Console.Write("Idade: ");
            this.Idade = int.Parse(Console.ReadLine());

            Console.Write("Nacionalidade: ");
            this.Nacionalidade = Console.ReadLine();
        }

        public void MostrarDados()
        {
            Console.WriteLine("Nome: "+this.Nome);
            Console.WriteLine("Idade: "+this.Idade);
            Console.WriteLine("Nacionalidade: "+this.Nacionalidade);
        }

        
    }
}
