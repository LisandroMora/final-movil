
import Layout from '../Layouts/Layout'
import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import { WebView } from 'react-native-webview';

function Videos() {
    return (
      <ScrollView>
        <Layout>
            
                <Text>Videos</Text>

                <Text>
                COOPDGII celebra 23 años de logros
         </Text>
         <WebView
        source={{html:'<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Khrf2vaZfoA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' }}
        style={{width: 400, height:200 }}
      />

<Text>
XVII Asamblea General de Delegados 2021
</Text>
<WebView
        source={{html:'<iframe width="100%" height="100%" src="https://www.youtube.com/embed/9tSl408KmkQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' }}
        style={{width: 400, height:200 }}
      />

<Text>
Evento Central 20 Aniversario COOPDGII
</Text>
<WebView
        source={{html:'<iframe width="100%" height="100%" src="https://www.youtube.com/embed/R2OyawdBdHU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' }}
        style={{width: 400, height:200 }}
      />

<Text>
20 Aniversario de tú coopdgii
</Text>
<WebView
        source={{html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/4HiPj2zbDT0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' }}
        style={{width: 400, height:200 }}
      />

<Text>
Historia de nuestra cooperativa
</Text>
<WebView
        source={{html:'<iframe width="100%" height="100%" src="https://www.youtube.com/embed/kbtOr_u8orI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' }}
        style={{width: 400, height:200 }}
      />

<Text>
Lanzamiento sitio web
</Text>
<WebView
        source={{html:'<iframe width="100%" height="100%" src="https://www.youtube.com/embed/2FLzsv8OIjw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' }}
        style={{width: 400, height:200 }}
      />
      
                
                
     
        </Layout>
        </ScrollView>
    )
}

export default Videos