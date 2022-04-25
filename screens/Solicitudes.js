import React, { useEffect, useContext, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Modal,
  Pressable,
  StyleSheet,
} from "react-native";
import Layout from "../Layouts/Layout";

import { sessionContext } from "../context/sessionContext";

import getSolicitudes from "../services/getSolicitudes";

function Solicitudes() {
  const { userInfo } = useContext(sessionContext);
  const [solicitudes, setSolicitudes] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, SetmodalData] = useState({});

  useEffect(async () => {
    const descuentosData = userInfo
      ? await getSolicitudes(userInfo.data.token)
      : {};

    setSolicitudes(descuentosData.data);
  }, [userInfo]);
  return (
    <Layout>
      <>
        <ScrollView>
          {solicitudes?.map((x, index) => (
            <View
              onTouchEnd={() => {
                setModalVisible(!modalVisible);
                SetmodalData(x);
              }}
              key={index}
              style={{
                width: 300,
                height: 100,
                backgroundColor: "#97DBAE",
                margin: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>{x.nombre}</Text>
            
            </View>
          ))}
        </ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <ScrollView>
            <View  style={styles.centeredView}>
              <Text style={styles.modalText}>codigo {modalData.codigo}</Text>
              <Text style={styles.modalText}>nombre {modalData.nombre}</Text>
              <Text style={styles.modalText}>fecha {modalData.fecha}</Text>
              <Text style={styles.modalText}>
                comentario {modalData.comentario}
              </Text>
              <Text style={styles.modalText}>estado {modalData.estado}</Text>
              {modalData?.datos?.map((lista, index) =>
                lista?.map((dato, indice) => (
                  <Text key={indice} style={styles.modalText}>
                    {dato}
                  </Text>
                ))
              )}

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Cerrar</Text>
              </Pressable>
            </View>
          </ScrollView>
        </Modal>
      </>
    </Layout>
  );
}

export default Solicitudes;

const styles = StyleSheet.create({
    image: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#00000080",
  
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: "#85C88A",
  
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      width: "80%",
      height: "80%",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonClose: {
      backgroundColor: "black",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      color: "white",
    },
  });
