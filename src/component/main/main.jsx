import React from 'react'
import './main.scss'
import notebook1 from './img/notebook.svg'
import notebook from './img/notebook-kali-2022.jpg'

const highlight_card = [
    {
        h4:"Make Your Job Easier",
        key:1,
        p:"You can take any Linux and install pentesting tools on it, but you have to set the tools up manually and configure them. Kali is optimized to reduce the amount of work, so a professional can just sit down and go."
    },
    {
        h4:"Kali Everywhere",
        key:2,
        p:"A version of Kali is always close to you, no matter where you need it. Mobile devices, Docker, ARM, Amazon Web Services, Windows Subsystem for Linux, Prebuilt Virtual Machine, Installer Images, and others are all available."
    },
    {
        h4:"Customization",
        key:3,
        p:"With the use of metapackages, optimized for the specific tasks of a security professional,and a highly accessible and well documented ISO customization process, it's always easy to generate an optimized version of Kali for your specific needs."
    },
    {
        h4:"Documentation",
        key:4,
        p:"Whether you are a seasoned veteran or a novice, our documentation will have all the information you will need to know about Kali Linux. Multiple tips and \“recipes\"are available, to help ease doubts or address any issues. All documentation is open, so you can easily contribute."
    },
    {
        h4:"Community",
        key:5,
        p:"Kali Linux, with its BackTrack lineage, has a vibrant and active community. There are active Kali forums, IRC Channel, Kali Tools listings, an open bug tracker system, and even community provided tool suggestions."
    }
]

const kali_everywhere =[
    {
        key:1,
        h3:"Undercover Mode",
        p:"Using Kali in an environment where you don't want to draw attention to yourself? Kali Undercover is the perfect way to not stand out in a crowd."
    },
    {
        key:2,
        h3:"Kali NetHunter",
        p:"A mobile penetration testing platform for Android devices, based on Kali Linux. Kali NetHunter is made up of an App, App Store, Kali Container and KeX"
    },
    {
        key:3,
        h3:"Win-KeX",
        p:"Win-KeX provides a full Kali Desktop Experience for Windows WSL. Applications started via Kali's panel will share the desktop with Microsoft Windows applications."
    },
    
]

const Main = () => {
    return (
        <>
            

            <section>
            <div className='highlight'>
                <h1>The Industry Standard</h1>
                <h3>Kali Linux is not about its tools, nor the operating system.
                    Kali Linux is a <strong>platform</strong>.</h3>
            </div>

            <div className="highlight-card">
                {highlight_card.map(dat => {
                    return (
                        <>
                        <div className="card" key={dat.key}>
                            <h4>{dat.h4}</h4>
                            <p>{dat.p}</p>
                        </div>
                        </>
                    )
                    
                })}

            </div>
                 
        
        <figure>
            <a href="">
                <img src={notebook1} alt="Generic laptop PC"/>                
                <img src={notebook} alt="Kali Linux desktop"/>
            </a>
        </figure>
            
    </section>
        <section className='bg-light'>
            <div className='highlight'>
                <h2>All the tools you need</h2>
                <p>The Kali Linux penetration testing platform contains a vast array of tools and utilities. From information gathering to final reporting, Kali Linux enables security and IT professionals to assess the security of their systems.</p>
            </div>                
        
            
    </section>

        <section className='kali-everywhere'>
            <div className='highlight'>
                <h1>Kali Everywhere</h1>
            </div>

        
            <div className="highlight-card">
                {kali_everywhere.map(dat => {
                    return (
                        <>
                        <div className="card" key={dat.key}>
                            <h4>{dat.h3}</h4>
                            <p>{dat.p}</p>
                        </div>
                        </>
                    )
                    
                })}

            </div>
            
    </section>
            
        
        </>
    )
                
}
export default Main