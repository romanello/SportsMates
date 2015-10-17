using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.Owin.Cors;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.StaticFiles;
using Owin;

namespace AnglarMaterial.Selfhost
{
  public class Startup
  {
    public void Configuration(IAppBuilder app)
    {
      var webApiConfiguration = ConfigureWebApi();

      var options = new FileServerOptions()
      {
          EnableDirectoryBrowsing = false,
          FileSystem = new PhysicalFileSystem("../../")
      };
      app.UseFileServer(options);

      // Use the extension method provided by the WebApi.Owin library:
      app.UseWebApi(webApiConfiguration);

      //signalr support
      //app.MapSignalR();

      //need cors to make signalr work
      app.UseCors(CorsOptions.AllowAll);

      //const string connString = @"Data Source=BLUEBACKNO14\SQLEXPRESS2012;Initial Catalog=Hangfire;Integrated Security=True";
      //GlobalConfiguration.Configuration.UseSqlServerStorage(connString);
   }


    private HttpConfiguration ConfigureWebApi()
    {
      var config = new HttpConfiguration();
      config.Routes.MapHttpRoute(
          "DefaultApi",
          "api/{controller}/{id}",
          new { id = RouteParameter.Optional });
      return config;
    }
  }
}
