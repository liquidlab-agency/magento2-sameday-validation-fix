/**
 * Copyright © Liquidlab. All rights reserved.
 * Fixes the Sameday shipping module to properly validate Country field
 * which triggers shipping address validation and saving.
 */

define([], function () {
    'use strict';

    return {
        /**
         * @return {Object}
         */
        getRules: function () {
            return {
                'postcode': {
                    'required': true
                },
                'country_id': {
                    'required': true
                },
                'region_id': {
                    'required': true
                },
                'region_id_input': {
                    'required': true
                }
            };
        }
    };
});
