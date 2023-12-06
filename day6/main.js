function createTaskPlanner() {
  const tasks = [];
  //si bien estoy añadiendo aquí las propiedades uno por uno, es mejor traerlas directamente como lo hace el compañero Lucas Frazzeta
  function addTask(task) {
    const tarea = {
      id: task.id,
      name: task.name,
      priority: task.priority,
      tags: task.tags,
      completed: false,
    };
    tasks.push(tarea);
  }

  function removeTask(value) {
    let indexTask = tasks.findIndex(
      (task) => task.id === value || task.name === value
    );
    indexTask > -1 ? tasks.splice(indexTask, 1) : false;
    return;
  }

  function markTaskAsCompleted(value) {
    let searchTask = tasks.filter(
      (task) => task.id === value || task.name === value
    );
    searchTask.length > 0
      ? searchTask.forEach((task) => (task.completed = true))
      : false;
    return;
  }

  function getTasks() {
    return tasks;
  }

  function getPendingTasks() {
    let pendingTasks = tasks.filter((task) => task.completed == false);
    return pendingTasks;
  }
  function getCompletedTasks() {
    let completedTasks = tasks.filter((task) => task.completed == true);
    return completedTasks;
  }

  function markTaskAsCompleted(value) {
    let searchTask = tasks.filter(
      (task) => task.id === value || task.name === value
    );
    searchTask.length > 0
      ? searchTask.forEach((task) => (task.completed = true))
      : false;
    return;
  }

  function getSortedTasksByPriority() {
    let copyTask = structuredClone(tasks); //deepcopy con structuredClone
    copyTask.sort((a, b) => a.priority - b.priority);
    return copyTask;
  }
  //Solucion de filterTasksByTag de Lucas Frazzetta (me parecio muy elegante)
  function filterTasksByTag(tag) {
    return tasks.filter((task) => task.tags.includes(tag));
  }
  //Solucion de updateTask de Lucas Frazzetta (me parecio muy elegante)
  function updateTask(taskId, updates) {
    tasks.forEach((task) => {
      if (task.id === taskId) {
        for (const property in updates) {
          task[property] = updates[property];
        }
      }
    });
  }

  return {
    addTask,
    removeTask,
    getTasks,
    getPendingTasks,
    getCompletedTasks,
    markTaskAsCompleted,
    getSortedTasksByPriority,
    filterTasksByTag,
    updateTask,
  };
}

const planner = createTaskPlanner();

planner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
});

planner.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 3,
    tags: ["personal"]
});

console.log(planner.getSortedTasksByPriority());