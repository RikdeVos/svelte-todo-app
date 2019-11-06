<script>
  import { router } from './stores.js';

  const navigate = path => {
    router.update(r => path);
  };
</script>

<style>
  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  button {
    height: 48px;
    padding: 0 16px;
  }
</style>

<header>
  <h1>Todos</h1>
  {#if $router === 'create'}
    <button on:click={() => navigate('todos')}>
      <span>Return</span>
    </button>
  {:else}
    <button on:click={() => navigate('create')}>
      <span>+ Add New Todo</span>
    </button>
  {/if}
</header>
