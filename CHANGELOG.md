# Changelog

## [1.2.1] - 2026-07-19

_Fix: sw-text-field used `v-model` instead of `v-model:value`, which caused
entered values to be reset to their previous (empty) state as soon as the
field lost focus (e.g. via Tab or click)._

## [1.2.0] - 2026-07-19

_The auto-generated "Configuration" tab on the plugin tile has been removed
(config.xml deleted). Instead, a dedicated custom Administration module has
been added, reachable via Settings > Plugins > "Blocked Javascript". It
reads/writes the same `SecBlockJs.config.*` system config keys, so the
Storefront template logic is unchanged._

## [1.1.1] - 2026-07-19

_Fix: removed empty `<defaultValue>` tags from config.xml which could keep
the Administration from listing a Configuration page for the plugin._

## [1.1.0] - 2026-07-19

_Exclude lists are now configurable per route in the Administration
(Extensions > My extensions > Block Javascript) instead of being hard-coded
in the template. Input is parsed fault-tolerantly: whitespace and empty
entries are removed and values are lowercased._

## [1.0.0] - 2026-07-19

_First release with static exclude lists._