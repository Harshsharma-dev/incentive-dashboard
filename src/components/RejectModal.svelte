<!-- FullScreenModal.svelte -->

<script>
	export let incentiveId;
	export let showModal;
	export let onClose;
	import { createEventDispatcher } from 'svelte';
	import { mappedIncentives, unMappedIncentives, rejectedIncentives } from '../Store.js';
	import { goto } from '$app/navigation';

	let mappedData;
	mappedIncentives.subscribe((data) => {
		mappedData = data;
	});

	let rejectedData;
	rejectedIncentives.subscribe((data) => {
		rejectedData = data;
	});

	let unMappedData;
	unMappedIncentives.subscribe((data) => {
		unMappedData = data;
	});

	//update store data
	let unMappedDataUpdate;
	let rejectedDataUpdate;
	let updatedIncentive;
	let mappedDataUpdate;

	mappedIncentives.update((data) => {
		mappedDataUpdate = data;
		return [...mappedDataUpdate];
	});

	// reject function
	let rejectId = () => {
		unMappedIncentives.update((data) => {
			unMappedDataUpdate = data;

			if (unMappedDataUpdate.includes(unMappedDataUpdate[incentiveId])) {
				updatedIncentive = unMappedDataUpdate[incentiveId];
				unMappedData.splice(incentiveId, 1);
			} else if (mappedDataUpdate.includes(mappedDataUpdate[incentiveId])) {
				updatedIncentive = mappedIncentives[incentiveId];
				mappedData.splice(incentiveId, 1);
			}

			updatedIncentive.isRejected = true;
			return [...unMappedDataUpdate];
		});

		rejectedIncentives.update((data) => {
			rejectedDataUpdate = data;
			rejectedDataUpdate.push(updatedIncentive);
			return [...rejectedDataUpdate];
		});
		showModal = false;
		goto('/');
	};

	// const dispatch = createEventDispatcher();

	// function rejectIncentive(incentiveId) {
	// 	dispatch('rejectIncentiveID', incentiveId);
	// 	console.log(incentiveId);
	// }
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
							<!-- <i class="fa fa-heart" /> -->
							<i class="fa fa-solid fa-exclamation" />
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
								id="irrelevant"
								name="rejectReason"
								value="irrelevant"
							/>
							<label class="form-check-label custom-control-label ml-3" for="irrelevant"
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
									id="notEnoughtData"
									name="rejectReason"
									value="notEnoughtData"
								/>
								<label class="form-check-label custom-control-label ml-3" for="notEnoughtData"
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
									id="notForMoto"
									name="rejectReason"
									value="notForMoto"
								/>
								<label class="form-check-label custom-control-label ml-3" for="notForMoto"
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
						on:click={rejectId}
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
		width: 100%; /* Adjust the width to take up the full viewport width */
		max-width: 90%;
		/* max-height: 90vh; */
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
		color: #c8511a;
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
		border: 2px solid black;
	}

	.modal-content {
		/* width: 644px; */

		padding: 50px;
		border-radius: 20px;
	}

	/* Create custom radio button appearance */
	input[type='radio']:checked {
		border: 5px solid #000;
		background-color: transparent;
	}

	/* Change the appearance of the custom radio button when checked */
	input[type='radio']:checked {
		background-color: transparent;
	}

	@media (max-width: 1198px) {
		.modal-content {
			max-height: 90vh;
		}
	}
</style>
