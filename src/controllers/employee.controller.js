const employeeService = require('../services/employee.service');
const { success } = require('../utils/responseHandler');

/**
 * POST /api/employees
 */
exports.createEmployee = async (req, res, next) => {
  try {
    const employee = await employeeService.createEmployee(req.body);
    success(res, employee, 201);
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/employees
 */
exports.getEmployees = async (req, res, next) => {
  try {
    const employees = await employeeService.getEmployees();
    success(res, employees);
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/employees/:id
 */
exports.getEmployeeById = async (req, res, next) => {
  try {
    const employee = await employeeService.getEmployeeById(
      parseInt(req.params.id)
    );

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    success(res, employee);
  } catch (error) {
    next(error);
  }
};

/**
 * PUT /api/employees/:id
 */
exports.updateEmployee = async (req, res, next) => {
  try {
    const updated = await employeeService.updateEmployee(
      parseInt(req.params.id),
      req.body
    );

    success(res, updated);
  } catch (error) {
    next(error);
  }
};

/**
 * DELETE /api/employees/:id
 */
exports.deleteEmployee = async (req, res, next) => {
  try {
    await employeeService.deleteEmployee(parseInt(req.params.id));
    success(res, "Employee deleted successfully");
  } catch (error) {
    next(error);
  }
};
