using Modules.Business;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace CodingTest.Controllers
{
    public class EmailTemplatesController : ApiController
    {
        // GET: EmailTemplates
        public EmailTemplates Get()
        {
            try
            {
                EmailTemplates viewModel = EmailTemplates.AllTemplates;

                return viewModel;
            }
            catch (Exception ex)
            {
                throw new HttpResponseException(HttpStatusCode.InternalServerError);
            }
        }
    }
}