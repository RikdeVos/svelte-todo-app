<script>
  let name = 'world';

  import Header from './Header.svelte';
  import Todo from './Todo.svelte';
  import Todos from './Todos.svelte';
  import CreateTodo from './CreateTodo.svelte';
  import { fly, fade, slide } from 'svelte/transition';
  import { router } from './stores.js';
</script>

<Header />

{#if $router === 'todos'}
  <div out:slide in:fade>
    <Todos />
  </div>
{:else}
  <div out:slide in:fade>
    <CreateTodo />
  </div>
{/if}
