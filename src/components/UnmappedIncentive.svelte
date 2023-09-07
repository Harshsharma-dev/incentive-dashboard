<script>
	export let unmappedIncentives;
	export let incentiveType;

	import { unMappedIncentives } from '../Store';

	let unMappedDataComp;
	unMappedIncentives.subscribe((data) => {
		unMappedDataComp = data;
		console.log(unMappedDataComp + 'comp');
	});

	function dateBuilder() {
		let d = new Date();
		let months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];
		// let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		// let day = days[d.getDay()];
		let date = d.getDate();
		let month = months[d.getMonth()];
		let year = d.getFullYear();

		return `${month} ${date},  ${year}`;
	}

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function showUnmapped() {
		dispatch('showUnmapped');
	}
</script>

<!-- {#if unmappedIncentives.length > 0} -->
<div class="col-sm-3 card-container-style">
	<div class="card bg-white rounded card-style" class:selected-card={incentiveType === 'unMapped'}>
		<button on:click={showUnmapped} class="fw-600 text-start">
			<div class="card-body">
				<div class="d-flex justify-content-between">
					<span class="icon"> icon </span>
					<div class="update-date d-flex flex-column">
						<span class="date-text">Last Updated</span>
						<span class="fw-600 date-span">{dateBuilder()}</span>
					</div>
					<span class="icon"> icon </span>
				</div>
				<div class="row">
					<h3 class="fw-700">{unmappedIncentives}</h3>
				</div>

				<div class="row">
					<p>UNMAPPED INCENTIVES</p>
				</div>
			</div>
		</button>
	</div>
</div>

<style>
	.update-date {
		text-align: end;
	}

	.card-container-style {
		height: 12.375rem;
	}

	.card-style {
		height: 100%;
		padding: 1.675rem;
		box-shadow: 3px 3px 10px 0px #0000001a;
	}
	.selected-card {
		border: 2px solid #2971ea;
	}
</style>
