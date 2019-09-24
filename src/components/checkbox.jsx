import React from 'react';

class Checkbox extends React.Component {
	render() {
		const { question, getChange } = this.props;
		return (
			<React.Fragment>
				<div className="form__group mt-sub-sm">
					<label className="form__label form__label-checkbox ">{question.quiz}</label>
					{
						question.content.map((item) => {
							return (
								<div className="form__checkbox" key={item.id}>

									<input type="checkbox" 
									className="form__checkbox--input"
									id={item.value}
									value={item.value}
									name={question.name} 
									onChange={(currentTarget)=>getChange(currentTarget)}
									/>
									
									<label htmlFor={item.value} className="form__checkbox--label">
										<span className="form__checkbox--btn"> </span>
											{item.value}
									</label>
								</div>
							);
						})
					}
				
				</div>

			</React.Fragment>
		);
	}
}



export default Checkbox;