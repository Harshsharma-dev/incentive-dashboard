<script>
	import bmw from '$lib/assets/bmw.png';
	import { goto } from '$app/navigation';
	import { IncentiveData, IncentiveDetails, IncentiveFormData } from '../Store.js';
	import { page } from '$app/stores';

	let mapPath = $page.url.pathname;
	console.log(mapPath + ' path');

	export let incentiveImg;
	export let incentiveName;
	export let incentiveInfo;
	export let incentiveId;
	export let incentiveDesc;
	export let discountPrice;
	let contentToggle = false;

	// set button route
	function mapIncentiveRoute() {
		goto('mapincentive/' + incentiveId);
	}

	// store variables ===============================================
	let unmappedLength;
	let isMapped;
	let incentiveCountData;
	let incentiveMap;
	let subscribeForm;
	let formData;

	//subscribe form Data from store
	$: subscribeForm = $IncentiveFormData;

	//update formData
	function editIncentive() {
		IncentiveFormData.update((data) => {
			formData = data;
			console.log(formData[0].incentiveTitle + '  from funcio');
			formData[0].incentiveTitle = incentiveInfo;
			formData[0].discription = incentiveDesc;
			formData[0].discountPrice = discountPrice;

			return [...formData];
		});
		console.log(formData[0].incentiveTitle + '  from funcio');
		mapIncentive();
	}

	// unmappedLength.set((unmappedLength[0].unmapped = unmappedLength.length));

	// subscribe data==========================================================
	isMapped = $IncentiveDetails;
	// IncentiveDetails.subscribe((data) => {
	// 	isMapped = data;
	// });

	// update initial value of unmapped ==============================================
	unmappedLength = isMapped.length;
	console.log(unmappedLength + ' len');

	// map Incentive function=================================================
	function mapIncentive() {
		IncentiveDetails.update((data) => {
			incentiveMap = data;
			console.log(incentiveMap[incentiveId].isMapped + 'value');
			// return console.log(incentiveId);
			incentiveMap[incentiveId].isMapped = true;
			return [...incentiveMap];
		});

		console.log(isMapped[incentiveId].isMapped + ' ' + 'is map');

		IncentiveData.update((data) => {
			incentiveCountData = data;
			incentiveCountData[0].mapped += 1;
			incentiveCountData[0].unmapped -= 1;

			return [...incentiveCountData];
		});
	}

	// reject Incentive function=================================================
	function rejectIncentive() {
		IncentiveDetails.update((data) => {
			incentiveMap = data;
			incentiveMap[incentiveId].isMapped = false;
			return [...incentiveMap];
		});

		IncentiveData.update((data) => {
			incentiveCountData = data;
			incentiveCountData[0].mapped -= 1;
			incentiveCountData[0].rejected += 1;
			return [...incentiveCountData];
		});
	}
</script>

<div class="container p-2 card-container1">
	<div class="card card-container">
		<div class="container row no-gutters pt-4 px-4">
			<div class="border p-0 d-flex">
				<div class="col-md-8">
					<img src={incentiveImg} class="card-img mr-3" alt="Product-Image" />
				</div>
				<div class="col-md-4 card-title-container">
					<div class="card-title-right px-3">
						<div class="d-flex title-top align-items-center">
							<img src={bmw} alt="" class="logo-img" />
							<p class="card-title text-wrap fw-bold">{incentiveName}</p>
						</div>
						<p class="card-text text-wrap fw-bold px-3">{incentiveInfo}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="container content-description mt-4 px-4">
			<h5 class="text-truncate">{incentiveInfo}</h5>
			<p>
				$ {discountPrice}
				{incentiveDesc}
			</p>
			<hr />
		</div>
		<div class="container my-3 px-4">
			<button
				on:click={() => (contentToggle = !contentToggle)}
				class="dropdown-toggle content-btn fw-bold"
				type="button"
				>Content
			</button>
			{#if contentToggle}
				<div class="content-description mt-4">
					<h5>ELIGIBLE MODELS</h5>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, necessitatibus nisi.
						Enim ipsum accusantium molestias nulla fugiat, porro in nemo voluptas quibusdam, dicta
						sunt voluptatum tempora veritatis quasi facere vitae suscipit accusamus praesentium
						provident quod. In inventore ratione reiciendis dolorem. Lorem ipsum, dolor sit amet
						consectetur adipisicing elit.
					</p>
					<p>
						Pariatur vel, harum modi vero ipsum necessitatibus accusantium voluptatem cupiditate
						adipisci quis, quia sapiente aliquam, unde accusamus dolor itaque! Optio amet delectus
						perspiciatis, consequuntur est repellat, repudiandae debitis unde accusamus numquam
						officia! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quia error
						exercitationem nihil placeat explicabo in at nostrum sequi possimus. Recusandae placeat
						voluptatem et quibusdam! Voluptates omnis in, tempora odit cumque maxime!
					</p>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, necessitatibus nisi.
						Enim ipsum accusantium molestias nulla fugiat, porro in nemo voluptas quibusdam, dicta
						sunt voluptatum tempora veritatis quasi facere vitae suscipit accusamus praesentium
						provident quod. In inventore ratione reiciendis dolorem. Lorem ipsum, dolor sit amet
						consectetur adipisicing elit. Pariatur vel, harum modi vero ipsum necessitatibus
						accusantium voluptatem cupiditate adipisci quis, quia sapiente aliquam, unde accusamus
						dolor itaque! Optio amet delectus perspiciatis, consequuntur est repellat, repudiandae
						debitis unde accusamus numquam officia! Lorem, ipsum dolor sit amet consectetur
						adipisicing elit. Alias quia error exercitationem nihil placeat explicabo in at nostrum
						sequi possimus. Recusandae placeat voluptatem et quibusdam! Voluptates omnis in, tempora
						odit cumque maxime!
					</p>
				</div>
			{/if}
			<hr />
			<div class="mt-3">
				<p>Expires: 2023-10-01T05:59:00Z</p>
				{#if mapPath === '/'}
					<button id={incentiveId} on:click={mapIncentiveRoute} class="btn map-incentive-btn p-2"
						>Map This Incentive</button
					>
				{:else}
					<button
						id={incentiveId}
						on:click|preventDefault={editIncentive}
						class="btn map-incentive-btn p-2">Edit This Incentive</button
					>
					<button
						id={incentiveId}
						on:click={rejectIncentive}
						class="btn map-incentive-btn p-2 border-danger text-danger"
						>Reject this Incentive</button
					>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	.content-btn {
		border: none;
		outline: none;
		background-color: none;
		width: 100%;
		display: flex;
		justify-content: space-between;
		background: none;
		align-items: center;
	}

	.map-incentive-btn {
		border: 0.5px solid grey;
		width: 30%;
	}

	.card-title-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.card-container {
		justify-content: center;
		align-items: center;
	}

	.title-top > img {
		width: 20%;
		height: 20%;
	}

	.card-title-right {
		width: 84%;
	}

	.logo-img {
		margin-right: 0.5rem;
	}

	.card-container1 {
		width: 150%;
	}
</style>
