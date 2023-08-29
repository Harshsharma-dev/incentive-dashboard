<script>
	import { IncentiveDetails } from '../Store.js';
  
    let incentiveCount;
  //  incentiveCount =  IncentiveDetails;
   IncentiveDetails.subscribe((data) => {
		incentiveCount = data;
		console.log(data);
	});
   console.log(incentiveCount.length);
</script>
<div class="container-fluid mt-3">
<div class="d-flex justify-content-between">
    <div class="incentive-count">
       <span class="font-weight-bold">TOTAL INCENTIVES <strong class=" ">{incentiveCount.length}</strong></span> 
    </div>

    
<div class="dropdown">
  <button class="btn dropdown-toggle py-3 fw-bold" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
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
  strong{
    font-size:1.4rem ;
  }

  .dropdown > button{
        width: 22rem;
    border: 1px solid rgb(165, 165, 165);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(172 172 172 / 15%);
    border-radius: 5px;
}
</style>