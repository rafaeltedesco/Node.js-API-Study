const express = require('express')
const app = express()
const routeServices = require('./routeServices')



app.use(express.json())

app
  .route('/api/v1/students')
  .get(routeServices.getStudents)
  .post(routeServices.addNewStudent)

app
  .route('/api/v1/students/:id')
  .get(routeServices.getStudentById)
  .delete(routeServices.deleteStudent)

  


app.listen(3000, ()=> {
  console.log('Up and running')
})