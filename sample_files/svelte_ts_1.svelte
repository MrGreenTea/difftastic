<script lang="ts">
  import Card from "$lib/components/Card";
  import Button from "$lib/components/Button";
  // Comment describes the type
  type State = {
    kind: "object";
    value: number;
  };
  let value: State = $state({ kind: "object", value: 0 });
</script>

{#if value.value < 10}
  <Button
    onclick={() => {
      value.value++;
    }}
  >
    Click me
  </Button>
{:else}
  <span class="text-amber-600 bg-amber-200"
    >the value {value.value} is tooo big</span
  >
{/if}

<Card>
  Here is some very long text that I have written. It spans multiple sentences
  and lines. You should read it to get a good understanding of what I am doing.
</Card>

<style>
  button {
    font-size: 2rem;
  }
</style>
