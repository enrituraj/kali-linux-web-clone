import React from 'react'
import Navbar from '../navbar/navbar'
import './blog.scss'
import img1 from './img/01.jpg'
import img2 from './img/02.jpg'
import img3 from './img/03.jpg'
import img4 from './img/04.jpg'
import img5 from './img/05.jpg'
import img6 from './img/06.jpg'
import img7 from './img/07.jpg'
import img8 from './img/08.jpg'
import img9 from './img/09.jpg'
import img10 from './img/10.jpg'
const blog_data = [
  {
    img: img1,
    date: '11 January 2023',
    main_text: 'Kali Linux (is) Everywhere!',
    desc: 'One of the primary goals of Kali Linux is to put the tools you need as close to you as possible. Over the years this has resulted in a number of different ways to get Kali, but not everyone knows about all the options! In this post we are going to do an overview of different options you have for running Kali, and where you can go for more information for each option.'
  },
  {
    img: img2,
    date: '06 December 2022',
    main_text: 'Kali Linux 2022.4 Release (Azure, Social & Kali NetHunter Pro)',
    desc: 'Before the year is over, we thought it was best to get the final 2022 release out. Today we are publishing Kali Linux 2022.4. This is ready for immediate download or updating existing installations. A summary of the changelog since August’s 2022.3 release: Microsoft Azure - We are back on the Microsoft Azure store More Platforms - Generic Cloud, QEMU VM image & Vagrant libvirt Social Networks - New homes, keeping in touch & press packs Kali NetHunter Pro - Announcing the first release of a “true” Kali Linux on the mobile phone (PinePhone / Pro) Kali NetHunter - Internal Bluetooth support, kernel porting video, firmware updates & other improvements Desktop Updates - GNOME 43 & KDE 5.'
  },
  {
    img: img3,
    date: '28 November 2022',
    main_text: 'Remotely Accessing Secure Kali Pi',
    desc: 'In Secure Kali Pi (2022), the first blog post in the Raspberry Pi series, we set up a Raspberry Pi 4 with full disk encryption. We mentioned that we can leave it somewhere as a drop box. This brought up the question, “If it is not on my local network how do I connect to it to unlock it?'
  },
  {
    img: img4,
    date: '24 October 2022',
    main_text: 'Kali Community Themes',
    desc: 'The following blog post was written by a moderator on the Kali Linux & Friends Discord server, Tristram. A massive thank you to Tristram for writing this blog post and to all of the participants! This past summer we held our first community event on the Kali Linux & Friends Discord.'
  },
  {
    img: img5,
    date: '13 October 2022',
    main_text: 'Community Showcase: Raspberry Pi Zero W P4wnP1 A.L.O.A.',
    desc: 'The Kali community has been hard at work (as always!), and we want to showcase what we think is a very cool project of Kali Linux on a Raspberry Pi Zero W, the “P4wnP1 A.L.O.A. (A Little Offensive Application)”. It takes the standard Kali Linux image and adds custom software and some extra firmware designed for the Raspberry Pi Zero W to turn it into a Swiss Army knife of attacks and exfiltration.'
  },
  {
    img: img6,
    date: '09 August 2022',
    main_text: 'Kali Linux 2022.3 Release (Discord & Test Lab)',
    desc: 'In light of “Hacker Summer Camp 2022” (BlackHat USA, BSides LV, and DEFCON) occurring right now, we wanted to push out Kali Linux 2022.3 as a nice surprise for everyone to enjoy! With the publishing of this blog post, we have the download links ready for immediate access, or you can update any existing installation.'
  },
  {
    img: img7,
    date: '02 August 2022',
    main_text: 'Secure Kali Pi (2022)',
    desc: 'This is the first part of a 3 part series of blog posts surrounding Kali usage on Raspberry Pi devices. This first post will cover enabling Full Disk Encryption (FDE) on a Raspberry Pi, part two will cover remotely connecting to it, and finally, part three will cover debugging issues we ran into while making these posts, so others can learn how to do so as well.'
  },
  {
    img: img8,
    date: '21 July 2022',
    main_text: 'Weekly Virtual Machines, with Build Scripts',
    desc: 'We have always made all our build-scripts public. These are the same set of tools which we use to generate Kali Linux (for each release, or our weekly images). You may have noticed that previously there wasn’t anything about Virtual Machines (VMs). This is because until recently it was a manually done process, which followed our guides (VMware & VirtualBox).'
  },
  {
    img: img9,
    date: '08 July 2022',
    main_text: 'Kali Linux in Linodes Cloud',
    desc: 'A few months ago, Linode reached out to us asking “What would be needed in order to get Kali added to Linode?”. We explained to them how all the build-scripts that we used to create Kali are public, and what their different options and configurations mean. They went away and came back shortly with an image for us to try out!'
  },
  {
    img: img10,
    date: '16 May 2022',
    main_text: 'Kali Linux 2022.2 Release (GNOME 42, KDE 5.24 & hollywood-activate)',
    desc: 'It’s that time of year again, time for another Kali Linux release! Quarter #2 - Kali Linux 2022.2. This release has various impressive updates, all of which are ready for immediate download or updating. The summary of the changelog since the 2022.1 release from February 2022 is: GNOME 42 - Major release update of the popular desktop environment KDE Plasma 5.  '
  },
]
const Blog = (props) => {
  return (
    <>
      <Navbar bg="navbar-light" />
      <h1 className='page-title'>Kali Linux Blog</h1>
      <div className="blog_main">

        {blog_data.map(data => {
          return (
            <>
              <div className="blog_card" key={data.key}>
                <img src={data.img} alt="" />
                <h6 className='date'>{data.date}</h6>
                <h4 className='main_text'>{data.main_text}</h4>
                <p className='desc'>{data.desc}</p>
                <button className='btn-blog'>READ MORE</button>
              </div>
            </>
          )

        })}

      </div>
    </>
  )
}

export default Blog