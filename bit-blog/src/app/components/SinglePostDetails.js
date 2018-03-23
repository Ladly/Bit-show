import React from 'react'

import { Link } from 'react-router-dom'

const SinglePostDetails = () => {
    return (
        <div className="row center-align">
            <h2>Post Item 1</h2>
            <Link to="/singleauthor"><h5>Author Name</h5></Link> 
            <h5>Pellentesque sed consequat leo. Duis erat tortor, pharetra sit amet porttitor ut, auctor in enim. Etiam tempor tincidunt mi, nec ultrices sapien sollicitudin nec. Aenean ac justo blandit, convallis lorem nec, gravida nulla. Integer sit amet neque pretium, accumsan neque in, ultricies nibh. Ut lacinia posuere velit id euismod. Nulla placerat, felis id pellentesque pulvinar, dolor nibh placerat elit, et commodo est quam quis velit. Pellentesque sed est eu diam condimentum viverra at quis metus. Nam ornare ultricies velit in faucibus. Nunc rhoncus sit amet felis a ornare. 
                Ut volutpat dictum semper. Aliquam in nunc sem. Vestibulum efficitur convallis dui ut rhoncus.
                Pellentesque sed consequat leo. Duis erat tortor, pharetra sit amet porttitor ut, auctor in enim. Etiam tempor tincidunt mi, nec ultrices sapien sollicitudin nec. Aenean ac justo blandit, convallis lorem nec, gravida nulla. Integer sit amet neque pretium, accumsan neque in, ultricies nibh. Ut lacinia posuere velit id euismod. Nulla placerat, felis id pellentesque pulvinar, dolor nibh placerat elit, et commodo est quam quis velit. Pellentesque sed est eu diam condimentum viverra at quis metus. Nam ornare ultricies velit in faucibus. Nunc rhoncus sit amet felis a ornare. 
                Ut volutpat dictum semper. Aliquam in nunc sem. Vestibulum efficitur convallis dui ut rhoncus.
                Pellentesque sed consequat leo. Duis erat tortor, pharetra sit amet porttitor ut, auctor in enim.Pellentesque sed consequat leo. Duis erat tortor, pharetra sit amet porttitor ut, auctor in enim.
            </h5>
        </div>
    )
}

export {SinglePostDetails}