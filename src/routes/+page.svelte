<script>
	import IncentiveCard from '../components/IncentiveCard.svelte';
	import { IncentiveDetails } from '../Store.js';
	let incentiveInfo = [];
	console.log('test');
	IncentiveDetails.subscribe((data) => {
		incentiveInfo = data;
		console.log(data);
	});
</script>

<main>
	{#each incentiveInfo as incentive, index}
		<IncentiveCard
			incentiveImg={incentive.src}
			incentiveName={incentive.name}
			incentiveInfo={incentive.title}
			incentiveId={index}
			incentiveDesc={incentive.discription}
			discountPrice={incentive.discountPrice}
		/>
	{/each}
</main>
