import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { postProduct } from "../Action/productActions";
import { getCurrentUser } from "../Action/userActions";
import { Link } from "react-router-dom";

const Addprod = ({ postProduct, userProds, getCurrentUser }) => {
  useEffect(() => {
    getCurrentUser();
    console.log("userPPPPP : ", userProds);
  }, []);

  const [productTitle, setProductTitle] = useState("");
  const [productType, setProductType] = useState("");
  const [productState, setProductState] = useState("");
  const [productSex, setProductSex] = useState("");
  const [productPic, setProductPic] = useState("");
  const [productDisp, setProductDispo] = useState("");
  const [productDiscrip, setProductDiscrip] = useState("");
  const [productPrice, setProductPrice] = useState("");

  return (
    <div className="Sin3">
      <div className="Siin">
        <h2>Ajouter Produit</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <p>Produit</p>
          <input
            type="text"
            placeholder="Entrer le nom de l'article"
            required
            value={productTitle}
            onChange={(e) => setProductTitle(e.target.value)}
          />
          <p>Type</p>
          <select onChange={(e) => setProductType(e.target.value)}>
            <option value="--">--</option>
            <option value="Meuble">Meuble</option>
            <option value="Vetement">Vetement</option>
            <option value="Jouet">Jouet</option>
            <option value="Poussette">Poussette</option>
            <option value="Autre">Autre</option>
          </select>
          <p>Etat</p>
          <select onChange={(e) => setProductState(e.target.value)}>
            <option value="--">--</option>
            <option value="Ancienne">Ancienne</option>
            <option value="Neuve">Neuve</option>
          </select>
          <p>Sexe</p>
          <select onChange={(e) => setProductSex(e.target.value)}>
            <option value="--">--</option>
            <option value="Fille">Fille</option>
            <option value="Garçon">Garçon</option>
            <option value="Unisex">Unisex</option>
          </select>
          <p>Statut</p>
          <select onChange={(e) => setProductDispo(e.target.value)}>
            <option value="--">--</option>
            <option value="Disponible">Disponible</option>
            <option value="Vendu">Vendu</option>
          </select>
          <p>Photo</p>
          <input
            type="file"
            onChange={(e) => setProductPic(e.target.files[0])}
          />
          <p>Description</p>
          <input
            type="text"
            placeholder="Entrer la description du produit"
            required
            value={productDiscrip}
            onChange={(e) => setProductDiscrip(e.target.value)}
          />
          <p>Prix</p>
          <input
            type="Number"
            placeholder="Entrer le prix"
            required
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
          <div>
            <Link to="/" className="margin">
              <button
                onClick={() =>
                  postProduct({
                    titre: productTitle,
                    type: productType,
                    etat: productState,
                    sex: productSex,
                    photo: productPic,
                    disponibilité: productDisp,
                    description: productDiscrip,
                    prix: productPrice,
                  })
                }
              >
                Ajouter
              </button>
            </Link>
          </div>
        </form>
      </div>
      <div>
        <img className="re-size" src="/images/baby.png" alt="Bambino" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userProds: state.userprod,
    user: state.role,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postProduct: (product) => dispatch(postProduct(product)),
  getCurrentUser: () => dispatch(getCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Addprod);
