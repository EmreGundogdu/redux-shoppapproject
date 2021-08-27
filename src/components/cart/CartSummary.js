import React, { Component } from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  NavItem,
  NavLink,
} from "reactstrap";
import { connect } from "react-redux";

class CartSummary extends Component {
  renderEmpty() {
    return (
      <NavItem>
        <NavLink>Sepet Boş</NavLink>
      </NavItem>
    );
  }
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Sepetiniz
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              {cartItem.product.productName}
              <p style={{ color: "green" }}>{cartItem.quantity}</p>
            </DropdownItem>
          ))}

          <DropdownItem>Option 2</DropdownItem>
          <DropdownItem diver />
          <DropdownItem>Sepete Git</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}
export default connect(mapStateToProps)(CartSummary);
