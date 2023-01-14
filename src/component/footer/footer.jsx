import React from 'react'
import './footer.scss'

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className="container">
                    <div className="footer_component">

                        <h4>Links</h4>
                        <a href="https://www.kali.org/"  >Home</a>
                        <a href="https://www.kali.org/get-kali/"  >Download / Get Kali</a>
                        <a href="https://www.kali.org/blog/"  >Blog</a>
                        <a href="https://www.kali.org/docs/"  >OS Documentation</a>
                        <a href="https://www.kali.org/tools/"  >Tool Documentation</a>
                        <a href="https://status.kali.org/"  >System Status</a>
                        <a href="https://old.kali.org/"  >Archived Releases</a>

                    </div>
                    <div className="footer_component">
                        <div>
                            <h4>Platforms</h4>
                            <a href="https://arm.kali.org/" >ARM (SBC)</a>
                              
                                
                        </div>
                    <div className="footer_component">
                        <h4>Development</h4><a href="https://bugs.kali.org/"  >Bug Tracker</a>
                            <a href="https://autopkgtest.kali.org/"  >Continuous Integration</a>
                            <a href="https://http.kali.org/README.mirrorlist"  >Network Mirror</a>
                            <a href="https://pkg.kali.org/"  >Package Tracker</a>
                    </div>
                    <div className="footer_component">
                    <h4>Community</h4>
                   </div>
                    <div className="footer_component">
                        <h4>Follow Us</h4>
                    </div>
                    <div className="footer_component">
                        <h4>Policies</h4>
                        
                        <a href="https://www.kali.org/docs/policy/cookie/">Cookie Policy</a>
                            <a href="https://www.kali.org/docs/policy/privacy/">Privacy Policy</a>
                            <a href="https://www.kali.org/docs/policy/trademark/">Trademark Policy</a></div>
                    </div>
                    <div className="footer_component">
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer