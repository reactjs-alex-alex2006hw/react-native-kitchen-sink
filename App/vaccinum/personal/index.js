'use strict';

var React = require('react-native');

var {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
} = React;

var InfoItem = React.createClass({
    render() {
        return (
            <View style={styles.infoItem}>
              <Image
				                resizeMode='stretch'
				                source={this.props.icon)}
				                style={styles.infoItemIcon} />
				              <text style={styles.infoItemLabel}>{this.props.label}</text>
				              	<text style={styles.infoItemValue}>{this.props.value}</text>
            </View>
        );
    }
});


module.exports = React.createClass({
		getInitialState() {
				return {
					username: '',
					birthday: '',
					mothername: '',
					phone: '',
					infoBinded: false
				};
			},
			doShowCameraMenu() {
			},
			doBindInfo() {
				this.setState({infoBinded:true});
			},
			cancelBind() {
				this.setState({infoBinded:false});
			},
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headContainer}>
        					<TouchableHighlight
                    onPress={this.doShowCameraMenu}
                    underlayColor="#EEB422">
                		<Image
				                resizeMode='stretch'
				                source={require('image!personalHead')}
				                style={styles.vaccinumSearch} />
            		 </TouchableHighlight>
            		</View>
            		 
            		<View style={styles.infoContainer}>
            				<InfoItem 
            					icon={require('image!xx')}
            					label="��������"
            					value={this.state.username}
            				/>
            				<InfoItem 
            					icon={require('image!xx')}
            					label="��������"
            					value={this.state.birthday}
            				/>
            				<InfoItem 
            					icon={require('image!xx')}
            					label="ĸ������"
            					value={this.state.mothername}
            				/>
            				<InfoItem 
            					icon={require('image!xx')}
            					label="��������"
            					value={this.state.phone}
            				/>
            		</View>

            		<View style={styles.vaccinumBaikeContainer}>
            				{this.state.infoBinded?
            					<text>������Ϣ�Ѿ���</text>
            					<Button onPress={this.cancelBind}>ȡ����</Button>
            					:
            					<Button onPress={this.doBindInfo}>�󶨱�����Ϣ</Button>
            					}
            		</View>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
     infoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoItem: {
    	  flex: 1,
    	  flexDirection: 'row',
    },
    infoItemIcon: {
    	  flex: 1,
    	  flexDirection: 'row',
    },
    infoItemLabel: {
    	  flex: 1,
    	  flexDirection: 'row',
    },
    infoItemValue: {
    	  flex: 1,
    	  flexDirection: 'row',
    },
     
});
