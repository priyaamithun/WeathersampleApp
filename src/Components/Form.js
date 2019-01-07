import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather} class="md-form">
		<input type="text" name="city" placeholder="City..." class="form-control"/>
		<input type="text" name="country" placeholder="Country..." class="form-control"/>
		<button>Get Weather</button>
	</form>
);

export default Form;