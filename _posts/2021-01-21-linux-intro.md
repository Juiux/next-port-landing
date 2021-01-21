---
layout: post
title: Linux: Intro
---

## Prologue
I've been a Windows user for so long. Windows have been my playground since I was kid until several months ago, I got bored of it.
You know, the same boring UI and personally nothing new at all.  
It all changed when few weeks ago, some people - bless to all of them - introduced me to the heavenly Linux world.  
So, for all of you who doesn't know what Linux is or never heard any of it, don't worry, I got you covered. 

## Introduction
According to Wikipedia,

> Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged in a Linux distribution.  

The open source nature of Linux is the key to its growth. Because Linux is freely redistributable, everyone may create a distribution for any purpose. Popular Linux distributions include Debian, Ubuntu, Fedora, Arch, Gentoo, and many more. Commercial distributions include Red Hat Enterprise Linux and SUSE Linux Enterprise Server.  

Linux that is intended for desktop use includes a windowing system such as X11 or Wayland, and a desktop environment such as XFCE, GNOME, and KDE Plasma with their own respective apps, window manager, and compositor. Although, it is not really that necessary to install a whole desktop environment of such as some call it bloated or whatever, you can still use a system configured with window manager only environment such as i3, bspwm, xmonad, and dwm, etc. the limit is your imagination.  

Also referenced from Wikipedia:  

