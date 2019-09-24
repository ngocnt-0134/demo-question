import React from 'react';
class Select extends React.Component {
    render() { 
        const {question, getChange}=this.props;
        return (
            <React.Fragment>
                <div className="form__group">
                    <select className="select-box" 
                    name={question.name}
                    id={`${question.id}`}
                    onChange={(currentTarget)=>getChange(currentTarget)}
                    >   
                        <option value="">-Select address-</option>
                         {question.content.map((item,index)=>
                             <option key={index} value={item.id}>{item.value}</option>
                         )}
                    </select>
                    <label htmlFor={`${question.id}`} className="form__label">{question.quiz}</label>
                </div>
            </React.Fragment>
          );
    }
}
 
export default Select;