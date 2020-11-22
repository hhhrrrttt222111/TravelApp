import React from 'react'

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p> Made with <span aria-label="necro" role="img">👾</span> by HRT <span aria-label="green" role="img">💚</span> </p>
        </div>
    )
}

export default Footer
