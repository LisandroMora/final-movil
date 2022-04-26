import React, { useEffect, useContext, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Modal,
  Pressable,
  StyleSheet, Image
} from "react-native";
import Layout from "../Layouts/Layout";

import { sessionContext } from "../context/sessionContext";
import getNoticias from "../services/getNoticias";

getNoticias
function Noticias() {
    const { userInfo } = useContext(sessionContext);
    const [noticias, setNoticias] = useState([]);
  
    useEffect(async () => {
      const noticiasData = userInfo
        ? await getNoticias(userInfo.data.token)
        : {};
  
        console.log(noticiasData.data);
      setNoticias(noticiasData.data);
    }, [userInfo]);
    return (
        <ScrollView>
       
    <Layout>
      <>
        
          {noticias?.map((x, index) => (
            <View
          
              key={index}
              style={{
                
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
             
            >
              <Text>{x.title}</Text>
              <Image source={{uri: x.imagen}} style={{width: 200, height: 200}}/>
            </View>
          ))}
      
      
      </>
    </Layout>
    </ScrollView>
    )
}

export default Noticias