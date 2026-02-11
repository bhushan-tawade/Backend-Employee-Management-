const departmentService = require('../services/department.service');
const { success } = require('../utils/responseHandler');

/**
 * POST /api/departments
 */
exports.createDepartment = async (req, res, next) => {
  try {
    const department = await departmentService.createDepartment(req.body);
    success(res, department, 201);
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/departments
 */
exports.getDepartments = async (req, res, next) => {
  try {
    const departments = await departmentService.getDepartments();
    success(res, departments);
  } catch (error) {
    next(error);
  }
};

/**
 * DELETE /api/departments/:id
 */
exports.deleteDepartment = async (req, res, next) => {
  try {
    await departmentService.deleteDepartment(parseInt(req.params.id));
    success(res, "Department deleted successfully");
  } catch (error) {
    next(error);
  }
};
