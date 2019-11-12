import React from 'react';

const Userinf = props => {
    return(
        <div className="modal-dialog text-center">
            {
                props.error &&
                    <div className="col-sm-12">
                        <div className="modal-content">
                            <p></p>
                            <div className="alert alert-danger" role="alert">
                                Usuario y Password incorrecto.
                            </div>
                        </div>
                    </div>
            }
            <div></div>
        </div>
        
        
    )
}
    
    
export default Userinf;