import axios from 'axios';
import Global from 'Global';
import AuthStore from 'AuthStore';

export default class FormSource {

  save(values) {
  	const url = Global.backend_url + AuthStore.getUid() + "/tours/";
    return axios.post(url, values)
	    .then((response) => {
	      return response.data.id;
	    })
	    .catch((error) => {
	      throw error;
	    });
	}

}


