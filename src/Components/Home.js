import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductFromApi } from "../Action/productActions";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import formatPrix from "./Prix";

class Home extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.props.getAllProduct();
    setTimeout(() => {
      this.setState({
        products: this.props.produits,
      });
    }, 700);
  }

  render() {
    return (
      <div>
        <div className="cover-img">
          <div>Prêts à faire du tri dans vos grenier ?</div>
        </div>
        <h2 className="h-title">Articles en Vitrine</h2>
        <Fade bottom cascade={true}>
          <div className="top">
            {this.state.products.length > 0 ? (
              this.state.products.map((el) => (
                <div className="carte" key={el._id}>
                  <p className="disponible">{el.disponibilité}</p>

                  <img
                    className="menu"
                    src={"http://localhost:8000/" + el.photo}
                    alt={el.titre}
                  />
                  <h2>{el.titre}</h2>
                  <p>{el.type}</p>
                  <p>{el.etat}</p>
                  <p>{formatPrix(el.prix)}</p>
                </div>
              ))
            ) : (
              <p>Les articles en vitrine n'est pas encore prêt</p>
            )}
          </div>
        </Fade>
        <div>
          <h2>Tu es prêt(e) ?</h2>
          <Link to="/auto">
            <button className="re-size btnt">Se connecter</button>{" "}
          </Link>
        </div>
        {/* <div>
          <img className="re-size" src="/images/baby.png" alt="Bambino" />
        </div> */}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
