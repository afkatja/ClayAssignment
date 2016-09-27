using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Clay_Assignment.Models;
using Clay_Assignment.Models.ManageViewModels;

namespace Clay_Assignment.Controllers
{
    [Authorize]
    public class ManageController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly ILogger _logger;

        public ManageController(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            ILoggerFactory loggerFactory)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _logger = loggerFactory.CreateLogger<ManageController>();
        }

        //
        // GET: /Manage/Index
        [HttpGet]
        public async Task<IActionResult> Index()
        {
          // var model = new IndexViewModel
          // {
          //   Locks = await GetLocks()
          // };
          return View();
        }

        //
        // GET: /Manage/AddLock
        public IActionResult AddLock()
        {
            return View();
        }

        //
        // POST: /Manage/AddLock
        [HttpPost]
        public async Task<IActionResult> AddLock(AddLockViewModel model)
        {
          return View(model);
        }

        #region Helpers

        // private Task<LockViewModel> GetLocks()
        // {
        //   return _userManager.GetUserAsync(HttpContext.User);
        // }

        #endregion
    }
}
