function Food() {
   
    const food1="MOMO";
    const food2="BuRgEr";
   
    return(
            <ul>
                <li>Apple</li>
                <li>{food1.toLowerCase()}</li>
                <li>{food2.toUpperCase()}</li>
            </ul>

     );
}

export default Food