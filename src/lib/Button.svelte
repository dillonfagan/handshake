<script>
    export let primary = false;
    export let style = "";
</script>

<button class="{primary ? "bg-primary" : "bg-gray-600"} font-bold clickable {style}"><slot /></button>