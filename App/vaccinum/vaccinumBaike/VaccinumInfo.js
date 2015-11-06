'use strict';

var React = require('react-native');

var {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} = React;

var InfoItem = React.createClass({
    render() {
        return (
            <View style={styles.infoItem}>
                <View style={styles.infoItemPre}>
                    <Image
                        resizeMode='stretch'
                        source={this.props.icon}
                        style={styles.infoItemIcon} />
                    <Text style={styles.infoItemLabel}>
                        {this.props.label}
                    </Text>
                </View>
                <View style={styles.separator} />
                <Text style={styles.infoItemValue}>
                    {this.props.value}
                </Text>
            </View>
        );
    }
});


module.exports = React.createClass({
    getInitialState() {
        return {
            function:'过敏性休克',
            target: '3月龄至6周岁的儿童',
            effect: '百白破疫苗经国内外多年时间证明...',
            avoid: '患有中枢神经系统疾病，如脑病',
            caution: '打疫苗之前一定要看说明',
            feed: '会有眩晕的效果',
        }
    },
    render() {
        return (
            <View style={styles.container}>
                <InfoItem
                    icon={require('image!tabnav_list')}
                    label="预防疾病："
                    value={this.state.function}
                    />
                <InfoItem
                    icon={require('image!tabnav_list')}
                    label="接种对象："
                    value={this.state.target}
                    />
                <InfoItem
                    icon={require('image!tabnav_list')}
                    label="免疫效果："
                    value={this.state.effect}
                    />
                <InfoItem
                    icon={require('image!tabnav_list')}
                    label="禁忌："
                    value={this.state.avoid}
                    />
                <InfoItem
                    icon={require('image!tabnav_list')}
                    label="注意事项："
                    value={this.state.caution}
                    />
                <InfoItem
                    icon={require('image!tabnav_list')}
                    label="接种反应："
                    value={this.state.feed}
                    />
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    infoItem: {
    },
    infoItemPre: {
        flexDirection: 'row',
    },
    infoItemIcon: {
        marginLeft: 10,
        width:25,
        height:25,
        marginRight: 10,
    },
    infoItemLabel: {
    },
    infoItemValue: {
        marginLeft: 80,
    },
    separator: {
        height: 2,
        backgroundColor: '#CCC'
    },
});
