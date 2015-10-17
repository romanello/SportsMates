using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.Hosting;
using Microsoft.Owin.StaticFiles;
using Owin;

namespace AnglarMaterial.Selfhost
{
  class Program
  {
    public static void Main(string[] args)
    {
      // Specify the URI to use for the local host:
      string baseUri = "http://localhost:8080";

      Console.WriteLine("Starting web Server...");
      WebApp.Start<Startup>(baseUri);
      Console.WriteLine("Server running at {0} - type q to quit. ", baseUri);
      System.Diagnostics.Process.Start(baseUri);
      while (!Console.ReadLine().Equals("q"))
      {
        Console.WriteLine(">");
      }
      
    }
   
  }
}
