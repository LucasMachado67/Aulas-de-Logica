using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExercicioHospital
{
    internal class Program
    {
        static List<Paciente> listaPacientes = new List<Paciente>();
     
        static void Main(string[] args)
        {
            while (true)
            {
                Console.WriteLine("1-Paciente 2-Medico 3-Sair");
                string menu = Console.ReadLine();
                if(menu == "1")
                {
                    menuPaciente();
                }else if(menu == "2")
                {
                    MenuMedico();
                }
                else
                {
                    break;
                }
            }
        }

        static void menuPaciente()
        {
            while (true)
            {
                Paciente p1 = new Paciente();
                Console.WriteLine("1-Novo Paciente\n2-Mostrar Paciente\n3-IMC\n4-Sair");
                string menu = Console.ReadLine();
                Console.WriteLine();
                if (menu == "1")
                {
                    p1.CadastrarPaciente();
                    listaPacientes.Add(p1);
                }
                else if (menu == "2") p1.MostrarPaciente();
                else if (menu == "3") p1.CalcularIMC();
                else if (menu == "4") break;
                else Console.WriteLine("Valor Inválido");
            }
        }
        static void MenuMedico()
        {
            Console.WriteLine("ESTE É O MENU DO MEDICO");
        }
    

  
    }
}
