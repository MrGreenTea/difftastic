<script lang="ts">
  // This demonstrates the working alternative
  // Without type annotation on destructuring, parsing works correctly
  
  interface PageData {
    message: string;
    count: number;
  }
  
  // Without type annotation - this works fine
  const { data } = $props<{ data: PageData }>();
  
  const message = data.message;
  const count = data.count;
</script>

<div>
  <h1>{message}</h1>
  <p>Count: {count}</p>
</div>