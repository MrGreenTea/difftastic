<script lang="ts">
  // This demonstrates a parse error in tree-sitter-svelte
  // Type annotations on destructuring with $props() cause issues
  
  interface PageData {
    message: string;
    count: number;
  }
  
  // This type annotation causes a parse error
  const { data }: { data: PageData } = $props();
  
  const message = data.message;
  const count = data.count;
</script>

<div>
  <h1>{message}</h1>
  <p>Count: {count}</p>
</div>