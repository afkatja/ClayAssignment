using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Clay_Assignment.Models.ManageViewModels
{
    public class AddLockViewModel
    {
        [Required]
        [Display(Name = "Register door to system")]
        public string DoorName { get; set; }
    }
}
