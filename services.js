

const findStudent = (students, req)=> {
  let id = req.params.id * 1
  return students.find(el=>el.id == id)
}

module.exports = {
  findStudent
}