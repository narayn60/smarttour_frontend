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
      id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlMDhiMGI1YmYwODMyMTY0Y2Y3ZTNhMGRmMDAyMDE0YzZmNjU3MzAifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhdF9oYXNoIjoickN1dHdWZHQxSDhqQ3IyWDdXaHU3QSIsImF1ZCI6IjM5NzgyMTI1NDE4OS1taHR2azZnbDZrbW1xZWV2bmhzazJuMXMyazd2N24zdC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExNTYzMjM4NDA5MjY5OTg3ODAxMyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiIzOTc4MjEyNTQxODktbWh0dms2Z2w2a21tcWVldm5oc2sybjFzMms3djduM3QuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJlbWFpbCI6Im5hcmF5bjYwQGdtYWlsLmNvbSIsImlhdCI6MTQ1ODU4Mzg1MiwiZXhwIjoxNDU4NTg3NDUyfQ.CW9l74haDBm_PuLqool2UkOAxiA22BYDIA4aAMv3IvvF3Egx5V8Rj0Jt0Fbeqy8pnSS2RmDEKFcPT7sPiW2TF05vtyA140PdAObjT1NtnnRE7voUnS929NHeS2F4N1FF3TqlbA734mtiwVpDVgWPKTPoM4hGOHDffLK171n1TfO2URI0KN43noMBeKsS81Ic9tCjH_U4x8zFRi7Qp4ss8FFMU58bx8k3auzIbRFfEmsysV43dyOLO64HtL_PB6gMRuRcxGWD2wqfeoD7K7txYKMa9tvfp_khMXOFKdyPpuYJfFuyUpjOze9PiF2DsKJ2ZASXMk8hvoiFhoqKFHqo1Q',
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
