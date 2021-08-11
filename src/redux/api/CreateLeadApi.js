import Constants from '../../common/Constants'
import axios from 'axios';
const checkPhone = (token, phone, afterFetch, errorFetch) => {
    const url = `${Constants.GHN.URL}nhs/api/v1/lead/check-phone?phone=${phone}`
    const config = {
      headers: {
        'Authorization-Sso': token,
      }
    };
  axios
    .get(url, config)
    .then((response) => {
      const jsonResponse = response.data;
      
      if (jsonResponse.status === 'OK') {
        afterFetch(jsonResponse.data[0]);
      } else {
        
        errorFetch(jsonResponse.message);
      }
    })
    .catch((error) => {
        let data = error?.response?.data?.message??'Số điện thoại không đúng';
      errorFetch(data.toString());
    });
}

const getEmployee = (token, employeeId, afterFetch, errorFetch) => {
  const url = `${Constants.GHN.URL}nhs/api/v1/employee?employee_id=${employeeId}`
  const config = {
    headers: {
      'Authorization-Sso': token,
    }
  };
axios
  .get(url, config)
  .then((response) => {
    const jsonResponse = response.data;
    
    if (jsonResponse.status === 'OK') {
      afterFetch(jsonResponse.data[0]);
    } else {
      
      errorFetch(jsonResponse.message);
    }
  })
  .catch((error) => {
    errorFetch(error);
  });
}

export default {
  checkPhone,
  getEmployee
};