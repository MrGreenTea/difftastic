<script lang="ts">
  let value: number = $state(1);
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
