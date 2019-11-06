import { writable } from 'svelte/store';

export const router = writable('todos');

function createTodoStore() {
  const { subscribe, set, update } = writable([
    {
      completed: false,
      title: 'Do your homework',
      id: 1,
      removed: false
    },
    {
      completed: true,
      title: 'Clean the floor',
      id: 2,
      removed: false
    }
  ]);

  return {
    subscribe,
    create: todo =>
      update(todos => [
        ...todos,
        {
          title: todo.title,
          id: todos.length + 1,
          completed: false,
          removed: false
        }
      ]),
    update: todo =>
      update(todos =>
        todos.map(t => {
          if (t.id === todo.id) return todo;
          return t;
        })
      ),
    removeCompleted: () =>
      update(todos =>
        todos.map(t => {
          if (t.completed) return { ...t, removed: true };
          return t;
        })
      ),
    complete: todo =>
      update(todos =>
        todos.map(t => {
          if (t.id === todo.id) return { ...t, completed: !t.completed };
          return t;
        })
      )
  };
}

export const todos = createTodoStore();
