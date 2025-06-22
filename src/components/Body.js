import { RestCard} from "./RestCard";
import { resDataList } from "../utils/utilData";


export const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resDataList.map((resData, index) => (
          <RestCard key={index} resObject={resData} />
        ))}
      </div>
    </div>
  );
};