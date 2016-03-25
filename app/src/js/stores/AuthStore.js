import alt from 'alt_base';
import AuthActions from 'AuthActions';

class AuthStore {
  constructor() {
    this.bindActions(AuthActions);

    // this.user= {
    //    id: null,
    //    id_token: null,
    //    token: null,
    //    name: null,
    //    logo: null,
    //    provider: null,
    //    email: null
    //    };


    this.user= {
      id: 1,
    id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImM4ZjM3ZDcwMzcxNTg3ZDJhYWFlM2JiZmY2MjRjYzg2NWVmMTA1NzUifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhdF9oYXNoIjoiaWRIQU55UUFCdTRvcUY4T0YybHZkQSIsImF1ZCI6IjM5NzgyMTI1NDE4OS1taHR2azZnbDZrbW1xZWV2bmhzazJuMXMyazd2N24zdC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExNTYzMjM4NDA5MjY5OTg3ODAxMyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiIzOTc4MjEyNTQxODktbWh0dms2Z2w2a21tcWVldm5oc2sybjFzMms3djduM3QuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJlbWFpbCI6Im5hcmF5bjYwQGdtYWlsLmNvbSIsImlhdCI6MTQ1ODkyNDAyNSwiZXhwIjoxNDU4OTI3NjI1LCJuYW1lIjoiQW5kcmV3IFN0dWFydCIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vLWtacTd6NTRLWDcwL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUZrL09FeUFkWi1lMTRFL3M5Ni1jL3Bob3RvLmpwZyIsImdpdmVuX25hbWUiOiJBbmRyZXciLCJmYW1pbHlfbmFtZSI6IlN0dWFydCIsImxvY2FsZSI6ImVuLUdCIn0.OeIURttgzvxZyMbRK6yEdCS6uXOOAesr7JTvUltwqvhxtCIA48MFwNBHhlkkDOkKhyoAZ8wLHrLKhO-hvQhj70hLLhJO9MYwTktEfWnhVtSb4nol2IBywEr8KM16DtoJSrHbtp7gJ5P39Is92X2NBbFCfcThVoqfCHZpRYiMvj8NDsM2MXrV1BsUHX7Em2nPs2HpuK1-bMV9DrJFOVbfNwNRKZMrdgGaaFfflxMpr5Yv-vUFm19uTQSJzBXolx0EXvm5BPFfs1j6_HhO8FP-dp7_2VI9sDjPTTpzq0vaWB-QD0hyuPR2gCK37vVX5-g7a9qgwCXvdg9htkHK9GF4TQ',
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
