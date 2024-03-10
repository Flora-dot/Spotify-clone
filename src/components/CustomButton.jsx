import React from 'react';

 const CustomButton =  ({className, children}) =>  {
    return(
        <button type="button" className={className}>{children}</button>
    );

// const Button =  (props) =>  {
//     const className = {
//         primary: 'btn',
//         outline: 'btn-outline',
//         secondary: 'btn-secondary'
//     }
//     return(
//         <button type="button" className={className}>{children}</button>
//     );
}
export default CustomButton;
 