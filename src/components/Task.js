import React from 'react'

const Task = ({ key, data, doneClick }) => {
    return (
        <div key={ key }>
                    { data }
                    
                    <span style={{ marginLeft: 4 }}>
                      <button
                        className = "btn btn-outline-success btn-sm"
                        onClick={ () => doneClick(key) }
                      >
                        Done
                      </button>
             
                    </span>
        </div>
    )
}

export default Task