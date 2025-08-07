<script lang="typescript">
  // the type is described
  type State = {
    kind: "object";
    name: string;
    value: number;
  };
  let value: State = $state({ kind: "object", name: "value", value: 1 });
</script>

{#if value.value < 10}
  <button
    onclick={() => {
      value.value += 2;
    }}
  >
    Click me
  </button>
{:else}
  <span class="text-red-600 bg-amber-200"
    >{value.name} {value.value} is tooo big</span
  >
{/if}

<p>
  Here is some even longer text that I have written and changed. It spans even
  more and lines. You should read it to get a good understanding of what we are
  doing.
</p>

<style>
  button {
    font-size: 2.5rem;
    font-weight: bold;
  }
</style>
