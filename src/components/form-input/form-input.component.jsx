// import "./form-input.styles.jsx"

// const FormInputComponent = ({label, ...left})=>{
//     return(
//         <div className="input-grp">
//             <input className="form-input" {...left}/>
//             {label&&(
//                <label className={`${left.value.length>0?'shrink':''} form-input-label`}>{label}</label>  
//             )}
//         </div>
//     )
// }

// export default FormInputComponent;

import { FormInputLabel, Input, Group } from './form-input.styles';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;