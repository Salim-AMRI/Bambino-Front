// import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
// import {
//   postProduct,
//   getProductByUserFromApi,
//   deleteProductFromApi,
//   editeProductFromApi,
// } from "../Action/productActions";
// import { getCurrentUser } from "../Action/userActions";
// import formatPrix from "./Prix";
// import ModalEdite from "./EditeProd";
import React from "react";
import { Link } from "react-router-dom";

const Client = () => {
//   postProduct,
//   getProduct,
//   userProds,
//   deleteProduct,
//   getCurrentUser,
// }) => {
//   useEffect(() => {
//     getCurrentUser();
//     getProduct();
//     console.log("userPPPPP : ", userProds);
//   }, []);

//   const [productTitle, setProductTitle] = useState("");
//   const [productType, setProductType] = useState("");
//   const [productState, setProductState] = useState("");
//   const [productSex, setProductSex] = useState("");
//   const [productPic, setProductPic] = useState("");
//   const [productDisp, setProductDispo] = useState("");
//   const [productDiscrip, setProductDiscrip] = useState("");
//   const [productPrice, setProductPrice] = useState("");

  return (
    <div>
      <h2 className="h-title">Bienvenue dans votre espace</h2>
      <div className="carte-flex">
      <Link to="/myproduct">
        <div className="carte-produit">
          <p>Consulter mes produit </p> 
          <img
              src="https://cdn.icon-icons.com/icons2/1508/PNG/512/zenmap_104119.png
              "
              alt="Voir mes articles"
            />       
        </div>
        </Link>
        <Link to="/addproduct">
        <div className="carte-produit">
          <p>Ajouter un produit</p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQP0uzTq-XA-d1hQ5_YZrO7fbokv1lo48ZEg&usqp=CAU
              "
              alt="Ajouter un produit"
            />
        </div></Link>
      </div>
      <div>
        <img className="re-size" src="/images/baby.png" alt="Bambino" />
      </div>

      {/* <h2>Mes produits</h2>
      <div className="Siiin-dispo">
        {userProds ? (
          userProds.map((el) => (
            <div className="carte" key={el._id}>
              <div className="carte-space">
                <span
                  title="Article vendu"
                  style={{ fontSize: "x-large", cursor: "pointer" }}
                  role="img"
                  aria-label="Article vendu"
                  onClick={() => {
                    deleteProduct(el._id);
                  }}
                >
                  🗑️
                </span>
              </div>
              <img
                className="menu"
                src={"http://localhost:8000/" + el.photo}
                alt={el.titre}
              />
              <h2>{el.titre}</h2>
              <p>Prix : {formatPrix(el.prix)} </p>

              <ModalEdite el={el} />
            </div>
          ))
        ) : (
          <div>Pas d'article mise en vente</div>
        )}
      </div> */}

      {/* <div className="Siin">
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
          </div>
        </form>
      </div>
      <div>
        <img className="re-size" src="/images/baby.png" alt="Bambino" />
      </div> */}
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     userProds: state.userprod,
//     user: state.role,
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   postProduct: (product) => dispatch(postProduct(product)),
//   getProduct: (_id) => dispatch(getProductByUserFromApi(_id)),
//   deleteProduct: (_id) => dispatch(deleteProductFromApi(_id)),
//   editeProduct: (el) => dispatch(editeProductFromApi(el)),
//   getCurrentUser: () => dispatch(getCurrentUser()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Client);


export default Client;
