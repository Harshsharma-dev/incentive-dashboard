<script>
	import cardImg from '$lib/assets/cardImg.jpeg';
	import bmw from '$lib/assets/bmw.png';
	import { goto } from '$app/navigation';
	import { IncentiveDetails } from '../Store.js';

	export let incentiveImg;
	export let incentiveName;
	export let incentiveInfo;
	export let incentiveId;
	let contentToggle = false;
	console.log(contentToggle);

	
	function mapincentive(){
		goto('mapincentive/' + incentiveId)
	}
	// let incentiveInfo =[];
	// console.log('test');
	// IncentiveDetails.subscribe((data) => {
		// 	incentiveInfo = data;
		// 	console.log(data);
	// });

	
	console.log(incentiveId)
</script>

<div class="container p-3">
	<div class="card card-container p-4">
		<div class="container row no-gutters pt-4 px-4">
			<div class="border p-0 d-flex">
				<div class="col-md-8">
					<img src={incentiveImg} class="card-img mr-3" alt="Product-Image" />
				</div>
				<div class="col-md-4 card-title-container">
					<div class="card-title-right px-3">
						<div class="d-flex title-top align-items-center">
							<img src={bmw} alt="" class="logo-img" />
							<h5 class="card-title text-wrap">{incentiveName}</h5>
						</div>
						<p class="card-text text-wrap fw-bold px-3">{incentiveInfo}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="container content-description mt-4 px-4">
			<h5 class="text-truncate">{incentiveInfo}</h5>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, necessitatibus nisi. Enim
				ipsum accusantium molestias nulla fugiat, porro in nemo voluptas quibusdam, dicta sunt
				voluptatum tempora veritatis quasi facere vitae suscipit accusamus praesentium
			</p>
			<hr />
		</div>
		<div class="container mt-3 px-4">
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
				<button id={incentiveId} on:click={mapincentive} class="btn map-incentive-btn p-2">Map This Incentive</button>
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
</style>
