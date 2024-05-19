using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aula12
{
    internal class Program
    {

        static string nome;
        static string email;
        static string senha;
        static int idade = -1;

        static void Exemplo1(string[] args)
        {
            while(true) { 
                Console.WriteLine("1-Verificar Idade 2-Cadastrar Novo Usuario 3-MOstrar Usuario 4-Sair");
                string menu = Console.ReadLine();
                if(menu == "1")
                {
                    VerificarIdade();
                }else if(menu == "2")
                {
                    CadastrarUsuario();
                }
                else if (menu == "3") 
                {
                    MostrarUsuario();
                }
                else if(menu == "4") 
                {
                    break;
                }
                else
                {
                    Console.WriteLine("Entrada inválida");
                }
            }
        }
        static void VerificarIdade()
        {
            if(idade == -1)
            {
                Console.WriteLine("Idade nao cadastrada");
            }
            else
            {
            Console.WriteLine(idade >= 18 ? "Maior de idade" : "Menor de Idade");
            }
        }
        static void CadastrarUsuario()
        {
            Console.WriteLine("Nome: ");
            nome =  Console.ReadLine();

            Console.WriteLine("Idade: ");
            idade = int.Parse(Console.ReadLine());

            Console.WriteLine("Email: ");
            email =  Console.ReadLine();

            Console.WriteLine("Senha: ");
            senha = Console.ReadLine();
        }
        static void MostrarUsuario()
        {
            Console.WriteLine("Nome: "+nome);
            Console.WriteLine("Email: " + email);
            Console.WriteLine("Senha: " + senha);
            Console.WriteLine("Idade: " + idade);
        }
    }
}
