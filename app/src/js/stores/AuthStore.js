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
    id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlMDhiMGI1YmYwODMyMTY0Y2Y3ZTNhMGRmMDAyMDE0YzZmNjU3MzAifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhdF9oYXNoIjoiZmJfT3RncDRrUC0tYjJqdmF0VnZOZyIsImF1ZCI6IjM5NzgyMTI1NDE4OS1taHR2azZnbDZrbW1xZWV2bmhzazJuMXMyazd2N24zdC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExNTYzMjM4NDA5MjY5OTg3ODAxMyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiIzOTc4MjEyNTQxODktbWh0dms2Z2w2a21tcWVldm5oc2sybjFzMms3djduM3QuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJlbWFpbCI6Im5hcmF5bjYwQGdtYWlsLmNvbSIsImlhdCI6MTQ1ODU4MDEzMCwiZXhwIjoxNDU4NTgzNzMwfQ.Gcjk7bjahG87D20l6TrJbGRepqwM91P2ZHtQeKd03wXX0YrvjlnbH2GmVlTCVXeWjEWBS-biD-d2u1XZTr2BNKbd2C6B7QwYvYtKe4ZDVJp-MHxuQWgl_uY4oVtfxYxgmZERtvSWfXHG258DCoFCMQEXNomsIiM2j4PoQCQszCwPyYwU7-dpHmjsTkhB2UdxLYfdE6oQ6EXLh3fZ-QqMCzqyCYzfhBNAGBoFX8Ot1o-g_8lLLBrKFeCoIaYHLyZqDQewxsQODZ-lkp2ITUvf-XstEWARiE4THuJxS1k2ckXu8vPByt_CPtRC48uhQdPmUPIx2yE7km3Wy5MB7a0KPA',
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
