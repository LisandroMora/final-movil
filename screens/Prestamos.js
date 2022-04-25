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

import getPrestamos from "../services/getPrestamos";
function Prestamos() {
  const { userInfo } = useContext(sessionContext);
  const [prestamos, setPrestamos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, SetmodalData] = useState({});

  useEffect(async () => {
    const prestamosData = userInfo
      ? await getPrestamos(userInfo.data.token)
      : {};

    setPrestamos(prestamosData.data);
  }, [userInfo]);
  return (
    <Layout>
      <>
        <ScrollView>
          {prestamos?.map((x, index) => (
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
              <Text>{x.descripcion}</Text>
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
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              oficina principal {modalData.idoficina_principal}
            </Text>
            <Text style={styles.modalText}>
              id prestamo {modalData.idprestamo}
            </Text>
            <Text style={styles.modalText}>
              id cliente {modalData.idcliente}
            </Text>
            <Text style={styles.modalText}>
              id tipo prestamo {modalData.idtipo_prestamo}
            </Text>
            <Text style={styles.modalText}>
              monto prestamo {modalData.monto_prestamo}
            </Text>
            <Text style={styles.modalText}>
              tasa de interes {modalData.tasa_interes}
            </Text>
            <Text style={styles.modalText}>
              fecha prestamo {modalData.fecha_prestamo}
            </Text>
            <Text style={styles.modalText}>
              fecha desembolso {modalData.fecha_desembolso}
            </Text>
            <Text style={styles.modalText}>plazo {modalData.plazo}</Text>
            <Text style={styles.modalText}>
              id sector economico {modalData.idsector_economico}
            </Text>
            <Text style={styles.modalText}>
              fecha vencimiento {modalData.fecha_vencimiento}
            </Text>
            <Text style={styles.modalText}>
              monto seguro pagado {modalData.monto_seguro_pagado}
            </Text>
            <Text style={styles.modalText}>
              fecha ultimo calculo {modalData.fecha_ultimo_calculo}
            </Text>
            <Text style={styles.modalText}>
              monto interes calculo {modalData.monto_interes_calculado}
            </Text>
            <Text style={styles.modalText}>
              monto interes fin de mes {modalData.monto_intereses_fin_mes}
            </Text>
            <Text style={styles.modalText}>
              monto pago anticipado {modalData.monto_pago_anticipado}
            </Text>
            <Text style={styles.modalText}>
              valor cuota {modalData.valor_cuota}
            </Text>
            <Text style={styles.modalText}>
              consecutivo cuota {modalData.consecutivo_cuota}
            </Text>
            <Text style={styles.modalText}>
              balance corte {modalData.balance_corte}
            </Text>
            <Text style={styles.modalText}>
              balance prestamo {modalData.balance_prestamo}
            </Text>
            <Text style={styles.modalText}>
              descripcion {modalData.descripcion}
            </Text>
            <Text style={styles.modalText}>act {modalData.act}</Text>

           
          </View>
          </ScrollView> 
          <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          
        </Modal>
      </>
    </Layout>
  );
}

export default Prestamos;

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
