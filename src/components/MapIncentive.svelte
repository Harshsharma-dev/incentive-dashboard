<div class="container">
	<h2>Map Incentives</h2>
	<form>
		<div class="form-row">
			<div class="form-group col-md-6">
				<label for="incentive-title">Incentive Title</label>
				<input
					type="text"
					class="form-control"
					id="incentive-title"
					placeholder="Incentive Title"
				/>
			</div>
			<div class="form-group col-md-6">
				<label for="inputState">DR Title</label>
				<select id="inputState" class="form-control">
					<option selected>Military Discount</option>
					<option>...</option>
				</select>
			</div>
			<div class="form-group col-md-6">
				<label for="inputState">Type of Incentive</label>
				<select id="inputState" class="form-control">
					<option selected>sample</option>
					<option>...</option>
				</select>
			</div>
		</div>

		<div class="form-group col-md-6">
			<label for="discountPrice">Discount Price</label>
			<input type="number" class="form-control" id="discountPrice" placeholder="$" />
		</div>
		<div class="form-group col-md-4 row">
			<label for="inputDate">Validity/Expiry</label>
			<input class="form-control" type="date" name="inputDate" id="inputDate" />
			<label for="inputState">Deal Summary Deduction</label>
			<select id="inputState" class="form-control">
				<option selected>Yes</option>
				<option>No</option>
			</select>
		</div>
		<div class="mb-3">
			<label for="descriptionArea">Update Description</label>
			<textarea
				class="form-control"
				id="descriptionArea"
				placeholder="Add here"
				required
			/>

			<button type="submit" class="btn btn-primary">Sign in</button>
		</div>
	</form>
</div>
