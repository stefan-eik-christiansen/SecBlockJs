import template from './sec-block-js-list.html.twig';

const { Component, Mixin } = Shopware;

Component.register('sec-block-js-list', {
    template,

    inject: ['systemConfigApiService'],

    mixins: [
        Mixin.getByName('notification'),
    ],

    data() {
        return {
            isLoading: false,
            config: {
                blockJsHome: '',
                blockJsDetail: '',
                blockJsLanding: '',
                blockJsNavigation: '',
                blockJsCms: '',
                blockJsCheckout: '',
                blockJsAccount: '',
                blockJsSearch: '',
                blockJsFallback: '',
            },
        };
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.isLoading = true;

            this.systemConfigApiService.getValues('SecBlockJs.config')
                .then((values) => {
                    Object.keys(this.config).forEach((key) => {
                        const fullKey = `SecBlockJs.config.${key}`;

                        if (values[fullKey] !== undefined && values[fullKey] !== null) {
                            this.config[key] = values[fullKey];
                        }
                    });
                })
                .catch((error) => {
                    this.createNotificationError({
                        title: this.$tc('sec-block-js.general.titleError'),
                        message: error?.message ?? this.$tc('sec-block-js.general.messageLoadError'),
                    });
                })
                .finally(() => {
                    this.isLoading = false;
                });
        },

        onSave() {
            this.isLoading = true;

            const values = {};

            Object.keys(this.config).forEach((key) => {
                values[`SecBlockJs.config.${key}`] = this.config[key];
            });

            this.systemConfigApiService.saveValues(values)
                .then(() => {
                    this.createNotificationSuccess({
                        title: this.$tc('sec-block-js.general.titleSuccess'),
                        message: this.$tc('sec-block-js.general.messageSaveSuccess'),
                    });
                })
                .catch((error) => {
                    this.createNotificationError({
                        title: this.$tc('sec-block-js.general.titleError'),
                        message: error?.message ?? this.$tc('sec-block-js.general.messageSaveError'),
                    });
                })
                .finally(() => {
                    this.isLoading = false;
                });
        },
    },
});
