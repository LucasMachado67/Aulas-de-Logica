using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjetoCinema
{
    internal class Geometria
    {
        static public double areaQuadrado(double lado)
        {
            return lado* lado;
        }
       
        static public double areaRetangulo(double b, double h)
        {
            return b * h;
        }
    }
}
