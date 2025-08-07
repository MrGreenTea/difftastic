<script>
  // initialize state to 0
  let value = $state(0);
</script>

<span class="text bg-green-500 text-red-300">
  Next value: {value + 1}
</span>

<button
  onclick={() => {
    console.log("CLICKED");
    value++;
  }}
>
  Click me
</button>

<p>
  {value}
</p>

<style>
  button {
    font-size: 3rem;
  }
</style>
