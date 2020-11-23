import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductFromApi, selectProduct } from "../Action/productActions";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";
import formatPrix from "./Prix";

class Product extends Component {
  state = {
    el: null,
    products: [],
    type: "",
    sex: "",
    etat: "",
    tri: "",
    filter: [],
  };

  componentDidMount() {
    this.props.getAllProduct();
    setTimeout(() => {
      this.setState({
        products: this.props.produits,
      });
    }, 700);
  }

  // Modal part

  openModal = (el) => {
    this.setState({ el });
  };

  closeModal = () => {
    this.setState({
      el: null,
    });
  };

  // Filter part categorie

  filterType = (e) => {
    console.log(e.target.value);
    if (e.target.value === "Tout") {
      this.setState({
        type: e.target.value,
        filter: [],
      });
    } else {
      this.setState({
        type: e.target.value,
        filter: this.props.produits.filter(
          (produit) => produit.type.indexOf(e.target.value) >= 0
        ),
      });
    }
  };

  // Filter part sex

  filterSex = (e) => {
    console.log(e.target.value);
    if (e.target.value === "Tout") {
      this.setState({
        sex: e.target.value,
        filter: [],
      });
    } else {
      this.setState({
        sex: e.target.value,
        filter: this.props.produits.filter(
          (produit) => produit.sex.indexOf(e.target.value) >= 0
        ),
      });
    }
  };

  // Filter part etat

  filterEtat = (e) => {
    console.log(e.target.value);
    if (e.target.value === "Tout") {
      this.setState({
        etat: e.target.value,
        filter: [],
      });
    } else {
      this.setState({
        etat: e.target.value,
        filter: this.props.produits.filter(
          (produit) => produit.etat.indexOf(e.target.value) >= 0
        ),
      });
    }
  };

  // Organiser part prix

  sortPrix = (e) => {
    const tri = e.target.value;
    console.log(e.target.value);
    this.setState((state) => ({
      tri: tri,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          tri === "Moins"
            ? a.prix > b.prix
              ? 1
              : -1
            : tri === "Plus"
            ? a.prix < b.prix
              ? 1
              : -1
            : a._id > b._id
            ? 1
            : -1
        ),
    }));
  };

  render() {
    const { el } = this.state;

    return (
      <div>
        <h2 className="h-title">Articles en Vitrine</h2>
        <div className="filter">
          <div className="filter-type">
            Catégorie :{"  "}
            <select onChange={this.filterType}>
              <option value="Tout">Tout</option>
              <option value="Meuble">Meuble</option>
              <option value="Vetement">Vetement</option>
              <option value="Jouet">Jouet</option>
              <option value="Poussette">Poussette</option>
              <option value="Autre">Autre</option>
            </select>{" "}
          </div>
          <div className="filter-type">
            Sexe :{"  "}
            <select onChange={this.filterSex}>
              <option value="Tout">Tout</option>
              <option value="Fille">Fille</option>
              <option value="Garçon">Garçon</option>
              <option value="Unisex">Unisex</option>
            </select>{" "}
          </div>
          <div className="filter-etat">
            Etat :{"  "}
            <select onChange={this.filterEtat}>
              <option value="">Tout</option>
              <option value="Neuve">Neuve</option>
              <option value="Ancienne">Ancienne</option>
            </select>{" "}
          </div>
          <div className="filter-prix">
            Prix :{"  "}
            <select onChange={this.sortPrix}>
              <option value="">Tout</option>
              <option value="Moins">Moins cher</option>
              <option value="Plus">Plus cher</option>
            </select>{" "}
          </div>
        </div>
        <Fade bottom cascade={true}>
          <div className="top">
            {this.state.products.length > 0 ? (
              this.state.filter.length > 0 ? (
                this.state.filter.map((el) => (
                  <div className="carte" key={el._id}>
                    <p className="disponible">{el.disponibilité}</p>

                    <img
                      className="menu"
                      src={"http://localhost:8000/" + el.photo}
                      alt={el.titre}
                    />
                    <h2>{el.titre}</h2>

                    <span
                      title="Voir l'article"
                      style={{ fontSize: "x-large", cursor: "pointer" }}
                      role="img"
                      onClick={() => this.openModal(el)}
                    >
                      👁
                    </span>

                    <p>{el.type}</p>
                    <p>{el.etat}</p>
                    <p>{formatPrix(el.prix)}</p>

                    {/* <button
                      title="Click et savour"
                      onClick={() =>
                        this.props.selectProduct({
                          photo: el.photo,
                          type: el.type,
                          etat: el.etat,
                          titre: el.titre,
                          prix: el.prix,
                        })
                      }
                    >
                      Ajouter
                    </button> */}
                    <div className="carte-space">
                      <img
                        src="https://cdn.icon-icons.com/icons2/210/PNG/256/shopping-basket-add256_24909.png"
                        alt="Ajouter l'article au panier"
                        onClick={() =>
                          this.props.selectProduct({
                            photo: el.photo,
                            type: el.type,
                            etat: el.etat,
                            titre: el.titre,
                            prix: el.prix,
                          })
                        }
                      />
                    </div>
                  </div>
                ))
              ) : (
                this.state.products.map((el) => {
                  return (
                    <div className="carte" key={el._id}>
                      <p className="disponible">{el.disponibilité}</p>

                      <img
                        className="menu"
                        src={"http://localhost:8000/" + el.photo}
                        alt={el.titre}
                      />
                      <h2>{el.titre}</h2>
                      <span
                        title="Voir l'article"
                        style={{ fontSize: "x-large", cursor: "pointer" }}
                        role="img"
                        onClick={() => this.openModal(el)}
                      >
                        👁
                      </span>
                      <p>{el.type}</p>
                      <p>{el.etat}</p>
                      <p>{formatPrix(el.prix)}</p>

                      <div className="carte-space">
                        <img
                          src="https://cdn.icon-icons.com/icons2/210/PNG/256/shopping-basket-add256_24909.png
              "
                          alt="Ajouter l'article au panier"
                          onClick={() =>
                            this.props.selectProduct({
                              photo: el.photo,
                              type: el.type,
                              etat: el.etat,
                              titre: el.titre,
                              prix: el.prix,
                            })
                          }
                        />
                      </div>
                    </div>
                  );
                })
              )
            ) : (
              <p>Les articles en vitrine n'est pas encore prêt</p>
            )}
          </div>
        </Fade>
        <div>
          <img className="re-size" src="/images/baby.png" alt="Bambino" />
        </div>

        {el && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <button className="close-modal" onClick={this.closeModal}>
              x
            </button>
            <Zoom>
              <div className="produit-description">
                <img
                  src={"http://localhost:8000/" + el.photo}
                  alt={el.titre}
                ></img>
                <div className="produit-description-detail">
                  <p className="titre-modal">{el.titre}</p>
                  <p>
                    <strong>Description : </strong> {el.description}
                  </p>
                  <p>
                    <strong>Sexe : </strong> {el.sex}
                  </p>
                  <p>
                    <strong>Etat : </strong> {el.etat}
                  </p>
                  <p>
                    <strong>Prix : </strong> {formatPrix(el.prix)}
                  </p>
                  <p>
                    <strong>Disponibilité : </strong> {el.disponibilité}
                  </p>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    produits: state.produits,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllProduct: () => dispatch(getProductFromApi()),
  selectProduct: (data) => dispatch(selectProduct(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
