import{_ as r}from"./sideloadly_win.6263388d.js";import{_ as s,r as n,o as d,c,a as e,b as o,d as t,w as l,e as p}from"./app.29f64fbf.js";const h={},u=e("p",null,"Ph\u0153nix is capable of jailbreaking 32bit iOS devices on firmware version 9.3.5 and 9.3.6.",-1),m=e("p",null,"Note that the Ph\u0153nix jailbreak is not \u201Cpersistent\u201D (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.",-1),_=e("p",null,"Due to how custom applications are installed to the device, in most cases you will need to reinstall the Ph\u0153nix jailbreak application to your device every 7 days from your computer.",-1),f=e("p",null,"We will use the Sideloadly tool to install the Ph\u0153nix jailbreak application to your iOS device for use in the next step.",-1),g=e("h2",{id:"downloads",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#downloads","aria-hidden":"true"},"#"),o(" Downloads")],-1),w=e("div",{class:"custom-container tip",id:"ifJailbreaksAppSigned"},[e("p",null,[o(" Ph\u0153nix is currently signed at "),e("a",{href:"https://jailbreaks.app/legacy.html",target:"_blank"},"jailbreaks.app"),o(" for easy installation without a computer. ")])],-1),y={href:"https://phoenixpwn.com/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://sideloadly.io/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.apple.com/itunes/download/win32",target:"_blank",rel:"noopener noreferrer"},v=p('<p><img src="'+r+'" alt="A screenshot of the Sideloadly application (Windows)"></p><h2 id="installing-the-application" tabindex="-1"><a class="header-anchor" href="#installing-the-application" aria-hidden="true">#</a> Installing the application</h2><ol><li>Open Sideloadly</li><li>Plug your iOS device into your computer <ul><li>Make sure your computer is trusted and allowed to view the contents of your device</li></ul></li><li>Drag and drop the Ph\u0153nix <code>.ipa</code> file into Sideloadly</li><li>Enter in your Apple ID</li><li>Enter in your password <ul><li>Sideloadly must make a request to it&#39;s servers in order to work with free developer accounts. If you are not OK with this, you may use an alternate Apple ID.</li></ul></li></ol><p>The app will now install to your iOS device.</p><h2 id="trusting-the-application" tabindex="-1"><a class="header-anchor" href="#trusting-the-application" aria-hidden="true">#</a> Trusting the application</h2><ol><li>Go to <code>Settings</code> -&gt; <code>General</code> -&gt; <code>Device Management</code> -&gt; <code>&lt;Your Apple ID&gt;</code><ul><li>Depending on your iOS version, <code>Device Management</code> may be labeled <code>Profiles and Device Management</code></li></ul></li><li>Tap <code>Trust &quot;&lt;Your Apple ID&gt;&quot;</code></li></ol><p>The Ph\u0153nix application can now be opened from home screen.</p><h2 id="running-ph\u0153nix" tabindex="-1"><a class="header-anchor" href="#running-ph\u0153nix" aria-hidden="true">#</a> Running Ph\u0153nix</h2><ol><li>Open the Ph\u0153nix application from your home screen</li><li>Tap <code>Prepare for Jailbreak</code> -&gt; <code>Accept</code> -&gt; <code>Dismiss</code> -&gt; <code>Proceed with Jailbreak</code> -&gt; <code>Begin Installation</code> -&gt; <code>Use Provided Offsets</code></li></ol><p>When jailbreaking for a second time, an option called &quot;Kickstart Jailbreak&quot; will replace &quot;Prepare for Jailbreak&quot;. Tap that instead.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If your device crashes or restarts unexpectedly and the jailbreak isn&#39;t installed, simply try running the exploit again until it does work.</p></div>',11),x={class:"custom-container tip"},P=e("p",{class:"custom-container-title"},"TIP",-1);function I(S,T){const i=n("ExternalLinkIcon"),a=n("router-link");return d(),c("div",null,[u,m,_,f,g,w,e("ul",null,[e("li",null,[o("The latest version of "),e("a",y,[o("Ph\u0153nix"),t(i)])]),e("li",null,[o("The latest version of "),e("a",b,[o("Sideloadly"),t(i)])]),e("li",null,[o("The latest version of "),e("a",k,[o("iTunes"),t(i)]),o(" if on Windows")])]),v,e("p",null,[o("You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install "),t(a,{to:"/faq/#what-are-tweaks"},{default:l(()=>[o("tweaks")]),_:1}),o(", themes and more.")]),e("div",x,[P,e("p",null,[o("If you wish to use a more modern package manager, continue to "),t(a,{to:"/installing-zebra"},{default:l(()=>[o("Installing Zebra")]),_:1})])])])}var O=s(h,[["render",I],["__file","index.html.vue"]]);export{O as default};
