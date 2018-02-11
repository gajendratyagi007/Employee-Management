﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmployeeWebApiService.Controllers
{
    public class EmployeesController : ApiController
    {
        public IEnumerable<Employee> Get()
        {
            using (employeeDBEntities entities = new employeeDBEntities())
            {
                return entities.Employees.ToList();
            }
        }

        public Employee Get(int code )
        {
            using (employeeDBEntities entities = new employeeDBEntities())
            {
                return entities.Employees.FirstOrDefault(e => e.code == code);
            }
        }
    }
}
