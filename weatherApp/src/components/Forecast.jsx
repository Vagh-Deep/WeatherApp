 

const Forecast = ({title,data}) => {
    
  return (
    <div>
        <div className="flex items-center justify-start mt-6">
            <p className="font-medium uppercase">{title}</p>
        </div>
        <hr className="my-1" />
        <div className="flex items-center justify-between">
            {
                data.map((d,index)=>(
            <div key={index}
            className="flex flex-col items-center justify-center">
                <p className="font-light text-sm my-1">{d.title}</p>
                <img src={d.icon} alt="weather icon" />
                
                <p className="font-medium my-1">{`${d.temp.toFixed()}°`}</p>
            </div>
                ))
            }

        </div>
        </div>
  )
}

export default Forecast