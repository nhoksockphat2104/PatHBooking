import React, { useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";

function Load() {
    let [loading] = useState(true);
    return (
        <div style={{marginTop:'250px'}}>
            <div className="sweet-loading text-center">
                <ClipLoader
                    color="#000"
                    loading={loading}
                    size={70}
                    css=''
                    speedMultiplier={1}
                />
            </div>
        </div>
    )
}

export default Load