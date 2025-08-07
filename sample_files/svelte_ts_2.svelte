<script lang="ts">
  let value = $state(0);
</script>

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
