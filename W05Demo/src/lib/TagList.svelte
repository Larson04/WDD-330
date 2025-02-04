
<script>
	let { tags = [] } = $props();
</script>

<div >
{#each tags as tag}
	<button >{tag}</button>
	{/each}
</div>

<style>
	div {
		display: flex;
		list-style-type: none;
		flex-wrap: wrap;
		font-size: .8em;
		padding-left: 0;
	}
	button {
		padding: .5em .5em;
		border: 1px solid;
		background: transparent;
	}
</style>