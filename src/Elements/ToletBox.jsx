import React from 'react'
import { Alert, Image, Linking, Pressable, StyleSheet, Text, View } from 'react-native'
import image1 from '../../assets/images/bijoysinghIMages.jpg'
import { useNavigation } from '@react-navigation/native'

function ToletBox({item}) {
    const navigation = useNavigation()
    function handleLongPress() {
        Alert.alert("নিশ্চিত?", "আপনি কি নিশ্চিত? আপনি তাকে কল করতে চান।", [{ text: "হ্যা", onPress: () => { Linking.openURL("tel:01855241666") } }, { text: "না", onPress: () => { } }, { text: "সরান", onPress: () => { } }])
    }
    return (
        <Pressable onPress={() => navigation.navigate("To Let Detailes",{item:item})} onLongPress={handleLongPress} style={styles.Container} >
            <View style={styles.imageContainer}>
                <Image source={{uri:item.picture[0].url}} style={{ width: "100%", height: "100%" }} />
            </View>
            <View style={styles.detailesContainer}>
                <View>
                    <Text style={{ fontSize: 18, maxHeight: 46, ...styles.mainContentTextStyle }}>{item.name}</Text>
                </View>

                <View>
                    <Text style={{ fontSize: 14, maxHeight: 46, ...styles.mainContentTextStyle,color:"gray" }}>{item.home_location}</Text>
                </View>
                
                <View style={{ maxHeight: "auto" }}>
                    <Text style={{ fontSize: 14, flexDirection: "row", flexWrap: "wrap" }}>
                        <Text>
                            <Text style={styles.contentDetailesTextStyle}>
                                Rome:
                            </Text>
                            <Text style={styles.mainContentTextStyle}>{item.room}</Text>
                        </Text>

                        <Text>
                            <Text style={styles.contentDetailesTextStyle}>  width:</Text>
                            <Text style={styles.mainContentTextStyle}>{item.room_width}</Text>
                        </Text>

                        <Text>
                            <Text style={styles.contentDetailesTextStyle}>  height:</Text>
                            <Text style={styles.mainContentTextStyle}>{item.room_height}</Text>
                        </Text>
                        
                    </Text>
                </View>
                <View>
                    <Text style={{ fontSize: 15 }}>
                        <Text style={styles.contentDetailesTextStyle}>Contact: </Text>
                        <Text style={styles.mainContentTextStyle}>01855241666</Text>
                    </Text>
                </View>
                {
                    item.price &&
                    <View>
                        {
                            item.price.daily &&
                            <Text style={{ fontSize: 15 }}>
                                <Text style={styles.contentDetailesTextStyle}>Daily: </Text>
                                <Text style={styles.mainContentTextStyle}>{item?.price?.daily} Tk</Text>
                            </Text>
                        }
                        {
                            item.price.monthly &&
                            <Text style={{ fontSize: 15 }}>
                                <Text style={styles.contentDetailesTextStyle}>Monthly: </Text>
                                <Text style={styles.mainContentTextStyle}>{item?.price?.monthly} Tk</Text>
                            </Text>
                        }
                    </View>
                }
            </View>
        </Pressable>
    )
}

export default ToletBox


const styles = StyleSheet.create({
    Container: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,

        borderBottomWidth: 1,
        borderBottomColor: "#DE1976",
        width: "49%",
        marginTop: 10,
        paddingBottom: 5,
        flexShrink: 1,
        paddingHorizontal: 2,
        borderRadius: 5
    },
    imageContainer: {
        width: "100%",
        height: 150,
        borderBottomWidth: 1,
    },
    detailesContainer: {
        marginTop: 5,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        width: "100%"
    },
    titleStyle: {
        fontSize: 18,
        maxHeight: 46,
        color: "#DE1976"
    },
    contentDetailesTextStyle: {
        color: "gray"
    },
    mainContentTextStyle: {
        color: "#DE1976"
    }
})