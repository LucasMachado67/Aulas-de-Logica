using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aula12
{
    internal class ExercicioProduto
    {
        static Produto prod = new Produto();
        static void ExProd(string[] args)
        {
            while(true)
            {
                Console.Write("1-Novo Produto\n2-Mostrar Produto\n3-Verificar Estoque\n4-Sair\nOpção: ");
                string menu = Console.ReadLine();
                Console.WriteLine();

                if (menu == "1")
                {
                    CadastrarProduto();
                }
                else if (menu == "2")
                {
                    MostrarProduto();
                }
                else if (menu == "3")
                {
                    VerificarEstoque();
                }
                else if (menu == "4")
                {
                    break;
                }
                else
                {
                    Console.WriteLine("Entrada inválida!");
                }
            }
            
        }

        static void CadastrarProduto()
        {
            Console.WriteLine("Nome: ");
            prod.nome = Console.ReadLine();
            
            Console.WriteLine("Marca: ");
            prod.marca = Console.ReadLine();

            Console.WriteLine("Preço: ");
            prod.valor = double.Parse(Console.ReadLine());

            Console.WriteLine("Quantidade em estoque: ");
            prod.qtdEstoque = double.Parse(Console.ReadLine());

        }

        static void MostrarProduto()
        {
            Console.WriteLine("Nome: "+ prod.nome);
            Console.WriteLine("Marca: "+ prod.marca);
            Console.WriteLine("Preço: R$"+ prod.valor);
            Console.WriteLine("Quantidade em estoque: "+ prod.qtdEstoque);
            
        }

        static void VerificarEstoque()
        {
            if(prod.nome == null)
            {
                Console.WriteLine("Produto nao cadastrado");
            }
            else if(prod.qtdEstoque == 0)
            {
                Console.WriteLine("Produto nao está disponivel");
            }
            else
            {
                Console.WriteLine("Estoque disponiel: "+ prod.qtdEstoque);
            }
        }


    }
}
