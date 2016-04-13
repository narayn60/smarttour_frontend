import alt from 'alt_base';
import AuthActions from 'AuthActions';

class AuthStore {
  constructor() {
    this.bindActions(AuthActions);

    // this.user= {
    //   id: null,
    //   id_token: null,
    //   token: null,
    //   name: null,
    //   logo: null,
    //   provider: null,
    //   email: null
    // };

    this.user= {
      id: 1,
      id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjczZTVlMjM1NzNkYjMxZGIzOGRjZTA3OTg3N2I1NmVmZmVmYjNmNDIifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhdF9oYXNoIjoibnVoNnVlRXU1NzNrU2pSMzN1R0tBQSIsImF1ZCI6IjM5NzgyMTI1NDE4OS1taHR2azZnbDZrbW1xZWV2bmhzazJuMXMyazd2N24zdC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExNTYzMjM4NDA5MjY5OTg3ODAxMyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiIzOTc4MjEyNTQxODktbWh0dms2Z2w2a21tcWVldm5oc2sybjFzMms3djduM3QuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJlbWFpbCI6Im5hcmF5bjYwQGdtYWlsLmNvbSIsImlhdCI6MTQ2MDU2NjMwNSwiZXhwIjoxNDYwNTY5OTA1LCJuYW1lIjoiQW5kcmV3IFN0dWFydCIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vLWtacTd6NTRLWDcwL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUZrL09FeUFkWi1lMTRFL3M5Ni1jL3Bob3RvLmpwZyIsImdpdmVuX25hbWUiOiJBbmRyZXciLCJmYW1pbHlfbmFtZSI6IlN0dWFydCIsImxvY2FsZSI6ImVuLUdCIn0.SbaPZY4OVWaemn7m4SgmFH43nX86-7lJsUwB7aCfc4fdLuva-IALa-9tu5SzZPshpCopBdYeQHPvAotu112Y5lI2qaqjDWNs04BSWUTAOAupwX9z1jvz8XifuM-Lx_ekQNcWnp10ndSrO7QHJPkuN-wpc-uhq_sQNVIzzKWmwEizcPaEcge1uuMxZkOWdjDIWbzxa16eWkU1dyGLP3KO-pleZTKH2cib7ub8dA3WU8LedbVfQBpCPxsSGRVg3XuiMaN1R2_s4w922SWnfOm9e8X6XwFGVHdms68r9NvTnjNfLB_JVkWDsKt76vVhRBvld8lFc6qkcv0euaflgMNpsQ',
      token: 1,
      name: 'Test',
      logo: null,
      provider: 'google',
      email: 'narayn60@gmail.com'
    };

    this.exportPublicMethods({
      isLoggedIn: this.isLoggedIn,
      getUser: this.getUser,
      getUid: this.getUid,
      getName: this.getName,
      getEmail: this.getEmail
    });
  }

  onLogin(info) {
    // console.log(info);
    this.user = info;
  }

  onLogout() {
    this.user.id = null;
  }

  // static
  isLoggedIn() {
    const uid = this.getState().user.id;
    return (uid !== null);
  }

  getUser() {
    return this.getState().user;
  }

  getUid() {
    const st = this.getState().user;
    return st.id_token;
  }

  getName() {
    const st = this.getState().user;
    return st.name;
  }

  getEmail() {
    const st = this.getState().user;
    return st.email;
  }
}

export default alt.createStore(AuthStore, 'AuthStore');
