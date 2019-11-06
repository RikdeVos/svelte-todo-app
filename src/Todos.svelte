<script>
  import Todo from './Todo.svelte';
  import { todos } from './stores.js';

  $: enableClearBtn = $todos.some(t => t.completed && !t.removed);

  const clearCompletedBtn = () => {
    todos.removeCompleted();
  };
</script>

<style>
  button {
    margin-top: 16px;
  }
</style>

{#each $todos as todo}
  <Todo {...todo} />
{/each}

<button
  on:click={clearCompletedBtn}
  disabled={enableClearBtn ? null : 'disabled'}>
  Clear Completed
</button>
