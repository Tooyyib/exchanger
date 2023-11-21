



const Footer = () =>{
    const today = new  Date()
    const  a = today.getDay()
    const  b = today.getMonth()
    const  c = today.getFullYear()

    return(
<>

<h4>this is my footer</h4>
<footer>
    <h5>proudly  us {`${a} - ${b} - ${c}`}</h5>
</footer>
</>
    )
}
export default Footer