import{_ as s,r,o as d,c as u,a as e,b as t,d as o,w as a,e as n}from"./app.29f64fbf.js";const c={},h=e("h2",{id:"required-reading",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#required-reading","aria-hidden":"true"},"#"),t(" Required Reading")],-1),p=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"If you previously attempted an older blobless method, remove all delay and beta profiles prior to following this method.")],-1),g={class:"custom-container tip"},f=e("p",{class:"custom-container-title"},"TIP",-1),b=e("h2",{id:"requirements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#"),t(" Requirements")],-1),v=e("li",null,"A backup of your device through iCloud",-1),m=e("h2",{id:"instructions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#instructions","aria-hidden":"true"},"#"),t(" Instructions")],-1),y=e("h3",{id:"installing-dahlia",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-dahlia","aria-hidden":"true"},"#"),t(" Installing Dahlia")],-1),_={class:"custom-container tip"},w=e("p",{class:"custom-container-title"},"TIP",-1),k=e("li",null,"Launch your current jailbreak",-1),q={href:"https://dhinakg.github.io/repo/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://repo.alexia.lol",target:"_blank",rel:"noopener noreferrer"},I=e("li",null,[t("Search and install the "),e("code",null,"Dahlia"),t(" package")],-1),T=e("li",null,[t("Tap "),e("code",null,"Reboot Device"),t(", and then rejailbreak your device after rebooting")],-1),x=n('<h3 id="preparing-to-update" tabindex="-1"><a class="header-anchor" href="#preparing-to-update" aria-hidden="true">#</a> Preparing to Update</h3><ol><li>Open the settings app, scroll down, and tap on <code>Dahlia</code></li><li>Tap <code>Download Profiles</code>, then tap &quot;Dallas&quot;</li><li>Tap on &quot;Dallas Enabler&quot; to download the profile</li><li>Tap &quot;Allow&quot; when prompted</li><li>Exit out of the Dahlia menu and go to <code>General</code> -&gt; <code>Profiles &amp; Device Management</code> -&gt; <code>Dallas Enabler</code></li><li>Tap &quot;Install&quot; in the top right corner and enter your passcode if prompted</li><li>Tap &quot;Install&quot; again twice to confirm</li><li>Go back to the <code>Dahlia</code> tab in Settings</li><li>Re-tap on <code>Download Profiles</code> and then re-tap &quot;Dallas&quot;</li><li>Under &quot;Version Profiles&quot;, tap the version that you want to update to</li><li>Tap &quot;Allow&quot; when prompted</li><li>Open the Settings app</li><li>Exit out of the Dahlia menu and go to <code>General</code> -&gt; <code>Profiles &amp; Device Management</code> -&gt; <code>Dallas - [Version]</code><ul><li>If you see an error, make sure you&#39;re both jailbroken and that you installed Dallas Enabler earlier</li></ul></li><li>Tap &quot;Install&quot; in the top right corner and enter your passcode if prompted</li><li>Tap &quot;Install&quot; again twice to confirm</li><li>Reboot your device when prompted, then rejailbreak</li><li>Reopen the Settings app and go back to the Dahlia tab</li><li>Toggle <code>Enable Supervision-less Mode.</code><ul><li>You can also choose to enable <code>Toggle Supervision</code> instead, but the only way to remove supervision after updating is to either wait for a jailbreak or resetting your device</li></ul></li><li>Make sure <code>Ready to Update</code> says &quot;Yes&quot; <ul><li>If it doesn&#39;t, click the &quot;i&quot; next to the &quot;Ready to Update&quot; tab, and see what the issue is</li></ul></li></ol><h3 id="restoring-rootfs" tabindex="-1"><a class="header-anchor" href="#restoring-rootfs" aria-hidden="true">#</a> Restoring rootFS</h3>',3),S=n("<li>Open the Settings application</li><li>Tap <code>General</code> -&gt; <code>Software Update</code></li><li>Ensure that the version displayed is iOS version you desire to update to <ul><li><strong>Do not</strong> update yet, we will do this shortly</li><li>Ensure that the version displayed is the version that you want to update to</li><li>If it says that your device is up to date, the server used for Dallas is offline; wait for it to go back online</li></ul></li>",3),R=e("li",null,"Reboot your device",-1),E=n('<h3 id="updating-your-firmware-version" tabindex="-1"><a class="header-anchor" href="#updating-your-firmware-version" aria-hidden="true">#</a> Updating your firmware version</h3><ol><li>Plug your device into power and connect to the Internet with Wi-Fi</li><li>Open the Settings application</li><li>Tap <code>General</code> -&gt; <code>Software Update</code></li><li>Ensure that the version displayed is the version that you want to update to</li><li>Download and install the update</li></ol><h3 id="removing-dallas-profiles" tabindex="-1"><a class="header-anchor" href="#removing-dallas-profiles" aria-hidden="true">#</a> Removing Dallas profiles</h3><ol><li>Open the Settings application after updating to version you desired to update to</li><li>Go to <code>General</code> if not already there, then <code>Profiles and Device Management</code></li><li>Tap on both profiles, and tap <code>Remove Profile</code><ul><li>Enter your passcode if asked</li></ul></li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you chose to enable supervision earlier, your device will remain supervised. Being in a supervised state means that:</p><ul><li>A message will display in Settings, showing that your device is supervised</li><li>Activation lock will be disabled, potentially making your device accessible by thieves (FindMy will still work however)</li><li>If your device has Mobile Device Management enabled (e.g. a school or work device), then your organisation will be able to silently install and uninstall apps on your device</li></ul><p>Note that, for most users, staying in a supervised state won&#39;t be an issue.</p><p>It is possible to remove the supervised state by resetting your device and restoring a previously made backup. This can be done by selecting &quot;Erase All Content and Settings&quot; in the Settings app, then restoring from a backup during setup from iCloud.</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>If you restore a backup made in a jailbroken state from <strong>iTunes/Finder</strong>, you may encounter severe issues, such as bootloops.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you restore a backup made in a jailbroken state from <strong>iCloud</strong>, you may encounter false-positive flagging of jailbreak detection.</p></div>',7),j={href:"https://github.com/dhinakg/",target:"_blank",rel:"noopener noreferrer"};function P(A,G){const i=r("router-link"),l=r("ExternalLinkIcon");return d(),u("div",null,[h,p,e("div",g,[f,e("p",null,[t("You must have a jailbreak to follow these instructions. If you cannot jailbreak, follow "),o(i,{to:"/updating-blobless-nonjailbroken"},{default:a(()=>[t("Updating (Blobless) (Non-Jailbroken)")]),_:1}),t(" or "),o(i,{to:"/updating-blobless-advanced"},{default:a(()=>[t("Updating (Blobless) (Advanced)")]),_:1}),t(" instead.")])]),b,e("ul",null,[e("li",null,[t("A device you are able to jailbreak and install packages to "),e("ul",null,[e("li",null,[t("Check "),o(i,{to:"/get-started"},{default:a(()=>[t("Get Started")]),_:1}),t(" if you are unsure")])])]),v]),m,y,e("div",_,[w,e("p",null,[t("The Dahlia tweak, when using Dallas profiles, redirects update searches to a different server. As such, the owners of the server will be able to view your IP address. This is normal, however if you are uncomfortable with this, follow "),o(i,{to:"/updating-blobless-alternate"},{default:a(()=>[t("Updating (Blobless) (Alternate Method)")]),_:1}),t(" instead.")])]),e("ol",null,[k,e("li",null,[t("Open your preferred package manager and add the following repos: "),e("ul",null,[e("li",null,[e("a",q,[t("https://dhinakg.github.io/repo/"),o(l)])]),e("li",null,[e("a",D,[t("https://repo.alexia.lol"),o(l)])])])]),I,T]),x,e("ol",null,[S,e("li",null,[t("Open your current jailbreak and restore rootFS "),e("ul",null,[e("li",null,[t("If you need a detailed guide on how to restore rootfs, follow "),o(i,{to:"/restoring-rootfs"},{default:a(()=>[t("Restoring Rootfs")]),_:1}),t(" and select the jailbreak which you currently use")])])]),R]),E,e("p",null,[t("Credits to "),e("a",j,[t("dhinakg"),o(l)]),t(" for discovering this method.")])])}var M=s(c,[["render",P],["__file","index.html.vue"]]);export{M as default};
