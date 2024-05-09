import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from '../Actions/ActionFun';
import jsonData from '../../Data/Weather.json'; // Your local JSON file
export const fetchData = () => {
    try {
        return async (dispatch, getState) => {
            dispatch(fetchDataRequest());
            const { searchQuery } = getState().data;
            let filteredData = jsonData;
            if (searchQuery) {
                filteredData = jsonData.filter(item => item.Govrn_Code.toLowerCase().includes(searchQuery.toLowerCase()));
            }
            dispatch(fetchDataSuccess(filteredData));
        }
    } catch (error) {
        dispatch(fetchDataFailure(error.message));
    }

};


{/*const { searchQuery } = getState().data;
            let filteredData = jsonData;
            if (searchQuery) {
                filteredData = jsonData.filter(item => item.Govrn_Code.toLowerCase().includes(searchQuery.toLowerCase()));
            }
            dispatch(fetchDataSuccess(filteredData)); */}