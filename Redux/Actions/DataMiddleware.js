import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from '../Actions/ActionFun';
import jsonData from '../../Data/Weather.json'; // Your local JSON file
export const fetchData = () => {
    return async (dispatch) => {
        dispatch(fetchDataRequest());
        try {
            const response = await fetch('../../Data/Weather.json');
            const DataWeathr = await response.json();
            console.warn(DataWeathr);
            dispatch(fetchDataSuccess(DataWeathr))
        } catch (error) {
            dispatch(fetchDataFailure(error.message));
        }
    };
};


{/*const { searchQuery } = getState().data;
            let filteredData = jsonData;
            if (searchQuery) {
                filteredData = jsonData.filter(item => item.Govrn_Code.toLowerCase().includes(searchQuery.toLowerCase()));
            }
            dispatch(fetchDataSuccess(filteredData)); */}