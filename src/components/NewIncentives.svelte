<script>
	export let newIncentives;

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
</script>

<div class="col-sm-3 card-container-style">
	<div class="card bg-white rounded card-style">
		<button class="text-start fw-600">
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
					<h3 class="fw-700">0</h3>
				</div>
				<div class="row">
					<p>NEW INCENTIVES</p>
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
		box-shadow: 3px 3px 10px 0px #0000001a;
		padding: 1.675rem;
	}
</style>
