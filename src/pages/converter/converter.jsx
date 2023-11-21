import Container from "../../components/shared/container/Container";





const Converter = () =>{


    
      

    // let select = document.querySelectorAll('.currency'),
    // input_currency = document.querySelectorAll('input_currency'),
    // output_currency = document.querySelectorAll('output_currency');
    
    
    
    // const host = 'api.frankfurter.app';
    // fetch(`https://${host}/currencies`)
    //   .then(resp => resp.json())
    //   .then((data) => {
    //     const entries = Object.entries(data)
        // all most all contries 
        // console.log(entries)
        // alert(`10 GBP = ${data.rates.USD} USD`);
    //     for(i =0; i < entries.length; i++){
    //         select[0].innerHTML += `${entries[i][0]}">${entries[i][0]}`
    //         select[1].innerHTML += `${entries[i][0]}">${entries[i][0]}`
    
    //     }
    //   });
    
    
    
    
        // let input_currency_val = input_currency.value;
        // if(select[0].value != select[1].value){
        //     // alert("right")
        //     const host = 'api.frankfurter.app';
        //      fetch(`https://${host}/latest?amount=${input_currency_val}&from=${select[0].value}&to=${select[1].value}`)
        //     .then(val => val.json())
        //     .then((val) => {
        //         output_currency.value= Object.value(val.rates)[0]
            // alert(`10 GBP = ${data.rates.USD} USD`);
    //   });
    //     }else{
    //         alert("please select two different currency")
    //     }
    





        document.body.style.background = ""


    return(
    <Container>
<button className="router"><a href="/pages/exchange.html">Goto bitcoin Page</a></button>
    <div className="intro">
        <h1>😃 if you know say you no like this kind background color make you change the color below.</h1> 

        <button className="choose"  value="changeBackground" onClick="changeBackground()">change background</button>


    </div>
    




<div className="first">
    <div className="pikin">
        <marquee>
            <h1>Check out to compare currency value</h1>
        </marquee>
    </div>
</div>




    <div className="curr">
        <div className="son">
            <h1>currency converter</h1>
            <div className="exchange">
                <div className="flex">
                    <select className="currency" name="" id="">
                        <option value="select">select</option>
                    </select>
                    <input  id="input_currency" min="1" placeholder="Amount" type="number"></input>
                </div>
                


                <div className="flex">
                    <select className="currency" id="">
                        <option value="select">select</option>
                    </select>
                    <input id="output_currency" placeholder="result" type="text" disabled ></input>
                </div>
            </div>
            <div className="centra">
                <button className="button1" onClick="converter()" id="btn">convert</button>
            </div>
            
        </div>
    </div>
    </Container>
    )
}

export default Converter