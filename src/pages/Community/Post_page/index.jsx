import React from 'react'

export default function Post_page(props) {
    const {date, author, title, article, img} = props;
    return (
        <div className="modal" tabIndex="-1" id="myModal">
                <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        
                    <div className="modal-body">
                        <p>{`Posted by ${author}`}</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ex 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ex fugit labore voluptate necessitatibus iusto quibusdam voluptas aut debitis officiis animi, dicta, quasi iure, earum omnis aliquam eum suscipit ratione!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ex fugit labore voluptate necessitatibus iusto quibusdam voluptas aut debitis officiis animi, dicta, quasi iure, earum omnis aliquam eum suscipit ratione!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ex fugit labore voluptate necessitatibus iusto quibusdam voluptas aut debitis officiis animi, dicta, quasi iure, earum omnis aliquam eum suscipit ratione!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ex fugit labore voluptate necessitatibus iusto quibusdam voluptas aut debitis officiis animi, dicta, quasi iure, earum omnis aliquam eum suscipit ratione!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ex fugit labore voluptate necessitatibus iusto quibusdam voluptas aut debitis officiis animi, dicta, quasi iure, earum omnis aliquam eum suscipit ratione!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ex fugit labore voluptate necessitatibus iusto quibusdam voluptas aut debitis officiis animi, dicta, quasi iure, earum omnis aliquam eum suscipit ratione!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ex fugit labore voluptate necessitatibus iusto quibusdam voluptas aut debitis officiis animi, dicta, quasi iure, earum omnis aliquam eum suscipit ratione!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ex fugit labore voluptate necessitatibus iusto quibusdam voluptas aut debitis officiis animi, dicta, quasi iure, earum omnis aliquam eum suscipit ratione!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ex fugit labore voluptate necessitatibus iusto quibusdam voluptas aut debitis officiis animi, dicta, quasi iure, earum omnis aliquam eum suscipit ratione!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ex fugit labore voluptate necessitatibus iusto quibusdam voluptas aut debitis officiis animi, dicta, quasi iure, earum omnis aliquam eum suscipit ratione!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ex fugit labore voluptate necessitatibus iusto quibusdam voluptas aut debitis officiis animi, dicta, quasi iure, earum omnis aliquam eum suscipit ratione!
                        fugit labore voluptate necessitatibus iusto quibusdam voluptas aut debitis officiis animi, dicta, quasi iure, earum omnis aliquam eum suscipit ratione!</p>
                    </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
              </div>
        </div>
    )
}
