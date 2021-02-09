const services = require('./services')
let students = require('./studentsData')

const getStudents = (req, res)=>{
  res.status(200).json({
    status: 'success',
    results: students.length,
    data: {
      students
    }
  })
}

const addNewStudent = (req, res)=> {
  let newId = students[students.length-1].id + 1
  students.push({"id": newId, ...req.body})
  res.status(201).json({
    status: 'success',
    message: 'New student added',
    data: {
      students
    }
  })
}

const deleteStudent = (req, res)=> {
  let studentToRemove = services.findStudent(students, req)
  if (!studentToRemove) {
    return res.status(404).json({
      status:'fail',
      message: 'Invalid Id',
      data: null
    })
  }
  students = students.filter(el=>el!=studentToRemove)

  res.status(204).json({
    status: 'success',
    message: `Student ${studentToRemove} was deleted`,
    data: null
  })
}

const getStudentById = (req, res)=> {
  let student = services.findStudent(students, req)
  if (!student) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid Id',
      data: null
    })
  }
  res.status(200).json({
    status:'success',
    data: {
      student
    }
  })
}

module.exports = {
    getStudents,
    addNewStudent,
    deleteStudent,
    getStudentById,
}