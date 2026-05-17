function App() {
  return (
    <div>
      <h1> Student List</h1>
<Student name="Aman" marks={92} />
      <Student name="Priya" marks={78} />
      <Student name="Rahul" marks={85} />
      <Student name="deep" age={22}/>
    </div>
  );
}
// Student Component
function Student({ name, marks,age  }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Marks: {marks}</p>
      <p>Marks: {age}</p>
    </div>
  );
}
export default App;