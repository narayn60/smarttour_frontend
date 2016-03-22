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
      id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImMxYTk5OWU2OTYyZGFmZjgxYzg1NWQ3MTRkYzEyYTdkOTMzYjI5MWQifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhdF9oYXNoIjoiTHJiX3ZPaXlKY0stSXA5Z214dF9SUSIsImF1ZCI6IjM5NzgyMTI1NDE4OS1taHR2azZnbDZrbW1xZWV2bmhzazJuMXMyazd2N24zdC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExNTYzMjM4NDA5MjY5OTg3ODAxMyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiIzOTc4MjEyNTQxODktbWh0dms2Z2w2a21tcWVldm5oc2sybjFzMms3djduM3QuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJlbWFpbCI6Im5hcmF5bjYwQGdtYWlsLmNvbSIsImlhdCI6MTQ1ODY4MjIwNiwiZXhwIjoxNDU4Njg1ODA2LCJuYW1lIjoiQW5kcmV3IFN0dWFydCIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vLWtacTd6NTRLWDcwL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUZrL09FeUFkWi1lMTRFL3M5Ni1jL3Bob3RvLmpwZyIsImdpdmVuX25hbWUiOiJBbmRyZXciLCJmYW1pbHlfbmFtZSI6IlN0dWFydCIsImxvY2FsZSI6ImVuLUdCIn0.TiL6O4FrMsoTz6dJn4g32NepyDkq2kTTRcKNM2IPJmxylhnNJ6K0Z9gXO2JdxVs_T1jMznF6cK_cNNLAOy-ujTnAJ_hOyJ8QjJDvWHSwLlqGgbfZRI2mvYPok6KTiHlFikAdf1POQ_4odh_kzD7-cIOCTm5SP5XfyC7fLQns0RS2L6JyNDMEOAl33DDW8dlXhlnHNeam1E7Towhmx9S0LDSUcRjf-x98D5wIsj8CXyisv6zS6Xmkix5BwX1MK-N8mkdKCQuls5xtJroJPgEnrWloU2pFI7qlSu-HWkAJ3u0u7sWPrWUeYl9smHiik0VBFtOHYEeOMzxyC_bXzJr3CQ',
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
