import React from 'react'
import imageStyles from '../../src/components/image.module.css'

export default () => (
        <div className={imageStyles.container}>
            <div>
             <img className={imageStyles.img} src='https://duaneresume.s3.amazonaws.com/dmcfarlane.jpeg' />
            </div>
        </div>
)