export default
  class Usuario {
  constructor() {
    this.email;
    this.senha;
    this.admin = false;
  }
  isAdmin(){
    return this.admin;
  }
}
