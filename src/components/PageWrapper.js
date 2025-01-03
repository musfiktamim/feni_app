import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { IconButton } from 'react-native-paper'

function PageWrapper({ children, isYouWantToFloatButton = [false, "", ""], isYouWantToNavigationBar = [false, ""] }) {

    const hello = [{ name: "Home", icon: ["home", "home-outline"] }, { name: "About", icon: ["information", "information-outline"] }, { name: "Activity", icon: ["file-document-multiple", "file-document-multiple-outline"] }, { name: "User", icon: ["emoticon-happy", "emoticon-happy-outline"] }];

    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, position: "relative" }}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 5 }}>
                <View style={{ height: 10 }}>

                </View>
                {children}
                <View style={{ height: 90 }}>

                </View>
            </ScrollView>
            {
                isYouWantToFloatButton[0] &&
                <IconButton icon={`${isYouWantToFloatButton[2]}`} onPress={() => navigation.navigate(isYouWantToFloatButton[1])} style={{ backgroundColor: "white", elevation: 100, borderColor: "black", borderWidth: 1, position: "absolute", bottom: "9%", right: "2%" }} size={35} ></IconButton>
            }
            {
                isYouWantToNavigationBar[0] && <View style={{ width: "100%", position: "absolute", bottom: "1%", display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center" }}>
                    <View style={{ width: "90%", height: 60, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", backgroundColor: "white", borderRadius: 10, elevation: 5 }}>
                        {
                            hello.map((item, index) =>
                                <IconButton key={index} onPress={() => navigation.popTo(item.name)} icon={isYouWantToNavigationBar[1] === item.name ? item.icon[0] : item.icon[1]} iconColor='#DE1976' size={30} style={{ width: "23%" }} />
                            )
                        }
                    </View>

                </View>
            }
        </View>
    )
}

export default PageWrapper