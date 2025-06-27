 

 
 
 export const  RestCard= (props) => {
    const { resObject } = props;
const resData = resObject;


    console.log("props===>",resObject );
    
  return (
    <div className="res-card">
      <img
        className="res-img"
        src={resData.background_url}
        alt="Thalassery Food"
      />
      <div className="res-info">
        <h3 className="res-name">{resData.brand_name}</h3>
        {/* <div className="res-rating">⭐{resData.rating}</div> */}
        <div className="res-cuisines">{resData.description}</div>
        {/* <div className="res-location">{resData.location}</div> */}
      </div>
    </div>
  );
};