
import proptype from 'prop-types';

function Student(props) { 
return(
    <div className="student">
        <p>
            Name: {props.name} <br />
            Age : {props.age}</p>
            <p>Student : {props.isStudent ? "Yes" : "No"}</p>   
           

    </div>
    
);

}
Student.proptype ={
name: proptype.string,
age: proptype.number,
isStudent: proptype.bool,
}


export default Student