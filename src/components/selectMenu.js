import React from 'react'

export default (props) => {

	const options = props.lista.map( (option, index) => {
		return (
			<option value={option.value}>{option.label}</option>
		)
	})

	return (
		<select {...props}>
			{options}
		</select>
	)
}