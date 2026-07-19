import './page/sec-block-js-list';
import deDE from './snippet/de-DE.json';
import enGB from './snippet/en-GB.json';

Shopware.Module.register('sec-block-js', {
    type: 'plugin',
    name: 'BlockJs',
    title: 'sec-block-js.general.mainMenuItemGeneral',
    description: 'sec-block-js.general.descriptionTextModule',
    color: '#ff3d58',
    icon: 'regular-cog',

    snippets: {
        'de-DE': deDE,
        'en-GB': enGB,
    },

    routes: {
        list: {
            component: 'sec-block-js-list',
            path: 'list',
            meta: {
                parentPath: 'sw.settings.index',
                privilege: 'system.system_config',
            },
        },
    },

    settingsItem: [{
        group: 'plugins',
        to: 'sec.block.js.list',
        icon: 'regular-cog',
        label: 'sec-block-js.general.mainMenuItemGeneral',
        privilege: 'system.system_config',
    }],
});
