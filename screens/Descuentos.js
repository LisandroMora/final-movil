import React, { useEffect, useContext, useState } from "react";
import { Text, View, ScrollView, Modal, Pressable , StyleSheet} from "react-native";
import Layout from "../Layouts/Layout";

import { sessionContext } from "../context/sessionContext";

import getDescuentos from "../services/getDescuentos";

function Descuentos() {
  const { userInfo } = useContext(sessionContext);
  const [descuentos, setDescuentos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, SetmodalData] = useState({
  });

  useEffect(async () => {
    const descuentosData = userInfo
      ? await getDescuentos(userInfo.data.token)
      : {};
    console.log("descuentos"+JSON.stringify( modalData));
    setDescuentos(descuentosData.data);
  }, [userInfo]);
  return (
    <Layout>
      <>
       <ScrollView>
          {descuentos.map((x, index) => (
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
              <Text>{x.mes_str}</Text>
              <Text>{x.ano}</Text>
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
          <ScrollView >
          {modalData?.det?.map((x, index) => (
            <View key={index} style={styles.centeredView}>

{/* "ano": "2022",
"mes": "4",
"descripcion": "Normales",
"monto": "4,574.19",
"fecha_aplicacion": "22/04/2022",
"mes_str": "Abril" */}
            <Text style={styles.modalText}>ano {x.ano}</Text>
            <Text style={styles.modalText}>mes {x.mes}</Text>
            <Text style={styles.modalText}>descrpcion {x.descripcion}</Text>
            <Text style={styles.modalText}>fecha {x.fecha_aplicacion}</Text>
            <Text style={styles.modalText}>mes {x.mes_str}</Text>
         

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
          ))}
            
          </ScrollView>
        </Modal>
      </>
    </Layout>
  );
}

export default Descuentos;

const styles = StyleSheet.create({
    image: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00000080',
  
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: '#85C88A',
  
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      width: '80%',
      height: '80%',
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
      backgroundColor: 'black',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      color: 'white',
    },
  });
  
