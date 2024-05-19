using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExercicioHospital
{
    internal class Paciente
    {
        public string nome;
        public double peso;
        public double altura;
        public double imc;

        public void CadastrarPaciente()
        {
            Console.WriteLine("Nome: ");
            this.nome = Console.ReadLine();
            Console.WriteLine("Peso: ");
            this.peso = double.Parse(Console.ReadLine());
            Console.WriteLine("Altura: ");
            this.altura = double.Parse(Console.ReadLine());
        }


        public void MostrarPaciente()
        {
            Console.WriteLine("Nome: "+this.nome);
           
            Console.WriteLine("Peso: "+this.peso);
           
            Console.WriteLine("Altura: "+this.altura);
            
        }

        public void CalcularIMC()
        {
            this.imc =  this.peso / Math.Pow(this.altura, 2);
            Console.WriteLine("IMC: "+this.imc);
        }
    }

   
}
