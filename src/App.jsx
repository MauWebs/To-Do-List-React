function App() {

  const tasks = [
    {
      "title": "Titulo-1",
      "description": "Description-1",
      "date": "16:16"
    },
    {
      "title": "Titulo-2",
      "description": "Description-2",
      "date": "16:16"
    },
    {
      "title": "Titulo-3",
      "description": "Description-3",
      "date": "16:00"
    }
  ];

  localStorage.setItem("tasks", JSON.stringify(tasks));

  return (

    <>
      <h1>Hello Mau!</h1>
    </>

  );

};

export default App;