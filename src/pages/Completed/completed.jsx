import React,{useEffect} from "react";
import {getTodos} from "./action";
import {useSelector,useDispatch} from "react-redux";
import {
    Text,
  } from "@chakra-ui/react";
  import Template from "../Template";
  const Completed = () => {
    const dispatch = useDispatch();
    const {todos} = useSelector(state => state.completed);
    console.log("🚀 ~ file: completed.jsx ~ line 11 ~ Completed ~ todos", todos)
    useEffect(() => {
      dispatch(getTodos())
    },[])
    return (
      <Template>
        <Text>Hello Completed</Text>
      </Template>
    );
  };
  export default Completed;
  
