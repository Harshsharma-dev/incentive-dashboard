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
	let incentiveInfo =[];
	console.log('test');
	IncentiveDetails.subscribe((data) => {
		incentiveInfo = data;
		console.log(incentiveInfo);
	});
	console.log(incentiveInfo[incentiveId].src)
</script>

<div class="d-flex">
	<button on:click={backToHome} class="btn">Back To Incentives List</button>
</div>
<div class="container">
	<div class="row">
		
	<IncentiveCard incentiveImg={incentiveInfo[incentiveId].src} incentiveName={incentiveInfo[incentiveId].name} incentiveInfo={incentiveInfo[incentiveId].title} incentiveId={incentiveId}/>

		<MapIncentive />
	</div>
</div>
