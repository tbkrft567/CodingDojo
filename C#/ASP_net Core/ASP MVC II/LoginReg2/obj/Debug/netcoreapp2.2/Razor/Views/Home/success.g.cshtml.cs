#pragma checksum "C:\Users\Zach's PC\Documents\Important Files\Personal\Computer Coding\(1)CodingDojo\C#\ASP_net Core\ASP MVC II\LoginReg2\Views\Home\success.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "c468ac570211e28f0e57356cc2ed0b0ee3425fdb"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_success), @"mvc.1.0.view", @"/Views/Home/success.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Home/success.cshtml", typeof(AspNetCore.Views_Home_success))]
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
#line 1 "C:\Users\Zach's PC\Documents\Important Files\Personal\Computer Coding\(1)CodingDojo\C#\ASP_net Core\ASP MVC II\LoginReg2\Views\_ViewImports.cshtml"
using LoginReg2;

#line default
#line hidden
#line 2 "C:\Users\Zach's PC\Documents\Important Files\Personal\Computer Coding\(1)CodingDojo\C#\ASP_net Core\ASP MVC II\LoginReg2\Views\_ViewImports.cshtml"
using LoginReg2.Models;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c468ac570211e28f0e57356cc2ed0b0ee3425fdb", @"/Views/Home/success.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"e9569b9ba59dbe65e662d9b280d95b6b3497015e", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_success : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
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
            BeginContext(0, 35, true);
            WriteLiteral("<!DOCTYPE html>\r\n<html lang=\"en\">\r\n");
            EndContext();
            BeginContext(35, 148, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "c468ac570211e28f0e57356cc2ed0b0ee3425fdb3565", async() => {
                BeginContext(41, 135, true);
                WriteLiteral("\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Document</title>\r\n");
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
            BeginContext(183, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(185, 456, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "c468ac570211e28f0e57356cc2ed0b0ee3425fdb4892", async() => {
                BeginContext(191, 4, true);
                WriteLiteral("\r\n\r\n");
                EndContext();
#line 10 "C:\Users\Zach's PC\Documents\Important Files\Personal\Computer Coding\(1)CodingDojo\C#\ASP_net Core\ASP MVC II\LoginReg2\Views\Home\success.cshtml"
        
            string FirstName = ViewBag.FirstName;
            string LastName = ViewBag.LastName;
            string Email = ViewBag.Email;
            string Password = ViewBag.Password;
            string PasswordConfirmation = ViewBag.PasswordConfirmation;
         

#line default
#line hidden
                BeginContext(482, 37, true);
                WriteLiteral("    \r\n    <h1>Success!!</h1>\r\n    <p>");
                EndContext();
                BeginContext(520, 9, false);
#line 19 "C:\Users\Zach's PC\Documents\Important Files\Personal\Computer Coding\(1)CodingDojo\C#\ASP_net Core\ASP MVC II\LoginReg2\Views\Home\success.cshtml"
  Write(FirstName);

#line default
#line hidden
                EndContext();
                BeginContext(529, 13, true);
                WriteLiteral("</p>\r\n    <p>");
                EndContext();
                BeginContext(543, 8, false);
#line 20 "C:\Users\Zach's PC\Documents\Important Files\Personal\Computer Coding\(1)CodingDojo\C#\ASP_net Core\ASP MVC II\LoginReg2\Views\Home\success.cshtml"
  Write(LastName);

#line default
#line hidden
                EndContext();
                BeginContext(551, 13, true);
                WriteLiteral("</p>\r\n    <p>");
                EndContext();
                BeginContext(565, 5, false);
#line 21 "C:\Users\Zach's PC\Documents\Important Files\Personal\Computer Coding\(1)CodingDojo\C#\ASP_net Core\ASP MVC II\LoginReg2\Views\Home\success.cshtml"
  Write(Email);

#line default
#line hidden
                EndContext();
                BeginContext(570, 13, true);
                WriteLiteral("</p>\r\n    <p>");
                EndContext();
                BeginContext(584, 8, false);
#line 22 "C:\Users\Zach's PC\Documents\Important Files\Personal\Computer Coding\(1)CodingDojo\C#\ASP_net Core\ASP MVC II\LoginReg2\Views\Home\success.cshtml"
  Write(Password);

#line default
#line hidden
                EndContext();
                BeginContext(592, 13, true);
                WriteLiteral("</p>\r\n    <p>");
                EndContext();
                BeginContext(606, 20, false);
#line 23 "C:\Users\Zach's PC\Documents\Important Files\Personal\Computer Coding\(1)CodingDojo\C#\ASP_net Core\ASP MVC II\LoginReg2\Views\Home\success.cshtml"
  Write(PasswordConfirmation);

#line default
#line hidden
                EndContext();
                BeginContext(626, 8, true);
                WriteLiteral("</p>\r\n\r\n");
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
            BeginContext(641, 9, true);
            WriteLiteral("\r\n</html>");
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