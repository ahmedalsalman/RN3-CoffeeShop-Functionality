import React from "react";
import { connect } from "react-redux";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";

import removeItemFromCart from "../../redux/actions"
// Style
import styles from "./styles";

const CartItem = ({ item }) => (
  <ListItem style={styles.listStyle}>
    <Left>
      <Text style={styles.drink}> {item.drink} </Text>
      <Text note style={styles.option}>
        {item.option}
      </Text>
    </Left>
    <Body>
      <Text style={styles.quantity}>{item.quantity}</Text>
    </Body>
    <Right>
      <Button transparent onPress={() => removeItem(item)}>
        <Icon name="trash" style={styles.removeItem} />
      </Button>
    </Right>
  </ListItem>
);

const mapDispatchToProps = dispatch => ({
  removeItem: (item) => dispatch(removeItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CartItem);
