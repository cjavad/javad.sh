<script>
  let { children, class: className = '' } = $props();
</script>

<div class="content mb-8 {className}">
  {@render children()}
</div>