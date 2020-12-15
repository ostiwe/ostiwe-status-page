import React from 'react';
import {RootState} from "./redux/rootReducer";
import {connect, ConnectedProps} from "react-redux";
import i18next from 'i18next';
import {Dropdown, Layout, Menu} from "antd";
import {GlobalOutlined} from '@ant-design/icons';
import {updateLanguage} from "./redux/system/actions";


const {Content, Footer, Header} = Layout;


const languageList = [
    {key: 'ru', title: 'Russian (Русский)'},
    {key: 'en', title: 'English'},
];


type AppState = {
    lang: string
};

const stateToProps = (state: RootState) => {
    return state;
}
const mapDispatch = {
    updateLanguage
}

const connector = connect(stateToProps, mapDispatch);

type Props = ConnectedProps<typeof connector>;

class App extends React.Component<Props, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            lang: this.props.system.lang
        }
        this.initLanguage = this.initLanguage.bind(this);
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    initLanguage() {
        const {lang} = this.props.system;
        i18next.init({
            lng: lang,
            resources: require(`./languages/${lang}.json`)
        })
        this.setState({lang});
    }

    changeLanguage(e: any) {
        this.props.updateLanguage(e.key);
    }

    componentDidUpdate(prevProps: Readonly<RootState>, prevState: Readonly<AppState>, snapshot?: any) {
        const {lang} = this.props.system;
        if (lang !== prevProps.system.lang) {
            this.initLanguage()
        }
    }

    componentDidMount() {
        this.initLanguage();
    }

    render() {
        const languageMenu = <Menu onClick={this.changeLanguage}>
            {languageList.map(({key, title}) => <Menu.Item key={key}>{title}</Menu.Item>)}
        </Menu>

        return (
            <Layout>
                <Header className='app-header'>dsdklsk</Header>
                <Content>
                    <p>{i18next.t('test')}</p>
                </Content>
                <Footer>
                    <Dropdown overlay={languageMenu}>
                        <a onClick={e => e.preventDefault()}>
                            <GlobalOutlined/>
                        </a>
                    </Dropdown>
                </Footer>
            </Layout>
        );
    }
}

export default connector(App);
