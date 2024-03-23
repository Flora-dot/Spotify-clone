import React from 'react';
import './CustomButton.css'

 const CustomButton =  ({className, children}) =>  {
    return(
        <button type="button" className={className}>{children}</button>
    );

}
export default CustomButton;
 