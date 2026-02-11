const prisma = require('../config/db');

exports.createDepartment = (data) => {
  return prisma.department.create({ data });
};

exports.getDepartments = () => {
  return prisma.department.findMany();
};

exports.deleteDepartment = async (id) => {
  const employees = await prisma.employee.findMany({
    where: { department_id: id }
  });

  if (employees.length > 0) {
    throw new Error("Cannot delete department with assigned employees");
  }

  return prisma.department.delete({
    where: { id }
  });
};
