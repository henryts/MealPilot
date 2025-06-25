import { RestCard } from "./RestCard";
import { resDataList } from "../utils/utilData";
import { useState ,useEffect} from "react";
import axios from "axios";
export const Body = () => {
  // ✅ useState inside component
  const [list, setList] = useState(resDataList);

//   useEffect(() => {
//   fetchData();
// }, []);

// const headers = {
//   'accept': '*/*',
//   'accept-language': 'en-US,en;q=0.9',
//   'content-type': 'application/json',
//   'origin': 'https://www.zomato.com',
//   'priority': 'u=1, i',
//   'referer': 'https://www.zomato.com/bangalore/delivery',
//   'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
//   'sec-ch-ua-mobile': '?0',
//   'sec-ch-ua-platform': '"Windows"',
//   'sec-fetch-dest': 'empty',
//   'sec-fetch-mode': 'cors',
//   'sec-fetch-site': 'same-origin',
//   'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
//   'x-zomato-csrft': '479ac1132fde57600f990f3828563ca8',
//   'cookie': 'PHPSESSID=9762fb52ed961baba3c2c9b0743475f8; csrf=479ac1132fde57600f990f3828563ca8; fbcity=4; fre=0; rd=1380000; zl=en; fbtrack=f1646cb5124f21e17832fb482c7db3eb; ltv=4; lty=4; locus=%7B%22addressId%22%3A0%2C%22lat%22%3A12.971606%2C%22lng%22%3A77.594376%2C%22cityId%22%3A4%2C%22ltv%22%3A4%2C%22lty%22%3A%22city%22%2C%22fetchFromGoogle%22%3Afalse%2C%22dszId%22%3A3655%2C%22fen%22%3A%22Table+Space+UB+City%2C+UB+City%2C+8%2C+9Vittal+Mallaya+Road%2C+KG+Halli%2C+D%27+Souza+Layout%2C+Ashok+Nagar%2C+Bengaluru%2C+Karnataka%22%7D; ...'
// };

// const data = {
//   context: 'delivery',
//   filters: "{\"searchMetadata\":{\"previousSearchParams\":\"{\\\"PreviousSearchId\\\":\\\"116377de-3249-4f31-9c57-0985cd41fc2c\\\",\\\"PreviousSearchFilter\\\":[\\\"{\\\\\\\"category_context\\\\\\\":\\\\\\\"delivery_home\\\\\\\"}\\\",\\\"\\\"]}\",\"postbackParams\":\"{\\\"processed_chain_ids\\\":[50471,50382,60551,20246497,50574,20551321,51418,20504338,18653095],\\\"shown_res_count\\\":9,\\\"search_id\\\":\\\"116377de-3249-4f31-9c57-0985cd41fc2c\\\"}\",\"totalResults\":1921,\"hasMore\":true,\"getInactive\":false},\"dineoutAdsMetaData\":{},\"appliedFilter\":[{\"filterType\":\"category_sheet\",\"filterValue\":\"delivery_home\",\"isHidden\":true,\"isApplied\":true,\"postKey\":\"{\\\"category_context\\\":\\\"delivery_home\\\"}\"}],\"urlParamsForAds\":{}}",
//   addressId: 0,
//   entityId: 4,
//   entityType: 'city',
//   locationType: 'poi',
//   isOrderLocation: 1,
//   cityId: 4,
//   latitude: '12.9716060000000000',
//   longitude: '77.5943760000000000',
//   userDefinedLatitude: 12.971606,
//   userDefinedLongitude: 77.594376,
//   entityName: "Table Space UB City, UB City, 8, 9Vittal Mallaya Road, KG Halli, D' Souza Layout, Ashok Nagar, Bengaluru, Karnataka",
//   orderLocationName: "Table Space UB City, UB City, 8, 9Vittal Mallaya Road, KG Halli, D' Souza Layout, Ashok Nagar, Bengaluru, Karnataka",
//   cityName: 'Bengaluru',
//   countryId: 1,
//   countryName: 'India',
//   displayTitle: 'Table Space UB City',
//   o2Serviceable: true,
//   placeId: '3655',
//   cellId: '4300399395616063488',
//   deliverySubzoneId: 3655,
//   placeType: 'DSZ',
//   placeName: "Table Space UB City, UB City, 8, 9Vittal Mallaya Road, KG Halli, D' Souza Layout, Ashok Nagar, Bengaluru, Karnataka",
//   isO2City: true,
//   fetchFromGoogle: false,
//   fetchedFromCookie: false,
//   isO2OnlyCity: false,
//   address_template: [],
//   otherRestaurantsUrl: ''
// };



//  const fetchData = async()=>{
//  fetch('https://www.zomato.com/webroutes/search/home', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'x-zomato-csrft': '479ac1132fde57600f990f3828563ca8',
//     'cookie': 'PHPSESSID=9762fb52ed961baba3c2c9b0743475f8; csrf=479ac1132fde57600f990f3828563ca8'
//   },
//   body: JSON.stringify({
//     context: 'delivery',
//     addressId: 0,
//     entityId: 4,
//     entityType: 'city',
//     cityId: 4,
//     latitude: '12.9716060000000000',
//     longitude: '77.5943760000000000',
//     userDefinedLatitude: 12.971606,
//     userDefinedLongitude: 77.594376,
//     placeId: '3655',
//     deliverySubzoneId: 3655,
//     filters: '{}'
//   })
// })
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.error(err));
   
// }



  const handleFilter = () => {
    const filteredList = resDataList.filter((data) => data.rating > 4.5);
    setList(filteredList);
  };

  return (
    <div className="body">
      <div className="search">Search</div>
      
      <button onClick={handleFilter}>Filter</button>

      <div className="res-container">
        {list.map((resDataList, index) => (
          <RestCard key={index} resObject={resDataList} />
        ))}
      </div>
    </div>
  );
};
