#pragma checksum "C:\Users\Zach's PC\Documents\Important Files\Personal\Computer Coding\(1)CodingDojo\C#\ASP_net Core\ASP MVC I\Portfolio II\Views\Index\index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "f9e69cd478cd5bf5a62b7a8b97ec3cac5da42d26"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Index_index), @"mvc.1.0.view", @"/Views/Index/index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Index/index.cshtml", typeof(AspNetCore.Views_Index_index))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"f9e69cd478cd5bf5a62b7a8b97ec3cac5da42d26", @"/Views/Index/index.cshtml")]
    public class Views_Index_index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #line hidden
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(0, 37, true);
            WriteLiteral("<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n");
            EndContext();
            BeginContext(37, 145, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "f9e69cd478cd5bf5a62b7a8b97ec3cac5da42d262979", async() => {
                BeginContext(43, 132, true);
                WriteLiteral("\r\n   <meta charset=\"UTF-8\">\r\n   <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n   <title>Document</title>\r\n");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(182, 4, true);
            WriteLiteral("\r\n\r\n");
            EndContext();
            BeginContext(186, 790, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "f9e69cd478cd5bf5a62b7a8b97ec3cac5da42d264307", async() => {
                BeginContext(192, 2, true);
                WriteLiteral("\r\n");
                EndContext();
#line 11 "C:\Users\Zach's PC\Documents\Important Files\Personal\Computer Coding\(1)CodingDojo\C#\ASP_net Core\ASP MVC I\Portfolio II\Views\Index\index.cshtml"
           
            string name = ViewBag.myName;
         

#line default
#line hidden
                BeginContext(262, 179, true);
                WriteLiteral("   <a href=\"/\">Home</a>  |  \r\n   <a href=\"/project\">Projects</a>  |  \r\n   <a href=\"/contact\">Contact</a>  |  \r\n   <h1>About Me</h1>\r\n   <div>\r\n      <img src=\"\" alt=\"\">\r\n      <p>");
                EndContext();
                BeginContext(442, 4, false);
#line 20 "C:\Users\Zach's PC\Documents\Important Files\Personal\Computer Coding\(1)CodingDojo\C#\ASP_net Core\ASP MVC I\Portfolio II\Views\Index\index.cshtml"
    Write(name);

#line default
#line hidden
                EndContext();
                BeginContext(446, 523, true);
                WriteLiteral(@"</p>
      <p>I like stuff!</p>
   </div>
   <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae beatae eius, ad expedita cum illo culpa eligendi ea quas? Cum,
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quam sunt adipisci laudantium odio, mollitia praesentium, 
      dignissimos repellendus inventore sit optio aperiam nisi enim id deserunt tempora ratione asperiores libero. 
      quam dolores iure modi dolore sed cupiditate dignissimos dolorem?
   </p>

");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(976, 11, true);
            WriteLiteral("\r\n\r\n</html>");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591