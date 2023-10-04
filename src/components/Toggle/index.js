import React from 'react'
import styles from '../Toggle'

const Toggle = ({ value, onChange }) => (
    <label className={styles.switch} htmlFor="toggler">
        <button text-align='center' className='changeTheme' onClick={onChange} type='button' id='toggler'>theme</button>
        <span className={styles.slider} />
        <span className={styles.wave} />
    </label>
)

export default Toggle