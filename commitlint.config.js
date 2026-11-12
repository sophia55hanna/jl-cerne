export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'revert', 'fix', 'feat', 'refact', 'style', 'chore', 'build', 'docs', 'protect'
            ]
        ]
    }
}