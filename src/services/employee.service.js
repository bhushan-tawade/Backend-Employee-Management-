const prisma = require('../config/db');

exports.createEmployee = (data) => {
  return prisma.employee.create({ data });
};

exports.getEmployees = () => {
  return prisma.employee.findMany({
    include: {
      department: true,
      manager: true
    }
  });
};

exports.getEmployeeById = (id) => {
  return prisma.employee.findUnique({
    where: { id },
    include: {
      department: true,
      manager: true
    }
  });
};

exports.updateEmployee = (id, data) => {
  return prisma.employee.update({
    where: { id },
    data
  });
};

exports.deleteEmployee = async (id) => {
  await prisma.employee.updateMany({
    where: { manager_id: id },
    data: { manager_id: null }
  });

  return prisma.employee.delete({
    where: { id }
  });
};
