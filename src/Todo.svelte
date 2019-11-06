<script>
  import { createEventDispatcher } from 'svelte';
  import { todos } from './stores.js';
  import { fly, fade, slide } from 'svelte/transition';

  const dispatch = createEventDispatcher();

  export let completed = false;
  export let title = 'This is a Todo';
  export let id = 1;
  export let removed;

  const saveCompleted = v => {
    todos.complete({ id });
  };

  const saveTitle = v => {
    todos.update({ id, title });
  };
</script>

<style>
  .todo {
    border: 1px solid #000;
    padding: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  input[type='text'] {
    margin-left: 16px;
    width: 100%;
    border: none;
  }
</style>

{#if !removed}
  <div class="todo" out:slide>
    <input type="checkbox" bind:checked={completed} on:change={saveCompleted} />
    <input
      type="text"
      disabled={completed ? 'disabled' : null}
      style="text-decoration: {completed ? 'line-through' : 'initial'};"
      bind:value={title}
      on:change={saveTitle} />
  </div>
{/if}
