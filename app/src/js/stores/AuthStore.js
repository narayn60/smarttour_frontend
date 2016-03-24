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
      id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjBhZjE1MjA0Njk4OTM2MGYxZGNjN2JmOGY4MzI4MDE2YWIzOTU1NTUifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhdF9oYXNoIjoiMkZ4SUwxS0p0RFJnR0czRmpfZ240dyIsImF1ZCI6IjM5NzgyMTI1NDE4OS1taHR2azZnbDZrbW1xZWV2bmhzazJuMXMyazd2N24zdC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExNTYzMjM4NDA5MjY5OTg3ODAxMyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiIzOTc4MjEyNTQxODktbWh0dms2Z2w2a21tcWVldm5oc2sybjFzMms3djduM3QuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJlbWFpbCI6Im5hcmF5bjYwQGdtYWlsLmNvbSIsImlhdCI6MTQ1ODgxNzU1NiwiZXhwIjoxNDU4ODIxMTU2LCJuYW1lIjoiQW5kcmV3IFN0dWFydCIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vLWtacTd6NTRLWDcwL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUZrL09FeUFkWi1lMTRFL3M5Ni1jL3Bob3RvLmpwZyIsImdpdmVuX25hbWUiOiJBbmRyZXciLCJmYW1pbHlfbmFtZSI6IlN0dWFydCIsImxvY2FsZSI6ImVuLUdCIn0.GsV9Ci8vruANGcv6VPeFr1tdfqpL57R68XqpdIXeRZ9hEa5v9IyIUEXR8Pwh6Tkc6UAxljp7VrUOGaB3rMgS6oEnMImJ_U7ZcPJ8QXcq7ihRP-NxodXrJ2vo_JJPRze5Gfsll8yAW-Fyzee45T9Yh-Y1Pm9q4GEdSLhYC-ie7hHuZI9q6FUBHqVHZYbzsehl8v1COQMdRoTNbJ5yRlPfyIoB_zrV-eB7yxwwR6cyqU2QZyBIItoBkZ_9az6qkYVioF_Qir9bcNmzRqwSqsA9wDc6HZN1EOSMYVf0XjWtxKseVy0zAl_duhDjzYdGIhbuQ3bCEQWUZch8PdA0IgEjzQ',
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
