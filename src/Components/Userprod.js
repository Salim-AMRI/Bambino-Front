import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getProductByUserFromApi,
  deleteProductFromApi,
  editeProductFromApi,
} from "../Action/productActions";
import { getCurrentUser } from "../Action/userActions";
import formatPrix from "./Prix";
import ModalEdite from "./EditeProd";

const Myprod = ({
  getProduct,
  userProds,
  deleteProduct,
  getCurrentUser,
}) => {
  useEffect(() => {
    getCurrentUser();
    getProduct();
    console.log("userPPPPP : ", userProds);
  }, []);


  return (
    <div>
      <h2>Mes produits</h2>
      <div className="Siiin-dispo">
        {userProds ? (
          userProds.map((el) => (
            <div className="carte" key={el._id}>
              <div className="carte-space">
                
                <img
              src="https://cdn.icon-icons.com/icons2/868/PNG/128/trash_bin_icon-icons.com_67981.png
              "
              alt="Supprimer l'article"
              onClick={() => {
                deleteProduct(el._id);
              }}
            />  
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
  getProduct: (_id) => dispatch(getProductByUserFromApi(_id)),
  deleteProduct: (_id) => dispatch(deleteProductFromApi(_id)),
  editeProduct: (el) => dispatch(editeProductFromApi(el)),
  getCurrentUser: () => dispatch(getCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Myprod);
