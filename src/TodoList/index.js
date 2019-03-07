import React from "react";

import { View, Text } from "react-native";

import { connect } from "react-redux";

// import styles from './styles';

const TodoList = ({ todos }) => (
  <View
    style={{
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    {todos.map((todo, index) => (
      <Text key={index}>{todo}</Text>
    ))}
  </View>
);

const mapStateToProps = state => ({
  todos: state
});

export default connect(mapStateToProps)(TodoList);
