/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

const BetterExhaustiveDeps = require("./rules/BetterExhaustiveDeps.cjs");

const rules = {
  "exhaustive-deps": BetterExhaustiveDeps,
};

const configs = {
  recommended: {
    plugins: ["@wogns3623/better-exhaustive-deps"],
    rules: {
      "react-hooks/exhaustive-deps": "off",
      "@wogns3623/better-exhaustive-deps/exhaustive-deps": [
        "warn",
        { checkMemoizedVariableIsStatic: true },
      ],
    },
  },
};

module.exports = {
  rules,
  configs,
};
