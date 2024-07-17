"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[91379],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),a=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=a(e.components);return o.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=a(t),h=r,m=f["".concat(c,".").concat(h)]||f[h]||p[h]||l;return t?o.createElement(m,i(i({ref:n},u),{},{components:t})):o.createElement(m,i({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var a=2;a<l;a++)i[a]=t[a];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},64928:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return p}});var o=t(87462),r=t(63366),l=(t(67294),t(3905)),i=["components"],s={title:"How to make a Scroll",sidebar_position:1},c=void 0,a={unversionedId:"ecoscrolls/how-to-make-a-scroll",id:"ecoscrolls/how-to-make-a-scroll",title:"How to make a Scroll",description:"Default configs",source:"@site/docs/ecoscrolls/how-to-make-a-scroll.md",sourceDirName:"ecoscrolls",slug:"/ecoscrolls/how-to-make-a-scroll",permalink:"/ecoscrolls/how-to-make-a-scroll",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/ecoscrolls/how-to-make-a-scroll.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"How to make a Scroll",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"EcoScrolls",permalink:"/ecoscrolls/"},next:{title:"inscribe_item",permalink:"/ecoscrolls/ecoscrolls-effects/effects/inscribe_item"}},u={},p=[{value:"Default configs",id:"default-configs",level:2},{value:"How to add scrolls",id:"how-to-add-scrolls",level:2},{value:"Example Scroll Config",id:"example-scroll-config",level:2}],f={toc:p};function h(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,o.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"default-configs"},"Default configs"),(0,l.kt)("p",null,"The default configs can be found ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/EcoScrolls/tree/master/eco-core/core-plugin/src/main/resources/scrolls"},"here"),".\nYou can find additional user-created configs on ",(0,l.kt)("a",{parentName:"p",href:"https://lrcdb.auxilor.io/"},"lrcdb"),"."),(0,l.kt)("h2",{id:"how-to-add-scrolls"},"How to add scrolls"),(0,l.kt)("p",null,"Each scroll is its own config file, placed in the ",(0,l.kt)("inlineCode",{parentName:"p"},"/scrolls/")," folder, and you can add or remove them as you please. There's an example config called ",(0,l.kt)("inlineCode",{parentName:"p"},"_example.yml")," to help you out!"),(0,l.kt)("p",null,"The ID of the Scroll is the file name. This is what you use in commands and placeholders.\nID's must be lowercase letters, numbers, and underscores only."),(0,l.kt)("h2",{id:"example-scroll-config"},"Example Scroll Config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'# The ID of the scroll is the name of the .yml file,\n# for example coins_on_kill.yml has the ID of coins_on_kill\n# You can place scrolls anywhere in this folder,\n# including in subfolders if you want to organize your scroll configs\n# _example.yml is not loaded.\n\n# The name of the scroll\nname: "&6Example Scroll"\n\n# The max level of the scroll\nmax-level: 1\n\n# The amount of times the scroll can be used\nmax-uses: 1\n\n# Options for the physical scroll item\nitem:\n  item: paper glint\n\n  # Name and lore can use %uses%, %max_uses%, and %uses_left% placeholders\n  name: "&6&lExample Scroll"\n  lore:\n      - "&7This is an example scroll."\n      - "&7It does nothing."\n\n  # Options for crafting, read here: https://plugins.auxilor.io/all-plugins/the-item-lookup-system#crafting-recipes\n  craftable: false\n  recipe: [ ]\n\n# Options for inscribing items with the scroll\ninscription:\n  # The conditions required to inscribe the item\n  # not-met-effects will run if someone tries to inscribe the item without meeting the conditions\n  conditions: [ ]\n\n  # The effects that will be run when the item is inscribed\n  # If your scroll works by modifying the item (e.g. adding enchantments, changing durability),\n  # then put those effects here.\n  effects: [ ]\n\n  # Read https://plugins.auxilor.io/all-plugins/prices\n  # The price to inscribe the item\n  price:\n    value: 100\n    type: coins\n    display: "&e%value% coins"\n\n  # The formula to multiply the price depending on the level.\n  # The %level% placeholder is the *current* level of the scroll\n  price-level-multiplier: "1 + %level% * 0.5"\n\n  # If the scroll can be applied to items via drag-and-drop\n  drag-and-drop: true\n\n  # If the scroll can be applied to items via the inscription table\n  inscription-table: true\n\n# The items that the scroll can be applied to, see targets.yml\ntargets:\n  - sword\n\n# The conflicts that the scroll has with other scrolls\nconflicts: [ ]\n\n# The scroll(s) that must be applied to the item before this scroll can be applied\nrequirements:\n  - scroll: my_requirement_scroll # The scroll to require\n    level: 2 # The level required (optional)\n\n# If inscribing this scroll should remove the required scrolls\nremove-requirements: false\n\n# The lore added to items when inscribed with the scroll\nlore:\n  - ""\n  - "&7This item has been inscribed with"\n  - "&6Example Scroll"\n\n# Item placeholders for dynamic lore in plugins like EcoItems\n# The placeholder is %ecoscrolls_scroll_<scroll>_<placeholder>%, e.g.\n# %ecoscrolls_scoll_example_bonus%\nplaceholders:\n  bonus: "%level% * 2"\n\n# Read https://plugins.auxilor.io/effects/configuring-an-effect\n# The effects for the scroll to give\neffects:\n  - id: send_message\n    args:\n      message: "&6You have used the Example Scroll!"\n    triggers:\n      - alt_click\n\n# Read https://plugins.auxilor.io/effects/configuring-a-condition\n# The conditions for the scroll to work\nconditions: [ ]\n')))}h.isMDXComponent=!0}}]);