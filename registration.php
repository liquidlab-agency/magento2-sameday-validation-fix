<?php
/**
 * Copyright © Liquidlab. All rights reserved.
 * Fixes the Sameday shipping module to properly validate Country field
 * which triggers shipping address validation and saving.
 */

use Magento\Framework\Component\ComponentRegistrar;

ComponentRegistrar::register(
    ComponentRegistrar::MODULE,
    'Liquidlab_SamedayValidationFix',
    __DIR__
);
