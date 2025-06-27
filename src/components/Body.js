import { RestCard } from "./RestCard";
import { resDataList } from "../utils/utilData";
import { useState ,useEffect} from "react";
import axios from "axios";
export const Body = () => {
  // ✅ useState inside component
  const [list, setList] = useState(resDataList);

  const [listofRestraurants, setListofRestraurants] = useState([]);
 console.log("helooo");

 useEffect(()=>{fetchData()},[]);
 const fetchData = async () => {
  try {
       var proxyData = await  axios.post('http://localhost:3001/proxy-eatsure');
       console.log("proxyData==>",proxyData?.data?.data?.data);
       setListofRestraurants(proxyData?.data?.data?.data);
    
  } catch (error) {
    console.error(error);
  }
};

//fetchData();
  const handleFilter = () => {
    const filteredList = listofRestraurants.filter((data) => data.is_exclusive==1);
    setListofRestraurants(filteredList);
  };

  return (
    <div className="body">
      <div className="search">Search</div>
      
      <button onClick={handleFilter}>Filter</button>

      <div className="res-container">
        {listofRestraurants.map((resDataList, index) => (
          <RestCard key={index} resObject={resDataList} />
        ))}
      </div>
    </div>
  );


};
