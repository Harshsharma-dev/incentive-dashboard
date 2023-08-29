<script>
	// import Icon from '@iconify/svelte';
	// import { RiSystemAlertLine } from 'solid-icons/ri'
	let unmappedCount = 60;
	let mappedCount = 59;
	let rejectedCount = 30;
	let newCount = 59;
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
		let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		let day = days[d.getDay()];
		let date = d.getDate();
		let month = months[d.getMonth()];
		let year = d.getFullYear();

		return `${month} ${date},  ${year}`;
	}
	
</script>

<div class="container-fluid mt-3">
	<div class="row top-row-card-container">
		<div class="col-sm-3">
			<div class="card shadow bg-white rounded">
				<div class="card-body">
					<div class="d-flex justify-content-between">
						<span class="icon"> icon </span>
						<div class="update-date">
							<span class="date-text">Last Updated</span>
							<span class="fw-bold date-span">{dateBuilder()}</span>
						</div>
						<span class="icon"> icon </span>
					</div>
					<div class="row">
						<h3 class="fw-bold">{unmappedCount}</h3>
					</div>
					<div class="row">
						<p class="fw-bold">UNMAPPED INCENTIVES</p>
					</div>
				</div>
			</div>
		</div>
		<div class="col-sm-3">
			<div class="card shadow bg-white rounded">
				<div class="card-body">
					<div class="d-flex justify-content-between">
						<span class="icon"> icon </span>
						<div class="update-date">
							<span class="date-text">Last Updated</span>
							<span class="fw-bold date-span">{dateBuilder()}</span>
						</div>
						<span class="icon"> icon </span>
					</div>
					<div class="row">
						<h3 class="fw-bold">{mappedCount}</h3>
					</div>
					<div class="row">
						<p class="fw-bold">MAPPED INCENTIVES</p>
					</div>
				</div>
			</div>
		</div>
		<div class="col-sm-3">
			<div class="card shadow bg-white rounded">
				<div class="card-body">
					<div class="d-flex justify-content-between">
						<span class="icon"> icon </span>
						<div class="update-date">
							<span class="date-text">Last Updated</span>
							<span class="fw-bold date-span">{dateBuilder()}</span>
						</div>
						<span class="icon"> icon </span>
					</div>
					<div class="row">
						<h3 class="fw-bold">{rejectedCount}</h3>
					</div>
					<div class="row">
						<p class="fw-bold">Rejected INCENTIVES</p>
					</div>
				</div>
			</div>
		</div>
		<div class="col-sm-3">
			<div class="card shadow bg-white rounded">
				<div class="card-body">
					<div class="d-flex justify-content-between">
						<span class="icon"> icon </span>
						<div class="update-date">
							<span class="date-text">Last Updated</span>
							<span class="fw-bold date-span">{dateBuilder()}</span>
						</div>
						<span class="icon"> icon </span>
					</div>
					<div class="row">
						<h3 class="fw-bold">{newCount}</h3>
					</div>
					<div class="row">
						<p class="fw-bold">NEW INCENTIVES</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<hr />

<style>
	.top-row-card-container {
		justify-content: center;
	}

	.date-text {
		font-size: 0.8rem;
	}

	.update-date {
		display: flex;
		justify-content: flex-end;
		flex-direction: column;
		text-align: end;
	}

	.date-span {
		font-size: 0.9rem;
	}
</style>
