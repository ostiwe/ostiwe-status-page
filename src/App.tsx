import React from 'react';
import {RootState} from "./redux/rootReducer";
import {connect, ConnectedProps} from "react-redux";
import i18next from 'i18next';
import {Dropdown, Layout, Menu} from "antd";
import {GlobalOutlined} from '@ant-design/icons';
import {updateLanguage} from "./redux/system/actions";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/public/Home";


const {Content, Footer, Header} = Layout;

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
            lang: 'ru'
        }
        this.initLanguage = this.initLanguage.bind(this);
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    initLanguage() {
        const {lang} = this.props.system;
        this.setState({lang});
        i18next.init({
            lng: lang,
            resources: require(`./languages/${lang}.json`)
        })
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

    render() {
        const languageList = this.props.system.availableLanguage;
        const languageMenu = <Menu onClick={this.changeLanguage}>
            {languageList.map(({code, name}) => <Menu.Item key={code}>{name}</Menu.Item>)}
        </Menu>

        return (
            <Layout>
                <Header className='app-header'>Test app header</Header>
                <Content>
                    <Switch>
                        <Route path='/'>
                            <Home/>
                        </Route>
                    </Switch>
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
