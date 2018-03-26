import React from 'react'

class NewPostPage extends React.Component {
    state = {
        titleValue: "",
        postValue: ""
    }

    handleTextChange = (e) => {
        console.log(this.state.postValue);
        this.setState({
            postValue: e.target.value
        })
    }

    handleTitleChange = (e) => {
        console.log(this.state.titleValue);

        this.setState({
            titleValue: e.target.value
        })
    }


    submitData = (e) => {
        e.preventDefault()
        fetch('http://localhost:4000/posts', {
            method: 'POST',
            body: JSON.stringify({ "title": this.state.titleValue, "body": this.state.postValue }),
            headers: { 'Content-Type': 'application/json' },
        }).then(res => console.log(res))
    }

    render() {
        return (
            <div className="container">
                <h2 className="center-align">NEW POST</h2>
                <h4>Title</h4>
                <input type="text" value={this.state.titleValue} onChange={this.handleTitleChange} />
                <h4>Content</h4>
                <textarea value={this.state.postValue} onChange={this.handleTextChange}></textarea>
                <input type='button' value='submit' onClick={this.submitData} />
            </div >
        )
    }
}

export { NewPostPage }