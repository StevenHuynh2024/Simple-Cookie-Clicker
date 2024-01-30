import React from 'react';
import style from './style.js'


class Cookie extends React.Component{
    state = {
        score:0,
    }
    increment = () => {
        this.setState((state) => ({score: state.score + 1}))
    }
    reset = () => {
        this.setState({score: 0})
    }
    render() {
        return (
            <div>
                <button type="button" style={style.img} onClick={this.increment} >
                    <img src="https://cdn.discordapp.com/attachments/729502632963473499/1199467432843149322/chocolate-chip-cookie-butter-cookie-cookie-png-5869876d39c1c6e51df3cbfc44b0ac91.png?ex=65c2a619&is=65b03119&hm=e7dedd32561cea991da74b791e94bd835f49def734c0bda47059521c9db55e4a&" style={style.cookie}/>
                </button>
                <div style={style.score}>
                    <font size="10">
                        Cookies = {this.state.score}
                    </font>
                </div>
                <button type="button" onClick={this.reset} style={style.resetButton}>
                    Reset Score
                </button>
                
            </div>  
        )
    }

}



export default Cookie;