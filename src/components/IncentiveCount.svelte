<script>
	import { IncentiveDetails } from '../Store.js';

	// let incentiveCount;
	//  incentiveCount =  IncentiveDetails;
	// IncentiveDetails.subscribe((data) => {
	// 	incentiveCount = data;
	// 	console.log(data);
	// });
	// console.log(incentiveCount.length);
</script>

<div class="container-fluid mt-3">
	<div class="d-flex justify-content-between mx-5">
		<div class="incentive-count">
			<span class="font-weight-bold"
				>TOTAL INCENTIVES <strong class=" ">{$IncentiveDetails.length}</strong></span
			>
		</div>

		<div class="dropdown">
			<button
				class="btn dropdown-toggle py-3 fw-bold"
				type="button"
				id="dropdownMenuButton"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				BMW
			</button>
			<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
				<li><a class="dropdown-item" href="/">BMW</a></li>
				<li><a class="dropdown-item" href="/">Audi</a></li>
				<li><a class="dropdown-item" href="/">ferrai</a></li>
			</ul>
		</div>
	</div>
</div>

<style>
	strong {
		font-size: 1.4rem;
	}

	.dropdown > button {
		width: 100%;
		border: 1px solid #f5f5f5;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #f5f5f5;
		border-radius: 2px;
		border: 1px solid #b2b2b2;
	}

	.dropdown {
		width: 30rem;
	}
</style>
