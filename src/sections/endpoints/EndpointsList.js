import React, { Component } from 'react'
import { TouchableOpacity, Text, Image, FlatList } from 'react-native'
import { Actions } from 'react-native-router-flux';


export default class EndpointsList extends Component {

    render(){
        return(
            
            <View>
                
                <View style= { flexDirection: 'row' }>
                    <TouchableOpacity>
                        <View>
                            <Image />
                            <Text>{ 'Characters' }</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View>
                            <Image />
                            <Text>{ 'Comics' }</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity>
                        <View>
                            <Image />
                            <Text>{ 'Creators' }</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View>
                            <Image />
                            <Text>{ 'Series' }</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

        )
    }
}

