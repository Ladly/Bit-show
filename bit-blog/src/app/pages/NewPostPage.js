import React from 'react'

class NewPostPage extends React.Component {
    state = {

    }
    
    render() {

        return (
            <div className="container">
                <h2 className="center-align">NEW POST</h2>
                <form>
                    <h4>Title</h4>
                    <input type="text" />
                    <h4>Content</h4>
                    <textarea></textarea>
                </form>
            </div>
        )
    }
}

export { NewPostPage }