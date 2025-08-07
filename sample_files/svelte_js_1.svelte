<script>
  // inititate state
  let value = $state(1);
</script>

<span class="text bg-red-500">
  Next value: {value}
</span>

<button
  onclick={() => {
    console.log("BLICKED");
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
