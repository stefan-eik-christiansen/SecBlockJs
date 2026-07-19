# Block unwanted Javascript from your Shopware 6 storefront.

Increase pagespeed, block Javascript where unwanted.


## Add to Shopware

Add to composer.json using  
`composer require /stefan-eik-christiansen/block-javascript-shopware-6-plugin`


## Instructions

Keep it the 1st after 'Storefront' in themes.json to allow 3rd party plugins further extension of the meta.html.twig's Javascript block.

Find the plugin's settings in the admin, within "Extensions / My Extensions".  
Add the string matching the Javascript you want to block to the input field referring the route you want it to be blocked in.