> Linux was originally developed for personal computers based on the Intel x86 architecture, but has since been ported to more platforms than any other operating system. Because of the dominance of Android on smartphones, Linux also has the largest installed base of all general-purpose operating systems. Although it is used by only around 2.3 percent of desktop computers, the Chromebook, which runs the Linux kernel-based Chrome OS, dominates the US K–12 education market and represents nearly 20 percent of sub-$300 notebook sales in the US. Linux is the leading operating system on servers (over 96.4% of the top 1 million web servers' operating systems are Linux), leads other big iron systems such as mainframe computers, and is the only OS used on TOP500 supercomputers (since November 2017, having gradually eliminated all competitors).  

> Linux also runs on embedded systems, i.e. devices whose operating system is typically built into the firmware and is highly tailored to the system. This includes routers, automation controls, smart home technology (like Google Nest), televisions (Samsung and LG Smart TVs use Tizen and WebOS, respectively), automobiles (for example, Tesla, Audi, Mercedes-Benz, Hyundai, and Toyota all rely on Linux), digital video recorders, video game consoles, and smartwatches. The Falcon 9's and the Dragon 2's avionics use a customized version of Linux.  

> 90% of all cloud infrastructure is powered by Linux including supercomputers and cloud providers. 74% of smartphones in the world are Linux-based.  

You can find more information about Linux [here](https://en.wikipedia.org/wiki/Linux).

## Overview: Distributions
You might know already after reading the above text that Linux distributions are diverse. Now that you know it, some distributions may even be highly different from each other. Each distribution can even have their own uniqueness on itself, let it be the features, user-friendliness, consumer target, and anything possible. But mostly, Linux distributions are categorized by its package management and its release schedule.  
Brief examples of Linux distributions includes:
### 1. Ubuntu
![Ubuntu](https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Ubuntu_20.10_2880p_EN_31_12_2020_13_51_50.png/1280px-Ubuntu_20.10_2880p_EN_31_12_2020_13_51_50.png)
The most popular Linux distribution developed by Canonical. It is easy to use, offers a good interface and user experience, and pre-installed with tools to enhance your productivity. Ubuntu has some different official flavours of Ubuntu like Kubuntu with its KDE Plasma desktop, Xubuntu with XFCE desktop, with GNOME as the default. Ubuntu follows a fixed release model with release every 6 months, and with LTS support releases every 2 years. It uses APT as the package manager. Ubuntu has a great documentation and community support. ([Ubuntu Wiki](https://wiki.ubuntu.com/), [Ubuntu Forums](https://ubuntuforums.org/), and [Ask Ubuntu](https://askubuntu.com/)).
### 2. Arch Linux
![Arch (Well, this is kinda diverse so I put my screenshot)](/img/arch.png)
Arch Linux is a Linux distribution that is focused on simplicity, modernity, pragmatism, user-centrality, and versatility. Arch Linux adheres to the KISS (Keep It Simple, Stupid) principle. This means that this Linux distribution attempts to have minimal distribution-specific changes, minimal breakage with updates, pragmatic over ideological design choices and focuses on user-centrality rather than user-friendliness. Again, thanks [Wikipedia](https://en.wikipedia.org/wiki/Arch_Linux). Arch Linux follows a rolling release model, meaning that users get the most bleeding edge of apps and system by just regularly updating it. It uses pacman as its package manager. Arch Linux has a well-known highly comprehensive documentation known as the [Arch Wiki](https://wiki.archlinux.org/) and a dedicated forum ([Arch Linux Forums](https://bbs.archlinux.org/)).
### 3. Fedora
![Fedora](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Fedora_33_with_its_default_desktop_environment_%28GNOME_3.38%29_and_background.png/1280px-Fedora_33_with_its_default_desktop_environment_%28GNOME_3.38%29_and_background.png)
Fedora is a Linux distribution developed by the Fedora Project which backed primarily by Red Hat. As innovation a concern, Fedora has a reputation for integrating new technologies earlier and working closely with the upstream Linux communities. Fedora uses a fixed release schedule with stable release every 6 months and also has a rolling release model with Fedora Rawhide. Since the release of Fedora 30, five different editions are currently available: Workstation, focused on the personal computer, Server for servers, CoreOS, focused on cloud computing, Silverblue, focused on an immutable desktop specialized to container-based workflows and IoT, focused on IoT devices. Fedora uses the RPM package management with DNF as a tool to manage the RPM packages. You can find a list of community maintained forums and such for Fedora [here](https://fedoraproject.org/wiki/Community_websites?rd=Community_Websites).
### 4. Debian
![Debian](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Debian10_Gnome.png/1280px-Debian10_Gnome.png)
Debian is one of the oldest Linux distributions. Debian is developed by the community-supported Debian Project, which was established by Ian Murdock on August 16, 1993. The Debian Stable branch is the most popular edition for personal computers and servers. Debian is also the basis for many other distributions, most notably Ubuntu. Debian follows a long-term support update model where new distributions are updated continually, and the next candidate is released after a time-based freeze. Debian uses dpkg as the package management system and APT as the front-end tool. Debian has its own respective [Debian Wiki](https://wiki.debian.org/) and [Debian User Forums](http://forums.debian.net/).
### 5. Gentoo
![Gentoo](https://upload.wikimedia.org/wikipedia/commons/1/11/Gentoo12.0.jpg)
Gentoo is a Linux distribution meant for advanced users. Unlike every other Linux distributions mentioned above that uses precompiled binary packages, Gentoo compiles the source code locally according to the user's preferences and is often optimized for the specific type of computer. Although, precompiled binaries are still available for some larger packages without available source code. It uses Portage as its package management system that is designed to be modular, portable, easy to maintain, and flexible. Google's Chromium OS is known to be based from Gentoo Linux. Gentoo uses a rolling release method in which users only need to update regularly, whenever they want (and having a free time since compiling sometimes takes forever in a slower machine) to get the latest bleeding edge software to date. Gentoo has its own respectable [Gentoo Wiki](https://wiki.gentoo.org/) and [Gentoo Forums](https://forums.gentoo.org/).

## Overview: Package Management
Different from Windows that use executables to install or run programs or applications, Linux embraces the use of package managers. In Windows, you go search the application installer executable from the web and sometimes had to choose and go to steps of downloading the executable and then finding the file and installing the application by running the said executable. In Linux however, you can do it by just a single line of command typed from the command line interface, provided you know the name of package, and then package manager will do the job of downloading and installing it for you. Simple, right?  
So, there's many package managers available in different types of Linux distributions. The most notable are the following:
### 1.  DPKG
DPKG is a package management system for Debian distributions and its derivatives. It is used to install, remove, store, and provide information about <strong>.deb</strong> packages.  

Example for DPKG commands include:
```
# dpkg -i <package-name>.deb    # To install a package
# dpkg -r <package-name>        # To remove a package
# dpkg -p <package-name>        # To remove a package along with its config files
# dpkg -l                       # To list packages, to list specific packages add a <package-name> after the option
# dpkg -s <package-name>        # To check if the package is installed or not
# dpkg -L <package-name>        # To check installed package location
# dpkg -help                    # To show more information about dpkg and all its commands
```
It is a low-level tool and there are front-end tools that help users to obtain packages from remote repositories and/or handle complex package relations and these include:
#### APT (Advanced Packaging Tool)
Front end for DPKG. Users of Debian or its derivatives should be familiar with this package management tool.  

Example for APT commands include:
```
$ sudo apt install <package-name>   # To install a package
$ sudo apt remove <package-name>    # To remove a package
```
Page is under construction.