import { useState } from "react";

const ContactAdder = (props) => {
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [location,setLocation] = useState("");
    const onSubmitHandeler = (e) =>{
        e.preventDefault();
        const contactData = {id:Math.random(),name,phone,location};
        if(name.length<1 || phone.length<1 || location.length<1){
            alert("Please fill the all fields!");
        }
        else{
            props.onContactAdder(contactData);
            setName("");
            setPhone("");
            setLocation("");
        }
        
    };

    
    return(
        <>
            <div className="bg-slate-300 p-4 m-2 rounded-xl font-['Poppins']">
                <span className="text-xl font-bold mx-4 text-blue-600">Contact Adder: </span> 
                <form onSubmit={onSubmitHandeler}>
                <div className="my-2">
                    <input type="text" value={name} placeholder="Type Your name" onChange={(e)=>setName(e.target.value)} className="mx-4 px-4 py-2 rounded-lg"></input>
                    <input type="text" value={phone} placeholder="Type Your Phone number" className="mx-4 px-4 py-2 rounded-lg" onChange={(e)=>setPhone(e.target.value)}></input>
                    <input type="text" value={location} placeholder="Type Your Location" className="mx-4 px-4 py-2 rounded-lg" onChange={(e)=>setLocation(e.target.value)}></input>
                </div>
                <button className="bg-blue-600 text-white hover:bg-blue-800 px-4 py-2 text-xl font-bold rounded-xl block mx-4">
                    Add Contact
                </button>
                </form>
                {/* <p>I am {name}.{name==="Dave"?"I live in Chitwan":""}</p> */}
            </div>
        </>
    )
}
export default ContactAdder;