import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePanierFromApi, getPanierFromApi } from "../Action/panierActions";
import formatPrix from "./Prix";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

class Order extends Component {
  componentDidMount() {
    this.props.getAllPanier();
  }

  state = {
    showCheckout: false,
  };

  render() {
    const prixPanier = (
      <span>
        {this.props.panier.reduce((a, el) => a + Number.parseFloat(el.prix), 0)}
      </span>
    );

    const prodPanier = this.props.panier.length ? (
      this.props.panier.map((el) => {
        return (
          <Zoom>
            <div className="carte-panier" key={el._id}>
            <div>
              <img
                className="menu"
                src={"http://localhost:8000/" + el.photo}
                alt={el.titre}
              /></div>
              <div>
              <p>{el.titre} <br />
              Prix : {formatPrix(el.prix)} </p>
            </div>
            <div>
              
              <img className="remove"
              src="https://cdn.icon-icons.com/icons2/868/PNG/128/trash_bin_icon-icons.com_67981.png
              "
              alt="Supprimer l'article"
              onClick={() => {
                this.props.delete(el._id);
              }}
            />  
              </div>
            </div>
          </Zoom>
        );
      })
    ) : (
      <h2>
        Votre panier est vide
        <br />
        Veuillez y mettre des articles...
      </h2>
    );
    return (
      <div>
        <h2 className="h-rez">Vous allez Commander ...</h2>
        <div className="colne">{prodPanier}</div>
        <h3 className="h-rez">
          Prix Total de la Commande : <span>{prixPanier}</span> TND
        </h3>
        <div>
          <button
            onClick={() => {
              this.setState({ showCheckout: true });
            }}
            className="re-size btnt"
          >
            Passer la commande
          </button>
        </div>
        <div className="filter"></div>
        {this.state.showCheckout && (
          <Fade right cascade={true}>
            <div className="panier">
              <form className="form-commande">
                <ul className="form-container">
                  <li>
                    <label>Nom et prénom</label>
                    <input
                      name="name"
                      type="text"
                      required
                      onChange={this.handleInput}
                    ></input>
                  </li>
                  <li>
                    <label>Téléphone</label>
                    <input
                      name="phone"
                      type="text"
                      required
                      onChange={this.handleInput}
                    ></input>
                  </li>
                  <li>
                    <label>Adresse de livraison</label>
                    <input
                      name="adress"
                      type="text"
                      required
                      onChange={this.handleInput}
                    ></input>
                  </li>
                  <li>
                    <label>N° de C.I.N</label>
                    <input
                      name="CIN"
                      type="text"
                      required
                      onChange={this.handleInput}
                    ></input>
                  </li>
                  <li>
                    <button
                      className="re-size bto"
                      type="submit"
                      onClick={() =>
                        alert(
                          "Votre commande est validée, vous reservez un sms de confirmation dans les prochaines heures."
                        )
                      }
                    >
                      Valider
                    </button>
                  </li>
                </ul>
              </form>
            </div>
          </Fade>
        )}

        {/* <button
          className="re-size"
          onClick={() => alert("Votre commande est validée")}
        >
          Commander
        </button> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    panier: state.panier,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllPanier: () => dispatch(getPanierFromApi()),
  delete: (_id) => dispatch(deletePanierFromApi(_id)),
  //updatePanier: (el) => dispatch(updatePanierFromAPI(el)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
