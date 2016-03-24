import alt from 'alt_base';
import AuthActions from 'AuthActions';

class AuthStore {
  constructor() {
    this.bindActions(AuthActions);

    /* this.user= {
       id: null,
       id_token: null,
       token: null,
       name: null,
       logo: null,
       provider: null,
       email: null
       };
     */
    this.user= {
      id: 1,
      id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjBhZjE1MjA0Njk4OTM2MGYxZGNjN2JmOGY4MzI4MDE2YWIzOTU1NTUifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhdF9oYXNoIjoiNjFVRlpBSVRNUlRPZXhEYTY3TVZhUSIsImF1ZCI6IjM5NzgyMTI1NDE4OS1taHR2azZnbDZrbW1xZWV2bmhzazJuMXMyazd2N24zdC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExNTYzMjM4NDA5MjY5OTg3ODAxMyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiIzOTc4MjEyNTQxODktbWh0dms2Z2w2a21tcWVldm5oc2sybjFzMms3djduM3QuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJlbWFpbCI6Im5hcmF5bjYwQGdtYWlsLmNvbSIsImlhdCI6MTQ1ODgzMDEwOCwiZXhwIjoxNDU4ODMzNzA4LCJuYW1lIjoiQW5kcmV3IFN0dWFydCIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vLWtacTd6NTRLWDcwL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUZrL09FeUFkWi1lMTRFL3M5Ni1jL3Bob3RvLmpwZyIsImdpdmVuX25hbWUiOiJBbmRyZXciLCJmYW1pbHlfbmFtZSI6IlN0dWFydCIsImxvY2FsZSI6ImVuLUdCIn0.LCE8OMQg9CvGN9W06IiVL4B-EipHve1y0cgq224uCgMwNE0MUvVCF9JfjPgJ5v48M1GxH1OsUQBFz1sS4uvBd1Dji_ovLe6sck9n3H0p8iK3XKG_-IuJYrDHya_hesJB0rXiy9-yuOwRPdZbMr8xnHNW0bogUBljPCCdSPuAUUsGBj8UemRVK7oEeG6kIBcZrSMsWtvDHZiFdyT0ye4ASJ8dMqRPszv1cKmecMtIwUWpoldeiES-ZgV0s2cYzwJWT6-BJ1c4zOWner3n37mW1QPj5wvPEQzaA7bbr8NTLbUCmO0jKYWxXSSGuvJSJeeGp-sFZrEriQd_mjA8zyS_RA',
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
