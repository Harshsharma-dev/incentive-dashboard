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
	<div class="mx-5">
		<div class="d-flex justify-content-between my-4">
			<div class="go-back-btn">
				<button on:click={backToHome} class="btn">
					<span><i class="fa fa-solid fa-arrow-left" /> </span>Back To Incentives List</button
				>
			</div>
			<div class="top-row-heading">
				<h1 class="mr-7">Map Incentives</h1>
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

	.go-back-btn > button {
		font-size: 24px;
		font-weight: 600;
	}

	.top-row-heading > h2 {
		font-weight: 700;
		/* font-size: 36px; */
	}
	.top-row-heading {
		margin-right: 26.7rem;
	}

	.go-back-btn > button:hover {
		border: 1px solid #000000;
	}
</style>
