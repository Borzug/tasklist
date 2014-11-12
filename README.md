tasklist
========

Task List
Backend api: 
<table>
  <tr>
    <td>get</td><td>/tasks</td><td>gets all tasks</td>
  </tr>
  <tr>
    <td>delete</td><td>/tasks/:id</td><td> deletes specific task</td>
  </tr>
  <tr>
    <td>put</td><td>/tasks/:title&:body</td><td>adds new task</td>
  </tr>
  <tr>
    <td>post</td><td>/tasks/:id/:title&:body</td><td>updated specific task</td>
  </tr>
  <tr>
    <td>patch</td><td>/tasks/:id/complete</td><td>makes task complete (sets iscomplete to true)</td>
  </tr>
</table>
