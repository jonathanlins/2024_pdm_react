import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

const App = () => {
    const textoDoRotulo = 'Nome:'

    const estilosDoBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none', width: '100%', borderRadius: 8}

    const obterTextoDoBotao = () => {
        return 'Enviar'
    }

    const fuiClicado = () => {
        alert ('vc me clicou')
    }
    
    return (
        <div style ={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}> 
            <label className = 'rotulo' htmlFor='nome' style={{display: 'block', marginBottom: 4}}> 
                {textoDoRotulo}
                </label>
            <input type = 'text' id='nome' style={{paddingTop: 8, paddingBottom: 8, borderStyle: "hidden", width: '100%', borderRadius: 8, outline: 'none' }}/>
            <button
                style={estilosDoBotao}
                onClick = {fuiClicado}>
                {obterTextoDoBotao()}
                </button>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);

