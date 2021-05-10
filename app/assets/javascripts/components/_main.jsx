
window.Main = createReactClass({

  getInitialState: function () {
    return {
      fullname: "",
      phone: "",
      email: "",
      errorname: "",
      erroremail: "",
      errorForm: false,
      disabledButton: false
    }
  },


  handlerSendForm() {
    this.setState({ disabledButton: true});
    const { email, fullname, phone } = this.state;

    const payload = { lead: { fullname, email, phone } }

    let config = {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json, text-plain, */*"
      },
      method: "POST",
      body: JSON.stringify(payload)
    }

    fetch('/api/v1/lead/create', config)
      .then(response => {
        console.log(response);
        this.setState({ disabledButton: false});
      })
      .catch(error => {
        this.setState({ disabledButton: false});
      });
  },


  componentDidMount() {

  },

  changeHandlerFullname(e) {
    this.setState({
      errorname: "validando"
    });
    this.setState({
      fullname: e.target.value
    });

  },


  changeHandlerEmail(e) {
    this.setState({
      erroremail: "validando"
    });
    this.setState({
      email: e.target.value
    });
  },

  validateName() {
    let validate_name = this.regexNameValidate();
    if (!validate_name) {
      this.setErrorName("error introduce tus apellidos");

    } else {
      this.setErrorName("");
    }
  },


  validateEmail() {
    let result_validate = this.regexEmailValidate();
    if (!result_validate) {
      this.setErrorEmail("formato incorrecto")
    } else {
      this.setErrorEmail("")
    }
  },




  setErrorName(value) {
    this.setState({
      errorname: value
    });
  },

  setErrorEmail(value) {
    this.setState({
      erroremail: value
    });
  },




  regexNameValidate() {
    const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    const name = document.getElementById('fullname').value;
    if (!regName.test(name)) {
      return false;
    } else {
      return true;
    }
  },

  regexEmailValidate() {
    const email = document.getElementById('email').value;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      return false
    } else {
      return true;
    }
  },



  changeHandlerPhone(e) {
    this.setState({
      phone: e.target.value
    });
  },

  render: function () {
    return (
      <div>
        <div className="p">
          <label>
            <span className="ui-label">
              Nombre   <span>{this.state.errorname}</span>
            </span>
            <br />
            <input type="text" id="fullname" value={this.state.fullname} className="inputtext full" onKeyUp={this.validateName} onChange={this.changeHandlerFullname} placeholder="Nombre y apellidos" name="nombre" />
          </label>
        </div>
        <div className="p">
          <label>
            <span className="ui-label">
              Email   <span>{this.state.erroremail}</span>
            </span>
            <br />
            <input type="email" id="email" value={this.state.email} onKeyUp={this.validateEmail} onChange={this.changeHandlerEmail} className="inputtext full" placeholder="ejemplo@empresa.com" name="email" />
          </label>
        </div>
        <div className="p">
          <label>
            <span className="ui-label">
              Teléfono
          </span>
            <br />
            <input type="tel" value={this.state.phone} maxLength="10" onChange={this.changeHandlerPhone} className="inputtext full" placeholder="10 dígitos" name="telefono" />
          </label>
        </div>
        <div className="p">
          <button onClick={this.handlerSendForm} disabled={this.state.disabledButton} className="button">Enviar</button>
        </div>
      </div>

    )
  }
})