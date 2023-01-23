import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ConfigProvider, Button, theme } from 'antd';
import {BrowserRouter} from "react-router-dom";

const themeMax = {
    token: {
        colorPrimary: 'red',

        borderRadius:4,
        colorPrimaryText:'#0e0707',
        colorBgDefault:'#ffffff',
        fontSize:15,
        fontFamily:"Book Antiqua"

    },

};
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <ConfigProvider theme={themeMax}
         >
          <BrowserRouter>
              <App />
          </BrowserRouter>

      </ConfigProvider>


)
