import React,{Component} from 'react'; //Step 1
import {StyleSheet,Text,View,Image,TouchableHighlight,Animated} from 'react-native'
class Panel extends Component{
    _setMaxHeight(event){
        this.setState({
            maxHeight   : event.nativeEvent.layout.height
        });
    }
    
    _setMinHeight(event){
        this.setState({
            minHeight   : event.nativeEvent.layout.height
        });
    }
    constructor(props){
        super(props);

        this.icons = {     //Step 2
            'up'    : require('./src/arrowUp.png'),
            'down'  : require('./src/arrowDown.png')
        };

        this.state = {
            title       : props.title,
            expanded    : true,
            animation   : new Animated.Value()
        };
    }

    toggle(){
        //Step 1
        let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;
    
        this.setState({
            expanded : !this.state.expanded  //Step 2
        });
    
        this.state.animation.setValue(initialValue);  //Step 3
        Animated.spring(     //Step 4
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start();  //Step 5
    }


    render(){
        let icon = this.icons['down'];

        if(this.state.expanded){
            icon = this.icons['up'];   //Step 4
        }

        //Step 5
        return ( 
            <Animated.View 
            style={[styles.container,{height: this.state.animation}]}>
                <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
                    <Image source={require('./src/ico-menu.png')} />
                    <Text style={styles.title}>{this.state.title}</Text>
                    <TouchableHighlight 
                        style={styles.button} 
                        onPress={this.toggle.bind(this)}
                        underlayColor="#f1f1f1">
                        <Image
                            style={styles.buttonImage}
                            source={icon}
                        ></Image>
                    </TouchableHighlight>
                </View>
                
                <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                    {this.props.children}
                </View>

            </Animated.View>
    
        );
    }
}

var styles = StyleSheet.create({
    container   : {
        backgroundColor: '#fff',
        width:260
    },
    titleContainer : {
        alignItems: 'center',
        backgroundColor: '#ffffff',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    title       : {
        flex    : 1,
        paddingLeft : 14,
        fontSize: 16,
    },
    button      : {

    },
    buttonImage : {
        width   : 24,
        height  : 20
    },
    body        : {
        padding     : 10,
        paddingTop  : 10,
        paddingLeft: 18
    }
});
export default Panel;