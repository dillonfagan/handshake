<script>
    import Button from "$lib/Button.svelte";

    let balance = 1200;
</script>

<div class="bg-primary px-4 py-12 flex flex-col text-gray-50">
    <div class="text-6xl text-center font-bold">{balance}</div>
    <div class="text-center font-bold">Credits</div>
</div>

<div class="px-4 py-12 flex flex-col space-y-4 text-gray-50">
    <input class="clickable" type="text" placeholder="@janedoe" />
    <div class="flex flex-row space-x-4 items-center justify-between">
        <Button primary style="w-1/2">Request</Button>
        <Button style="w-1/2">Send</Button>
    </div>
</div>