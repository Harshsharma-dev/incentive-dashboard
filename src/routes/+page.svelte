<script>
	import IncentiveCard from '../components/IncentiveCard.svelte';
	import IncentiveCount from '../components/IncentiveCount.svelte';
	import {
		unMappedIncentives,
		mappedIncentives,
		rejectedIncentives,
		newIncentives
	} from '../Store.js';
	import MappedCard from '../components/MappedCard.svelte';
	import UnmappedIncentive from '../components/UnmappedIncentive.svelte';
	import RejectedIncentive from '../components/RejectedIncentive.svelte';
	import NewIncentives from '../components/NewIncentives.svelte';
	import RejectModal from '../components/RejectModal.svelte';

	let unMappedData;
	unMappedIncentives.subscribe((data) => {
		unMappedData = data;
		console.log(unMappedData.length);
	});

	let mappedData;
	mappedIncentives.subscribe((data) => {
		mappedData = data;
		console.log(mappedData.length);
	});

	let rejectedData;
	rejectedIncentives.subscribe((data) => {
		rejectedData = data;
		console.log(rejectedData.length);
	});

	let newData;
	newIncentives.subscribe((data) => {
		newData = data;
		console.log(newData.length);
	});

	let incentiveType = 'unMapped';
	function toggleIncentives(type) {
		incentiveType = type;
		console.log(incentiveType);
	}
	function showMapped(event) {
		toggleIncentives('mapped');
	}

	function showUnmapped(event) {
		toggleIncentives('unMapped');
		console.log('unMapped');
	}

	function showRejected(event) {
		toggleIncentives('rejected');
		console.log('rejected');
	}

	function showNew(event) {
		toggleIncentives('new');
		console.log('new');
	}
</script>

<main>
	<IncentiveCount />

	<div class="container-fluid incentive-details-card-container">
		<div class="row top-row-card-container justify-content-center mx-4 my-4 mt-3">
			<UnmappedIncentive
				unmappedIncentives={unMappedData.length.toString().padStart(2, '0')}
				on:showUnmapped={showUnmapped}
				{incentiveType}
			/>
			<MappedCard
				mappedIncentives={mappedData.length.toString().padStart(2, '0')}
				on:showMapped={showMapped}
				{incentiveType}
			/>
			<RejectedIncentive
				rejectedIncentives={rejectedData.length.toString().padStart(2, '0')}
				on:showRejected={showRejected}
				{incentiveType}
			/>
			<NewIncentives
				newIncentives={newData.length.toString().padStart(2, '0')}
				on:showNew={showNew}
				{incentiveType}
			/>
		</div>
	</div>

	<!-- <div class="card" on:click={() => toggleIncentives('unMapped')}>
		<h2>Mapped</h2>
	</div> -->
	<!-- <div class="card-width container">
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
		    width: 28.375rem;
    height: 4.063rem;
}
	</div> -->
	<RejectModal />

	{#if incentiveType === 'unMapped'}
		{#each unMappedData as incentive, index}
			<IncentiveCard
				incentiveImg={incentive.src}
				incentiveName={incentive.name}
				incentiveInfo={incentive.title}
				incentiveId={incentive.id}
				incentiveDesc={incentive.discription}
				discountPrice={incentive.discountPrice}
			/>
		{/each}
	{:else if incentiveType === 'mapped'}
		{#each mappedData as incentive, index}
			<IncentiveCard
				incentiveImg={incentive.src}
				incentiveName={incentive.name}
				incentiveInfo={incentive.title}
				incentiveId={incentive.id}
				incentiveDesc={incentive.discription}
				discountPrice={incentive.discountPrice}
				mapOrNot={incentive.isMapped}
			/>
		{/each}
	{:else if incentiveType === 'rejected'}
		{#each rejectedData as incentive, index}
			<IncentiveCard
				incentiveImg={incentive.src}
				incentiveName={incentive.name}
				incentiveInfo={incentive.title}
				incentiveId={incentive.id}
				incentiveDesc={incentive.discription}
				discountPrice={incentive.discountPrice}
				rejectedOrNot={incentive.isRejected}
			/>
		{/each}
	{:else if incentiveType === 'new'}
		{#each newData as incentive, index}
			<IncentiveCard
				incentiveImg={incentive.src}
				incentiveName={incentive.name}
				incentiveInfo={incentive.title}
				incentiveId={incentive.id}
				incentiveDesc={incentive.discription}
				discountPrice={incentive.discountPrice}
				rejectedOrNot={incentive.isRejected}
			/>
		{/each}
	{/if}
</main>

<style>
	.card-width {
		width: 60rem;
	}
	.incentive-details-card-container {
		border-bottom: 1px solid #e5e5e5;
	}
</style>
