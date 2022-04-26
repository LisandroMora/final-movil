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
                marginTop: 10,
                marginBottom: 10,
                marginLeft: 10,
                marginRight: 10,
                borderRadius: 10,
                backgroundColor: "#fff",
                shadowColor: "#000",
                overflow: "hidden",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,

              }}

            >
              <Text style={{ fontSize: 16, textAlign: "center", padding: 15 }}>{x.title}</Text>
              <Image source={{ uri: x.imagen }} style={{ width: "100%", height: 200 }} />
            </View>
          ))}


        </>
      </Layout>
    </ScrollView>
  )
}

export default Noticias