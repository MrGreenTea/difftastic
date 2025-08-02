<script>
  let value = $state(1);
</script>

<span>
  Next value: {value}
</span>

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
