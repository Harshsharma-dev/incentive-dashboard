<!-- FullScreenModal.svelte -->

<script>
	export let incentiveId;
	export let showModal = false;
	export let onClose;
	import { createEventDispatcher } from 'svelte';
	import { mappedIncentives } from '../Store.js';

	let mappedData;
	mappedIncentives.subscribe((data) => {
		mappedData = data;
	});
	const dispatch = createEventDispatcher();

	function rejectIncentive(incentiveId) {
		dispatch('rejectIncentiveID', incentiveId);
		console.log(incentiveId);
	}
</script>

<!-- 
<div class="full-screen-modal" class:show={showModal}>
	<div class="modal-content">
		
		<button class="close-button" on:click={onClose}>Close</button>
	</div>
</div> -->

<div class="modal full-screen-modal" tabindex="-1" class:show={showModal}>
	<!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" /> -->
	<!-- <button type="button" class="btn btn-secondary close-button" on:click={onClose}>Close</button> -->
	<div class="container-fluid">
		<div class="w-100 d-flex justify-content-center">
			<div class="modal-content d-flex justify-content-center align-items-center w-50">
				<div class="border-bottom w-100">
					<div class="d-flex flex-column justify-content-center">
						<div class="alert-icon p-5 d-flex align-items-center justify-content-center">
							<i class="fa fa-heart" />
						</div>
						<div class="head-line">
							<h5 class="modal-title title-style">
								Are you sure, you want to reject this incentive?
							</h5>
						</div>
						<div class="head-line-two p-3">
							<p>Please select a reason to reject this incentive</p>
						</div>
					</div>
				</div>
				<div class="modal-body">
					<div class="btn-group-vertical">
						<div
							class="form-check mb-4 custom-radio d-flex justify-content-center align-items-center"
						>
							<input
								type="radio"
								class="form-check-input custom-control-input"
								id="radio1"
								name="customRadio"
							/>
							<label class="form-check-label custom-control-label ml-3" for="radio1"
								>Irrelevant at this stage</label
							>
						</div>

						<div class="btn-group-vertical">
							<div
								class="form-check mb-4 custom-radio d-flex justify-content-center align-items-center"
							>
								<input
									type="radio"
									class="form-check-input custom-control-input"
									id="radio1"
									name="customRadio"
								/>
								<label class="form-check-label custom-control-label ml-3" for="radio1"
									>Not enough data</label
								>
							</div>
						</div>
						<div class="btn-group-vertical">
							<div
								class="form-check mb-4 custom-radio d-flex justify-content-center align-items-center"
							>
								<input
									type="radio"
									class="form-check-input custom-control-input"
									id="radio1"
									name="customRadio"
								/>
								<label class="form-check-label custom-control-label ml-3" for="radio1"
									>Not for motorcycle</label
								>
							</div>
						</div>
					</div>
				</div>
				<div class="d-flex justify-content-center w-100">
					<button
						type="button"
						class="btn map-incentive-btn border-secondary p-3"
						on:click={onClose}>No</button
					>

					<button
						type="button"
						id={incentiveId}
						on:click={() => findIncentiveId(incentiveId)}
						class="btn map-incentive-btn border-danger text-danger p-3">Yes</button
					>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.full-screen-modal {
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.7);
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}

	.show {
		display: flex;
	}

	.modal-content {
		background-color: #fff;
		max-width: 80%;
		max-height: 80%;
		overflow: auto;
		padding: 20px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		border-radius: 8px;
	}

	.close-button {
		position: absolute;
		top: 10px;
		right: 10px;
		background: none;
		border: none;
		cursor: pointer;
	}

	.title-style {
		/* font-family: Open Sans; */
		font-size: 18px;
		font-weight: 700;
		line-height: 27px;
		letter-spacing: 0.02em;
		text-align: center;
	}

	.alert-icon > i {
		font-size: 5rem;
	}

	.head-line > h5 {
		font-size: 18px;
		font-weight: 700;
		line-height: 27px;
		letter-spacing: 0.02em;
		text-align: center;
	}

	.head-line-two > p {
		font-size: 18px;
		font-weight: 400;
		line-height: 27px;
		letter-spacing: 0.02em;
		text-align: center;
	}

	.map-incentive-btn {
		width: 8rem;
		margin: 0 0.5rem;
		padding: 14px 50px 14px 50px;
		border-radius: 4px;
		border: 1px solid #000000;
		font-weight: 600;
	}

	.custom-radio > label {
		font-size: 18px;
		font-weight: 400;
		line-height: 25px;
		letter-spacing: 0px;
		text-align: left;
	}

	.custom-control-input {
		width: 25px;
		height: 25px;
	}

	.custom-control-input:checked {
		border: 2px solid black; /* Black outline when selected */
	}

	.modal-content {
		/* width: 644px; */

		padding: 50px;
		border-radius: 20px;
	}
</style>
