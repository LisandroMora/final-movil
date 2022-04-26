
import Layout from '../Layouts/Layout'
import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { WebView } from 'react-native-webview';

function Videos() {
    return (
        <Layout>
            <View>
                <Text>Videos</Text>

                <Text>
                COOPDGII celebra 23 años de logros
                <WebView
        source={{html:'<iframe width="100%" height="30%" src="https://www.youtube.com/embed/Khrf2vaZfoA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' }}
        style={{marginTop: 20,width: 400, height:300 }}
      /></Text>

<Text>
XVII Asamblea General de Delegados 2021
<WebView
        source={{html:'<iframe width="100%" height="30%" src="https://www.youtube.com/embed/9tSl408KmkQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' }}
        style={{marginTop: 20,width: 400, height:300 }}
      /></Text>

<Text>
Evento Central 20 Aniversario COOPDGII
<WebView
        source={{html:'<iframe width="100%" height="30%" src="https://www.youtube.com/embed/R2OyawdBdHU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' }}
        style={{marginTop: 20,width: 400, height:300 }}
      /></Text>

<Text>
20 Aniversario de tú coopdgii
<WebView
        source={{html: '<iframe width="100%" height="30%" src="https://www.youtube.com/embed/4HiPj2zbDT0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' }}
        style={{marginTop: 20,width: 400, height:300 }}
      /></Text>

<Text>
Historia de nuestra cooperativa
<WebView
        source={{html:'<iframe width="100%" height="30%" src="https://www.youtube.com/embed/kbtOr_u8orI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' }}
        style={{marginTop: 20,width: 400, height:300 }}
      /></Text>

<Text>
Lanzamiento sitio web
<WebView
        source={{html:'<iframe width="100%" height="30%" src="https://www.youtube.com/embed/2FLzsv8OIjw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' }}
        style={{marginTop: 20,width: 400, height:300 }}
      /></Text>
      
                
                
            </View>
        </Layout>
    )
}

export default Videos