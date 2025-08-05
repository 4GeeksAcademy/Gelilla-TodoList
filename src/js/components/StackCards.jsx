

const StackCards=(data)=>{




    return (
        
          <div className="card-stack">
      {Array.from({length:stackLayers}).map((_,index)=>(
        <div key={index} className="card" 
        styles={{top:`${(stackLayers-index)*2}px`,"zindex":index}}>

        </div>
      ))}
      <div className="card main-card">{data.text}</div>
      </div>
        
    )
}

export default StackCards;