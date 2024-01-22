// @ts-check
import { defineFlatConfig } from "eslint-define-config";
import plugin_typescript from "@typescript-eslint/eslint-plugin";
import parser_ts from "@typescript-eslint/parser";
// @ts-expect-error: No type definition
import plugin_vue from "eslint-plugin-vue";
// @ts-expect-error: No type definition
import plugin_vue_processor from "eslint-plugin-vue/lib/processor.js";
import parser_vue from "vue-eslint-parser";

export default defineFlatConfig([
    config_vue(),
]);

function config_vue() {
    const flatConfig_vue = defineFlatConfig({
        files:   ["**/*.vue"],
        plugins: {
            /** @type { any } */
            "@typescript-eslint": plugin_typescript,
            vue:                  plugin_vue,
        },
        processor:       plugin_vue_processor,
        languageOptions: {
            parser:        parser_vue,
            parserOptions: {
                ecmaFeatures: {
                    jsx: false,
                },
                extraFileExtensions: [".vue"],
                /** @type { any } */
                parser:              parser_ts,
                sourceType:          "module",
            },
        },
    });
    return flatConfig_vue;
}