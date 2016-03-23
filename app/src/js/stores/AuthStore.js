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
    id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjZkNjQzY2Y5MGI1NTgyOTg0YjRlZTY3MjI4NGMzMzI0ZTg2OThiNjUifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhdF9oYXNoIjoiUUFINVpzY3BhUzd5Y0JyWDJDWTl0QSIsImF1ZCI6IjM5NzgyMTI1NDE4OS1taHR2azZnbDZrbW1xZWV2bmhzazJuMXMyazd2N24zdC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExNTYzMjM4NDA5MjY5OTg3ODAxMyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiIzOTc4MjEyNTQxODktbWh0dms2Z2w2a21tcWVldm5oc2sybjFzMms3djduM3QuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJlbWFpbCI6Im5hcmF5bjYwQGdtYWlsLmNvbSIsImlhdCI6MTQ1ODEyNjExMSwiZXhwIjoxNDU4MTI5NzExfQ.g7AM4HL6_3H3Lw7A9k8dbu0NqZhyWaGlC-38PIBV40HtuiOMuEDVhoiVk-IdLIErV57ezwu1wUZIjFxn-MvcL1QmMKFXllI5gyyytVrvmsB44H7DUCa4zqihdwggt2c8RR2Mro-ieAN5dILZBQ5t7sAJxX4M4AdH5Qthk0IGSkjSRi2ykf30SxvMtqivpg2bZNj51jOJrTxCZHYRea94_mKJIp1BKaqpbPE0tyf3JLCz9pOziMGX19KZ3gbu54YJJ0ibAJsblihfkhVuKSQEfnDJBerj_WQux5OSbgkr4UE6KIfojwYeFBQYTFJbuovpGwyFvtZKmw4974usQbt3Vw',
      token: 1,
      name: 'Andrew Stuart',
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
    console.log(info);
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
