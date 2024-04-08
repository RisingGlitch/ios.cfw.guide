import{_ as s,r,o as d,c as u,a as e,b as o,d as t,w as a,e as i}from"./app.29f64fbf.js";const c={},h=i('<div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>If you are trying to use a Virtual Machine software of some sort from Windows (e.g. Virtualbox, VMWare, Windows Subsystem for Linux, etc) you will not succeed with following this guide, and will need to obtain a bootable medium and follow the below steps using that bootable medium.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.</p></div><p>palen1x is a live bootable Linux environment that allows you to quickly run palera1n on a compatible device. palera1n is capable of jailbreaking iOS devices with A8(X) to A11 SoC&#39;s on iOS 15.0 or later</p><p>On A11 devices, you <strong>must disable your passcode</strong> and will not be able to use your passcode, or other SEP functionality, until you boot into a stock iOS state. SEP functionality includes things such as a passcode, Face ID/Touch ID, and Apple Pay.</p><p>Additionally, if your device is an A11 device on iOS 16 and you&#39;ve set a passcode before, you will need to <strong>erase all content and settings</strong> in order to be able to jailbreak.</p><h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2>',6),p=e("li",null,[o("A 128MB or greater USB Drive "),e("ul",null,[e("li",null,"If you don't have a USB Drive, but do have another form of supported removable bootable hardware (e.g. A CD or DVD), you can use that instead of a USB Drive")])],-1),y={href:"https://github.com/palera1n/palen1x/releases",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/ventoy/Ventoy/releases",target:"_blank",rel:"noopener noreferrer"},f=i('<h2 id="installing-ventoy" tabindex="-1"><a class="header-anchor" href="#installing-ventoy" aria-hidden="true">#</a> Installing Ventoy</h2><ol><li>Download and extract the contents of the <code>Ventoy.zip</code> file</li><li>Insert your USB drive if you have not already done so, and open the <code>Ventoy2Disk.exe</code> file</li><li>Select the USB drive you would like to boot palen1x from <ul><li>This USB drive will be completely erased</li><li>Ensure you back up all important data beforehand</li></ul></li><li>Click <code>Install</code> and confirm that you are ok erasing the USB drive <ul><li>Do not remove your USB Drive until the process has completed</li></ul></li><li>Once it has installed, copy the palen1x iso file that you downloaded onto the USB drive</li></ol><h2 id="booting-palen1x" tabindex="-1"><a class="header-anchor" href="#booting-palen1x" aria-hidden="true">#</a> Booting palen1x</h2><ol><li>Reboot, and then go into your BIOS settings and disable Secure Boot, then enter the boot picker and select your USB Drive to boot from <ul><li>This is different for every computer</li><li>Search your PC or motherboard brand to find out how to get to your BIOS settings if you are unsure</li></ul></li><li>Press enter once you see the Ventoy screen to boot into palen1x</li></ol><h2 id="running-palera1n" tabindex="-1"><a class="header-anchor" href="#running-palera1n" aria-hidden="true">#</a> Running palera1n</h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you are using a USB-C to Lightning cable to do this process, you may run into issues entering into DFU mode</p><p>If you do have issues, get a USB-A to Lightning cable and, if necessary, also get a USB-C to USB-A adapter.</p></div>',6),b=e("li",null,[o("Once you have loaded palen1x, select "),e("code",null,"Shell")],-1),g=e("li",null,[o("Type "),e("code",null,"palera1n")],-1),v=i('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>A9(X) and earlier devices have an issue where they will get stuck midway through this process in pongoOS. To work around this issue, you&#39;ll need to do the following:</p><ol><li>In the terminal window, press <code>Control</code> + <code>C</code> on your keyboard</li><li>Rerun the command that you just ran</li></ol><p>You&#39;ll need to do this every time you rejailbreak your device as well.</p></div><p>Once the device boots up, open the palera1n loader app and tap <code>Sileo</code>. After a bit of time, you&#39;ll be prompted to set a passcode for using command line stuff, and then afterwards,<code>Sileo</code> should be on your home screen.</p>',2),w={class:"custom-container tip"},_=e("p",{class:"custom-container-title"},"TIP",-1),S=e("p",null,"To rejailbreak your device, simply rerun the command you just ran and then repeat any other applicable steps.",-1),k=e("p",null,"Alternatively, you can also install a permanently signed semi-untethered jailbreak, which will allow you to rejailbreak your device without a computer.",-1);function x(I,B){const l=r("ExternalLinkIcon"),n=r("router-link");return d(),u("div",null,[h,e("ul",null,[p,e("li",null,[o("The latest version of "),e("a",y,[o("palen1x"),t(l)])]),e("li",null,[e("a",m,[o("Ventoy"),t(l)])])]),f,e("ol",null,[b,g,e("li",null,[o("Follow the on screen instructions to enter "),t(n,{to:"/faq/#what-is-dfu-mode"},{default:a(()=>[o("DFU mode")]),_:1}),o(".")])]),v,e("div",w,[_,S,k,e("p",null,[o("If you are using an A9(X) to A11 device on 15.0 to 16.6.1, you can follow "),t(n,{to:"/installing-dopamine"},{default:a(()=>[o("Installing Dopamine")]),_:1}),o(" to rejailbreak.")]),e("p",null,[o("If you are instead using an A8(X) device on 15.0 to 15.8.2, you can follow "),t(n,{to:"/installing-meowbrek2"},{default:a(()=>[o("Installing meowbrek2")]),_:1}),o(" to rejailbreak as well.")])])])}var D=s(c,[["render",x],["__file","index.html.vue"]]);export{D as default};
