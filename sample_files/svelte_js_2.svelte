<script>
  let value = $state(0);
</script>

<span>
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
