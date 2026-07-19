# Changelog

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