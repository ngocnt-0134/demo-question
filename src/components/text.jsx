import React from 'react';


class Text extends React.Component {
    render() { 
        const {question,getChange}=this.props;
        
        return (
            <React.Fragment>
                    <div className="form__group">
                        <input type="text" className="form__input" 
                        name={question.name} 
                        id={question.id}
                        required
                        placeholder={question.placeholder}
                        onChange={(currentTarget)=>getChange(currentTarget)}
                        />
                        <label htmlFor={question.id} className="form__label">{question.quiz}</label>
                        <div className="alert alert--red">
                               error
                        </div>
                    </div>
            </React.Fragment>
          );
    }
}
 


export default Text;