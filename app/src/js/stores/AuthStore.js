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
    id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImM4ZjM3ZDcwMzcxNTg3ZDJhYWFlM2JiZmY2MjRjYzg2NWVmMTA1NzUifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhdF9oYXNoIjoidU5XWW9zSVdXcExFT2xJVFozSFpxZyIsImF1ZCI6IjM5NzgyMTI1NDE4OS1taHR2azZnbDZrbW1xZWV2bmhzazJuMXMyazd2N24zdC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExNTYzMjM4NDA5MjY5OTg3ODAxMyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiIzOTc4MjEyNTQxODktbWh0dms2Z2w2a21tcWVldm5oc2sybjFzMms3djduM3QuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJlbWFpbCI6Im5hcmF5bjYwQGdtYWlsLmNvbSIsImlhdCI6MTQ1ODkwODA1NCwiZXhwIjoxNDU4OTExNjU0LCJuYW1lIjoiQW5kcmV3IFN0dWFydCIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vLWtacTd6NTRLWDcwL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUZrL09FeUFkWi1lMTRFL3M5Ni1jL3Bob3RvLmpwZyIsImdpdmVuX25hbWUiOiJBbmRyZXciLCJmYW1pbHlfbmFtZSI6IlN0dWFydCIsImxvY2FsZSI6ImVuLUdCIn0.MpOXqWvdn-Zky2puDmrjYebpjYpBtqClSr6IybA1fQ7TP5dYpXA0a2SVIfqlIMblIyoySs8NVeTJyvk6MDKZBnwCdBuKKq5422bAszH9eGaMvzNomYTQBAK2NXiMkj1bwijRMhLGGriHJHSFN_zMDD96meHjlNyH4A285plbSuGappcEqduFHmiGlSR8Tg9sIR5u4XEvmPCSVTaYfUvWjd7KeYq57IydP7PBmW97DLLajml2pwyhL2ORuSuCx9huZdIPOP3QH9WnleyAiDWHpCZhIrx5GBx1uDCqZuGvhs7dJ0lu29yFvS3J6TJygJJQWyx32VNp4J2aQABb_s-VLQ',
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
