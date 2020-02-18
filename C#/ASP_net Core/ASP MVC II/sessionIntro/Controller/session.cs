// ******************************************************************
using Microsoft.AspNetCore.Http;


// ******************************************************************
public void ConfigureServices(IServiceCollection services)
{
    services.AddSession();    // add this line
    services.AddMvc();
}
// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
public void Configure(IApplicationBuilder app, IHostingEnvironment env)
{
    // other configurations
    app.UseSession();    // add this line
    app.UseMvc();        // make sure UseMvc comes last!!
}


// ******************************************************************
// - *Inside controller methods*
// To store a string in session we use ".SetString"
// The first string passed is the key and the second is the value we want to retrieve later
HttpContext.Session.SetString("UserName", "Samantha");
// To retrieve a string from session we use ".GetString"
string LocalVariable = HttpContext.Session.GetString("UserName");
 
// To store an int in session we use ".SetInt32"
HttpContext.Session.SetInt32("UserAge", 28);
// To retrieve an int from session we use ".GetInt32"
int? IntVariable = HttpContext.Session.GetInt32("UserAge");


// ******************************************************************
HttpContext.Session.Clear();


// ******************************************************************
// in your Controller
ViewBag.Count = HttpContext.Session.GetInt32("count");

//<!-- in your View -->
<h2>You have clicked the button @ViewBag.Count</h2>


// ******************************************************************
using Newtonsoft.Json;
// Somewhere in your namespace, outside other classes
public static class SessionExtensions
{
    // We can call ".SetObjectAsJson" just like our other session set methods, by passing a key and a value
    public static void SetObjectAsJson(this ISession session, string key, object value)
    {
        // This helper function simply serializes theobject to JSON and stores it as a string in session
        session.SetString(key, JsonConvert.SerializeObject(value));
    }
       
    // generic type T is a stand-in indicating that we need to specify the type on retrieval
    public static T GetObjectFromJson<T>(this ISession session, string key)
    {
        string value = session.GetString(key);
        // Upon retrieval the object is deserialized based on the type we specified
        return value == null ? default(T) : JsonConvert.DeserializeObject<T>(value);
    }
}

// ******************************************************************
// - *Inside a controller method*
List<object> NewList = new List<object>();
 
HttpContext.Session.SetObjectAsJson("TheList", NewList);
 
// Notice that we specify the type ( List ) on retrieval
List<object> Retrieve = HttpContext.Session.GetObjectFromJson<List<object>>("TheList");


// ******************************************************************
using Microsoft.AspNetCore.Http;
 
// Other code
public IActionResult Method()
{
    TempData["Variable"] = "Hello World";
    return RedirectToAction("OtherMethod");
}
public IActionResult OtherMethod()
{
    Console.WriteLine(TempData["Variable"]);
    // writes "Hello World" if redirected to from Method()
}