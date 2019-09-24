import React from 'react';
class Radio extends React.Component {
    render() { 
        const {question, getChange}=this.props;
        return (
            <React.Fragment>
                <div className="form__group mt-sub-sm">
                <label  className="form__label form__label--radio">{question.quiz}</label>

                { question.content.map((item, key)=>{
                    return (
                        <div className="form__radio" key={key}>
                            <input type="radio" className="form__input" 
                            id={item.id} name={question.name}  
                            onChange={(currentTarget)=>getChange(currentTarget)}/>
                            <label  htmlFor={item.id}  className="form-radio__label">
                            <span className="span-radio__btn"> </span>
                            {item.value}
                            </label>
                        </div>

                    );
                })}
                    
                    
                </div>
            </React.Fragment>
          );
    }
}
 
export default Radio;