import React from 'react'; 
import { connect } from 'react-redux';
import './Head.css';
 

function Headercomponent() {

    
  return (
    <div className="container-fluid">  

		<nav class="navbar navbar-expand-lg navbartext">
			<a class="navbar-brand" href="#">
				<img className='' width="60" height="40" alt='icon' src="logo.png"/>
			</a>			
			<a class="navbar-brand" href="#"><b>কেনা-বেচা ডট কম</b></a>			
			<a class="navbar-brand" href="#">সকল বিজ্ঞাপন</a>			
			 
			<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
			<div class="navbar-nav">			
		 
			</div>
			</div>
				<a class="navbar-brand" href="#">আপনার বিজ্ঞাপন দিন</a>
				<a class="navbar-brand" href="#">আমার অ্যাকাউন্ট</a>
		</nav>


</div>
  );
}


export default Headercomponent;
