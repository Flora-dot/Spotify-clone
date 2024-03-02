import React from 'react';

 function Button ({className, children})  {
    return(
        <button type="button" className={className}>{children}</button>
    );
}
export default Button;
