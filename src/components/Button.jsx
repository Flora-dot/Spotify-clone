import React from 'react';

 const Button =  ({className, children}) =>  {
    return(
        <button type="button" className={className}>{children}</button>
    );
}
export default Button;
 