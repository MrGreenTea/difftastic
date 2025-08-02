<script>
  let value = $state(1);
</script>

<button
  onclick={() => {
    value++;
  }}
>
  Click me
</button>

<style>
  button {
    font-size: 2rem;
  }
</style>
