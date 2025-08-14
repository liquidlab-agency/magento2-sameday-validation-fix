/**
 * Copyright © Liquidlab. All rights reserved.
 * Fixes the Sameday shipping module to properly validate Country field
 * which triggers shipping address validation and saving.
 */

define([
    'uiComponent',
    'Magento_Checkout/js/model/shipping-rates-validator',
    'Magento_Checkout/js/model/shipping-rates-validation-rules',
    '../../model/shipping-rates-validation-rules/samedaycourier'
], function (
    Component,
    defaultShippingRatesValidator,
    defaultShippingRatesValidationRules,
    samedaycourierShippingRatesValidationRules
) {
    'use strict';

    defaultShippingRatesValidationRules.registerRules('samedaycourier', samedaycourierShippingRatesValidationRules);

    return Component;
});
