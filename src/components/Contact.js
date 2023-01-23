const Contact = (props) =>{
    return(
        <>
            <div className="">
                <p>{props.data.name}</p>
                <p>{props.data.phone}</p>
                <p>{props.data.location}</p>
            </div>

        </>
    )
}
export default Contact;