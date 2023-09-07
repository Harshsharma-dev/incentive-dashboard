<script>
	import IncentiveCard from '../../../components/IncentiveCard.svelte';
	import MapIncentive from '../../../components/MapIncentive.svelte';
	import { IncentiveDetails } from '../../../Store.js';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let incentiveId = $page.params.id;
	console.log(incentiveId);
	// console.log($page.params.id);
	function backToHome() {
		goto('/');
	}
	let incentiveInfo = [];
	console.log('test');
	IncentiveDetails.subscribe((data) => {
		incentiveInfo = data;
		console.log(incentiveInfo);
	});
	console.log(incentiveInfo[incentiveId].src);
</script>

<div class="">
	<div class="mx-4">
		<div class="d-flex justify-content-between my-4">
			<div>
				<button on:click={backToHome} class="btn fw-bold"> ← Back To Incentives List</button>
			</div>
			<div>
				<h2 class="mr-7">Map Incentives</h2>
			</div>
		</div>
	</div>
	<div class="mx-5">
		<div class="d-flex">
			<IncentiveCard
				incentiveImg={incentiveInfo[incentiveId].src}
				incentiveName={incentiveInfo[incentiveId].name}
				incentiveInfo={incentiveInfo[incentiveId].title}
				incentiveDesc={incentiveInfo[incentiveId].discription}
				discountPrice={incentiveInfo[incentiveId].discountPrice}
				{incentiveId}
			/>
			<!-- <EditButtons /> -->

			<MapIncentive
				incentiveName={incentiveInfo[incentiveId].name}
				incentiveInfo={incentiveInfo[incentiveId].title}
				{incentiveId}
			/>
		</div>
	</div>
</div>

<style>
	@media (max-width: 1198px) {
		.d-flex {
			flex-wrap: wrap;
		}
	}
</style>
