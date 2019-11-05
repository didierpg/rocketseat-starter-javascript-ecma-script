import Usuario from "./Usuario";

export default
  class Admin extends Usuario {
  constructor() {
    super();
    this.admin = true;
  }
}
