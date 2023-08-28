import './style/global.less';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import zhCN from '@arco-design/web-react/es/locale/zh-CN';
import enUS from '@arco-design/web-react/es/locale/en-US';
import { Provider } from 'react-redux';
import { ConfigProvider } from '@arco-design/web-react';
import { GlobalContext } from './context';
import Login from './pages/login';
import useStorage from './utils/useStorage';
import { createStore } from 'redux';
import rootReducer from './store';
const store = createStore(rootReducer);

function App() {
  const [lang, setLang] = useStorage('arco-lang', 'en-US');
  function getArcoLocale() {
    switch (lang) {
      case 'zh-CN':
        return zhCN;
      case 'en-US':
        return enUS;
      default:
        return zhCN;
    }
  }
  const contextValue = {
    lang,
    setLang,
  };
  return (
    <BrowserRouter>
      <ConfigProvider
        locale={getArcoLocale()}
        componentConfig={{
          Card: {
            bordered: false,
          },
          List: {
            bordered: false,
          },
          Table: {
            border: false,
          },
        }}
      >
        <Provider store={store}>
          <GlobalContext.Provider value={contextValue}>
            <Switch>
              <Route path="/login" component={Login} />
              {/* <Route path="/" component={PageLayout} /> */}
            </Switch>
          </GlobalContext.Provider>
        </Provider>
      </ConfigProvider>
    </BrowserRouter>
  )
}

export default App
