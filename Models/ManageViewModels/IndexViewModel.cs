using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace Clay_Assignment.Models.ManageViewModels
{
    public class IndexViewModel
    {
      public IList<LockViewModel> Locks { get; set; }
    }
}
