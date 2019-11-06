<script>
  import { todos, router } from './stores.js';
  import { get } from 'svelte/store';

  let title = '';

  const addTodo = () => {
    if (!title || title === '') return;
    todos.create({ title });
    title = '';
    router.update(() => 'todos');
  };
</script>

<style>
  input[type='text'] {
    width: 100%;
  }
</style>

<form on:submit|preventDefault={addTodo}>
  <input type="text" bind:value={title} placeholder="Enter your todo..." />
  <button on:click={addTodo}>Submit</button>
</form>
