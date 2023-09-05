<script>
	// export let incentiveName;
	// export let incentiveId;
	import { IncentiveData, IncentiveDetails, IncentiveFormData } from '../Store.js';

	let formData;
	IncentiveFormData.subscribe((data) => {
		formData = data;
		console.log(formData);
	});
	// $: formData = $IncentiveFormData;
	// console.log(formData[0].incentiveTitle);

	//form variables
	export let incentiveTitle;

	// let addModelDiv;
	// function addModel() {
	// 	const rowTemplate = `<div class="d-flex flex-wrap justify-content-between">
	// 					<div class="col-md-2">
	// 						<select id="inputState" class="form-control p-3 bg-light">
	// 							<option selected>Year</option>
	// 							<option>No</option>
	// 						</select>
	// 					</div>
	// 					<div class="col-md-4">
	// 						<select id="inputState" class="form-control p-3 bg-light">
	// 							<option selected>Model</option>
	// 							<option>No</option>
	// 						</select>
	// 					</div>
	// 					<div class="col-md-4">
	// 						<select id="inputState" class="form-control p-3 bg-light">
	// 							<option selected>400 GT</option>
	// 							<option>No</option>
	// 						</select>
	// 					</div>
	// 					<div class="remove-btn">
	// 						<button class="btn bg-danger text-white rounded-circle"><span>X</span></button>
	// 					</div>
	// 				</div>`;
	// 	addModelDiv.innerHTML = 'rowTemplate';

	// 	console.log('hell');
	// }

	// update with form submit===================================================
	let updateIncentive = () => {
		console.log('submit');
	};

	function addInputs() {
		var container = document.getElementById('addModel');
		var section = document.getElementById('cloneInput');
		container.appendChild(section.cloneNode(true));
		console.log('add');
	}

	function removeInputs() {
		var els = document.getElementsByClassName('remove-btn');
		for (var i = 0; i < els.length; i++) {
			els[i].addEventListener('click', function (e) {
				e.target.closest('div.model-inputs').remove();
			});
		}
		console.log('remove');
	}
</script>

<!-- <h2>Map Incentives</h2> -->
<div class="container p-2">
	<div class="card card-container p-4">
		<!-- <div class=""> -->
		<form>
			<div class="form-row">
				<div class="form-group col-md-12 mb-3">
					<label for="incentive-title" class="fw-bold mb-2">Incentive Title</label>
					<input
						type="text"
						class="form-control py-3 bg-light"
						id="incentive-title"
						placeholder="Incentive Title"
						value={formData[0].incentiveTitle}
					/>
				</div>
				<div class="form-group col-md-12 mb-3">
					<label for="inputState" class="fw-bold mb-2">DR Title</label>
					<select id="inputState" class="form-control py-3 bg-light">
						<option selected>Military Discount</option>
						<option>...</option>
					</select>
				</div>
				<div class="form-group col-md-12 mb-3">
					<label for="inputState" class="fw-bold mb-2">Type of Incentive</label>
					<select id="inputState" class="form-control py-3 bg-light">
						<option selected>Select Type</option>
						<option>option one</option>
						<option>option two</option>
					</select>
				</div>

				<div class="form-group col-md-12 mb-3">
					<label for="discountPrice" class="fw-bold mb-2">Discount Price</label>
					<input
						type="text"
						class="form-control py-3 bg-light"
						id="discountPrice"
						value={formData[0].discountPrice}
						placeholder="$"
					/>
				</div>
				<div class="form-group col-md-12 mb-3">
					<div class="d-flex justify-content-between align-items-center">
						<div class="col-md-5">
							<label for="inputDate" class="fw-bold mb-2">Validity/Expiry</label>
							<input
								class="form-control py-3 bg-light w-100"
								type="date"
								name="inputDate"
								id="inputDate"
								placeholder="MM/DD/YY"
							/>
						</div>
						<div class="col-md-5">
							<label for="inputState" class="fw-bold mb-2">Deal Summary Deduction</label>
							<select id="inputState" class="form-control py-3 bg-light w-100">
								<option selected>Yes</option>
								<option>No</option>
							</select>
						</div>
					</div>
				</div>
				<div class="mb-3 col-md-12 mb-3">
					<label for="descriptionArea" class="fw-bold mb-2">Update Description</label>
					<textarea
						class="form-control py-3 bg-light"
						id="descriptionArea"
						placeholder="Add here"
						rows="5"
						value={formData[0].discription}
						required
					/>
				</div>
				<div class="mb-3 col-md-12 mb-3" id="addModel">
					<div class="d-flex align-items-center justify-content-between py-3">
						<p class="fw-bold my-2">You can add and map multiple</p>
						<button
							class="btn btn-white border px-4"
							id="addMoreBtn"
							on:click|preventDefault={addInputs}
						>
							<span>+</span>
							Add More
						</button>
					</div>

					<div id="cloneInput">
						<div class="d-flex flex-wrap justify-content-between mt-3 model-inputs">
							<div class="col-md-2">
								<select id="inputState" class="form-control p-3 bg-light">
									<option selected>Year</option>
									<option>No</option>
								</select>
							</div>
							<div class="col-md-4">
								<select id="inputState" class="form-control p-3 bg-light">
									<option selected>Model</option>
									<option>No</option>
								</select>
							</div>
							<div class="col-md-4">
								<select id="inputState" class="form-control p-3 bg-light">
									<option selected>400 GT</option>
									<option>No</option>
								</select>
							</div>
							<div class="remove-btn">
								<button
									class="btn bg-danger text-white rounded-circle remove-btn"
									on:click|preventDefault={removeInputs}><span>X</span></button
								>
							</div>
						</div>
					</div>
					<!-- <div id="cloneInput">
						<div class="d-flex flex-wrap justify-content-between mt-3 model-inputs">
							<div class="col-md-2">
								<select id="inputState" class="form-control p-3 bg-light">
									<option selected>Year</option>
									<option>No</option>
								</select>
							</div>
							<div class="col-md-4">
								<select id="inputState" class="form-control p-3 bg-light">
									<option selected>Model</option>
									<option>No</option>
								</select>
							</div>
							<div class="col-md-4">
								<select id="inputState" class="form-control p-3 bg-light">
									<option selected>400 GT</option>
									<option>No</option>
								</select>
							</div>
							<div class="remove-btn">X</div>
						</div>
					</div> -->
				</div>
				<button on:click|preventDefault={updateIncentive} type="submit" class="btn btn-dark px-5"
					>Save & Continue</button
				>
			</div>
		</form>
		<!-- </div> -->
	</div>
</div>

<style>
	input,
	textarea,
	select {
		border: none;
		border-radius: 5px;
	}
</style>
