import axios from 'axios';
import {MyselfResponse} from "./dto/MyselfDto";

export class UserApiService {

    constructor(){

    }

     getMyself() {
        const url = `http://localhost:8888/api/v1/user/myself`;
        return axios.get(url, {}).then(response => new MyselfResponse(response.data));
    }

}
