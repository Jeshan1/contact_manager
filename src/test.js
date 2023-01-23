
const Test = () => {
    const a = 4;
    const b = 5;
  return (
    <>
        <div>
            {(()=>{
                return a*b;
            })()}
        </div>
    </>
  )
}
export default Test;
