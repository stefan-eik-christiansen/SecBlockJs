<?php declare(strict_types=1);

namespace Sec\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

/**
 * Provides the `sec_block_js_list` Twig filter which turns the raw,
 * user-entered plugin config string into a clean array of lowercase,
 * trimmed, non-empty script name fragments.
 *
 * Fault tolerance rules:
 * - null / empty input results in an empty list
 * - whitespace around each entry is removed
 * - empty entries (e.g. from trailing commas or double commas) are dropped
 * - all entries are lowercased
 * - duplicate entries are removed
 */
class BlockJsListExtension extends AbstractExtension
{
    public function getFilters(): array
    {
        return [
            new TwigFilter('sec_block_js_list', [$this, 'toList']),
        ];
    }

    /**
     * @return list<string>
     */
    public function toList(?string $value): array
    {
        if ($value === null || trim($value) === '') {
            return [];
        }

        $parts = explode(',', $value);

        $parts = array_map(
            static fn (string $part): string => mb_strtolower(trim($part)),
            $parts
        );

        $parts = array_filter(
            $parts,
            static fn (string $part): bool => $part !== ''
        );

        return array_values(array_unique($parts));
    }
}
