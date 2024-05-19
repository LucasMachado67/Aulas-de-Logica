using System;
using System.Collections.Generic;


namespace ProjetoCinema
{
    internal class Program
    {
        static List<Filme> listaFilmes = new List<Filme>();
        static List<Ator> listaAtores = new List<Ator>();

        static void Main(string[] args)
        {
           
            //while (true)
            //{
            //    Console.WriteLine("1-MENU ATOR\n2-MENU FILME\n3-Sair");
            //    string menu = Console.ReadLine();
            //    if (menu == "3") break;
            //    switch (menu) 
            //    {
            //        case "1": MenuAtor(); 
            //            break;
            //        case "2": MenuFilme();
            //            break;
            //        default: 
            //            Console.WriteLine("Valor Inválido");
            //            break;
            //    }
            //}

           List<Diretor> listaDiretores = new List<Diretor>();

            Console.WriteLine("Nome: ");
            string nome = Console.ReadLine();
            Console.WriteLine("Sobrenome: ");
            string sobrenome = Console.ReadLine();

            listaDiretores.Add(new Diretor(nome, sobrenome));   


        }
        static void MenuAtor()
        {
            while (true)
            {

                Console.WriteLine("1-Novo Ator\n2-Ver Atores Cadastrados\n3-Sair");
                string menu = Console.ReadLine();
                if (menu == "3") break;
                Console.Clear();
                switch (menu)
                {
                    case "1":
                        Console.WriteLine("CADASTRAR ATORES");
                        Ator a1 = new Ator();
                        a1.Cadastrar();
                        listaAtores.Add(a1);
                        break;
                    case "2":
                        Console.WriteLine("ATORES CADASTRADOS");
                        foreach (Ator ator in listaAtores)
                        {
                            ator.MostrarDados();
                            Console.WriteLine();
                        }
                        break;
                    default:
                        Console.WriteLine("Valor inválido");
                        break;
                }
            }
        }
        static void MenuFilme()
        {
            while (true)
            {
                Console.WriteLine("1-Novo Filme\n2-Ver Filmes Cadastrados\n3-Sair");
                string menu = Console.ReadLine();
                if (menu == "3") break;
                Console.Clear();
                switch (menu)
                {
                    case "1":
                        Filme f1 = new Filme();
                        f1.Cadastrar();

                        listaFilmes.Add(f1);
                        break;
                    case "2":
                        Console.WriteLine("---------- FILMES ----------\n");
                        foreach (Filme filme in listaFilmes)
                        {
                            filme.MostarDados();
                            Console.WriteLine();
                        }
                        break;
                    default:
                        Console.WriteLine("Valor inválido");
                        break;
                }
            }
        }
    }
}
