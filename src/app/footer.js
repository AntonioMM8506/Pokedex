import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';


const Footer = () => {
    return(
        <div className="footer">
            <div className="container items-center py-2 text-center">
                    <p>You can know more about me in my <a className='underline' href="https://www.linkedin.com/in/antonio-man-mal/" target='_blank'>LinkedIn</a> profile
                        or see my other projects at my <a className='underline' href="https://github.com/AntonioMM8506" target='_blank'>GitHub</a></p>
                        <ul className="flex gap-4 justify-center">
                    <li>
                        <Link href="https://www.linkedin.com/in/antonio-man-mal/" target="_blank">
                            <Image
                                src="/media/linkedin.png"
                                width="50"
                                height="50"
                                alt='LinkedIn'
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://github.com/AntonioMM8506" target="_blank">
                            <Image
                                src="/media/github.png"
                                width="50"
                                height="50"
                                alt='GitHub'
                            />
                        </Link>
                    </li>
                </ul>
                    <p>&copy; 2024 Antonio Maldonado</p>
                    <br></br>
                </div>
        </div>
    )
}//End of Footer

export default Footer;
